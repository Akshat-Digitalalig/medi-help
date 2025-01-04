import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { EmailTempHealthAdvisor } from "@/lib/Email/EmailTemp";

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const formdata = await req.formData();
    const name = formdata.get("name");
    const phone = formdata.get("phone");
    const email = formdata.get("email");
    const country = formdata.get("country");
    const age = formdata.get("age");
    const gender = formdata.get("gender");
    const messageForUs = formdata.get("messageForUs");

    // Validate input
    if (!name || !phone || !email || !country || !age || !gender || !messageForUs) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
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
      React.createElement(EmailTempHealthAdvisor, {
        name: String(name),
        phone: String(phone),
        email: String(email),
        country: String(country),
        age: String(age),
        gender: String(gender),
        messageForUs: String(messageForUs),
      })
    );

    // Define mail options
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      to: process.env.NEXT_PUBLIC_SUBMIT_EMAIL,
      subject: `👋 ${name}, Submitted Basic Information!`,
      html: emailHtml,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

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
