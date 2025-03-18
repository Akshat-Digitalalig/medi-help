import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { GetFreeConsult } from "@/lib/Email/EmailTemp";

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    // Parse JSON request body
    const formValues = await req.json();
    const { name, phone, email, country, city, ageOrDOB, medicalProblem } =
      formValues;

    // Validate input
    if (
      !name ||
      !phone ||
      !email ||
      !country ||
      !ageOrDOB ||
      !city ||
      !medicalProblem
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", // Alternative GoDaddy SMTP
      port: 465, // Use TLS
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_SENDER_EMAIL,
        pass: process.env.NEXT_PUBLIC_SENDER_EMAIL_PASSWORD,
      },
      tls: { ciphers: "SSLv3" },
    });

    // Render the email template
    const emailHtml = await render(
      React.createElement(GetFreeConsult, formValues)
    );

    // Define mail options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      to: process.env.NEXT_PUBLIC_SUBMIT_EMAIL, // Ensure this is properly set
      subject: `👋 ${name}, Submitted Basic Information!`,
      html: emailHtml,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result);

    return NextResponse.json(
      { message: "Email sent successfully", details: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error },
      { status: 500 }
    );
  }
}

// Handle GET requests
export function GET() {
  return NextResponse.json({ message: "Hello from the API!" });
}
