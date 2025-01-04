import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { EmailTempVideoConsult } from "@/lib/Email/EmailTemp";

const UPLOAD_DIR = path.resolve("public/uploads");

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const formdata = await req.formData();
    const name = formdata.get("name");
    const email = formdata.get("email");
    const phone = formdata.get("phone");
    const passport = formdata.get("passport") as File;
    const doctorName = formdata.get("doctorName");
    const disease = formdata.get("disease");
    const messageForUs = formdata.get("messageForUs");

    // Handle multiple medical report uploads
    const medicalReports = formdata.getAll("medicalReports") as File[];
    const filePaths: string[] = [];

    // Validate input
    if (!name || !email || !phone || !passport || !doctorName || !disease || !messageForUs) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Process passport upload
    const passportBuffer = Buffer.from(await passport.arrayBuffer());
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const passportPath = path.resolve(UPLOAD_DIR, passport.name);
    fs.writeFileSync(passportPath, passportBuffer);
    filePaths.push(passportPath);

    // Process medical report uploads
    for (const file of medicalReports) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filePath = path.resolve(UPLOAD_DIR, file.name);
      fs.writeFileSync(filePath, buffer);
      filePaths.push(filePath);
    }

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "tharabhainarendra7@gmail.com",
        pass: "rloeduhdtwapycbj",
      },
    });

    // Render the email template
    const emailHtml = await render(
      React.createElement(EmailTempVideoConsult, {
        name: String(name),
        email: String(email),
        phoneNumber: String(phone),
        doctorName: String(doctorName),
        disease: String(disease),
        messageForUs: String(messageForUs),
      })
    );

    // Define mail options
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      to: process.env.NEXT_PUBLIC_SUBMIT_EMAIL,
      subject: `👋 ${name}, Sent a Query for Medical Reports!`,
      html: emailHtml,
      attachments: filePaths.map((filePath, index) => ({
        filename: index === 0 ? passport.name : medicalReports[index - 1].name,
        path: filePath,
      })),
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Remove the files after sending the email
    if (fs.existsSync(UPLOAD_DIR)) {
      fs.rmSync(UPLOAD_DIR, { recursive: true });
    } 


    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

// Handle GET requests
export function GET() {
  return NextResponse.json({ message: "Hello from the API!" });
}
