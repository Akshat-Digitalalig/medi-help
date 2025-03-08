import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { GetFreeConsult } from "@/lib/Email/EmailTemp";

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const formdata = await req.formData();
    const name = formdata.get("name");
    const phone = formdata.get("phone");
    const email = formdata.get("email");
    const country = formdata.get("country");
    const city = formdata.get("city");
    const age = formdata.get("ageOrDOB");
    const medicalProblem = formdata.get("medicalProblem");

    console.log(formdata)

    // Validate input
    if (!name || !phone || !email || !country || !age || !city || !medicalProblem) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", // GoDaddy's SMTP server
      port: 465, // Use 465 for SSL
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_SENDER_EMAIL,
        pass: process.env.NEXT_PUBLIC_SENDER_EMAIL_PASSWORD,
      },
    });

    // Render the email template
    const emailHtml = await render(
      React.createElement(GetFreeConsult, {
        name: String(name),
        phone: String(phone),
        email: String(email),
        country: String(country),
        city: String(city),
        age: String(age),
        medicalProblem: String(medicalProblem)
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
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result);
    return NextResponse.json(
      {
        message: "Email sent successfully",
        details: result // Include email sending details in the response
      },
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
