/* ------------------------------------------------------------------ */
/*  app/api/sendHealthAdvisorEmail/route.ts                           */
/* ------------------------------------------------------------------ */
import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { EmailTempHealthAdvisor } from "@/lib/Email/EmailTemp";

/* ------------------------------------------------------------------ */
/* POST  -- handles the Health-Advisor enquiry form                   */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    /* ---------- 1. Parse form data ---------- */
    const fd = await req.formData();

    const name         = fd.get("name")?.toString().trim();
    const phone        = fd.get("phone")?.toString();
    const email        = fd.get("email")?.toString().trim();
    const country      = fd.get("country")?.toString();
    const age          = fd.get("age")?.toString();
    const gender       = fd.get("gender")?.toString();
    const messageForUs = fd.get("messageForUs")?.toString();

    /* ---------- 2. Basic validation ---------- */
    if (
      !name || !phone || !email ||
      !country || !age || !gender || !messageForUs
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    /* ---------- 3. Render HTML e-mail body ---------- */
    const emailHtml = await render(
      React.createElement(EmailTempHealthAdvisor, {
        name,
        phone,
        email,
        country,
        age,
        gender,
        messageForUs,
      }),
    );

    /* ---------- 4. Nodemailer transport ---------- */
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,                 // STARTTLS (faster + unblocked)
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

    /* ---------- 5. Send the e-mail ---------- */
    const result = await transporter.sendMail({
      from:    process.env.SENDER_EMAIL,
      to:      process.env.SUBMIT_EMAIL,
      subject: `🩺  ${name} submitted health-advisor info!`,
      html:    emailHtml,
    });

    return NextResponse.json(
      { message: "Email sent successfully", details: result },
      { status: 200 },
    );
  } catch (err) {
    console.error("Health-advisor email error →", err);
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
  return NextResponse.json({ message: "Health-advisor API is live." });
}
