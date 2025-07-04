/* ------------------------------------------------------------------ */
/*  app/api/sendConsultEmail/route.ts                                 */
/* ------------------------------------------------------------------ */
import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { GetFreeConsult } from "@/lib/Email/EmailTemp";

/* ------------------------------------------------------------------ */
/* POST  -- handles the free-consultation JSON form                   */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    /* ---------- 1. Parse JSON body ---------- */
    const formValues = await req.json();
    const {
      name,
      phone,
      email,
      country,
      city,
      ageOrDOB,
      medicalProblem,
    } = formValues;

    /* ---------- 2. Basic validation ---------- */
    if (
      !name || !phone || !email ||
      !country || !city || !ageOrDOB || !medicalProblem
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    /* ---------- 3. Render HTML e-mail body ---------- */
    const emailHtml = await render(
      React.createElement(GetFreeConsult, formValues)
    );

    /* ---------- 4. Nodemailer transport ---------- */
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,                 // STARTTLS
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SENDER_EMAIL!,
        pass: process.env.SENDER_EMAIL_PASSWORD!,
      },
      connectionTimeout: 8_000,
      greetingTimeout:   8_000,
      tls: { rejectUnauthorized: false },
    });

    /* ---------- 5. Send the message ---------- */
    const result = await transporter.sendMail({
      from:    process.env.SENDER_EMAIL,
      to:      process.env.SUBMIT_EMAIL,
      subject: `🩺  ${name} requested a free consultation!`,
      html:    emailHtml,
    });

    return NextResponse.json(
      { message: "Email sent successfully", details: result },
      { status: 200 },
    );
  } catch (err) {
    console.error("Consult email error →", err);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}

/* ------------------------------------------------------------------ */
/* GET -- simple health-check                                         */
/* ------------------------------------------------------------------ */
export function GET() {
  return NextResponse.json({ message: "Consultation API is live." });
}
