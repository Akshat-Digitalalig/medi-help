import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { EmailTempTranslator } from "@/lib/Email/EmailTemp";

const UPLOAD_DIR = path.resolve("/tmp/uploads");

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const formdata = await req.formData();
    const name = formdata.get("name");
    const email = formdata.get("email");
    const phone = formdata.get("phone");
    const country = formdata.get("country");
    const language = formdata.get("language");
    const messageForUs = formdata.get("messageForUs");

    // Handle multiple file uploads
    const files = formdata.getAll("passportFiles") as File[];
    const filePaths: string[] = [];

    // Validate input
    if (!name || !email || !phone || !country || !language || !messageForUs) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Process file uploads
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
      }

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
      React.createElement(EmailTempTranslator, {
        name: String(name),
        email: String(email),
        phoneNumber: String(phone),
        country: String(country),
        language: String(language),
        messageForUs: String(messageForUs),
      })
    );

    // Define mail options
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      to: process.env.NEXT_PUBLIC_SUBMIT_EMAIL,
      subject: `👋 ${name}, Sent a Query!`,
      html: emailHtml,
      attachments: filePaths.map((filePath, index) => ({
        filename: files[index].name,
        path: filePath,
      })),
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Remove the files after sending the email
    for (const filePath of filePaths) {
      fs.unlinkSync(filePath);
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
