/* ------------------------------------------------------------------ */
/*  app/api/sendAccommodationEmail/route.ts                           */
/* ------------------------------------------------------------------ */
import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { EmailTempAccommodation } from "@/lib/Email/EmailTemp";

/* ------------------------------------------------------------------ */
/* POST  -- handles the accommodation enquiry form                    */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    /* ---------- 1. Parse form-data ---------- */
    const fd = await req.formData();

    const name            = fd.get("name")?.toString().trim();
    const email           = fd.get("email")?.toString().trim();
    const phone           = fd.get("phone")?.toString();
    const numberOfPeople  = fd.get("numberOfPeople")?.toString();
    const roomType        = fd.get("roomType")?.toString();
    const hospitalName    = fd.get("hospitalName")?.toString();
    const city            = fd.get("city")?.toString();
    const messageForUs    = fd.get("messageForUs")?.toString();

    /* multiple files arrive under  <input name="documents" multiple> */
    const files = fd.getAll("documents") as File[];

    /* ---------- 2. Basic validation ---------- */
    if (
      !name || !email || !phone || !numberOfPeople ||
      !roomType || !hospitalName || !city || !messageForUs
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    /* ---------- 3. Render the HTML e-mail body ---------- */
    const emailHtml = await render(
      React.createElement(EmailTempAccommodation, {
        name,
        email,
        phoneNumber:       phone,
        numberOfPeople,
        roomType,
        hospitalName,
        city,
        messageForUs,
      }),
    );

    /* ---------- 4. Build attachments directly from memory ---------- */
    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content:  Buffer.from(await file.arrayBuffer()),
      })),
    );

    /* ---------- 5. Configure Nodemailer transport ---------- */
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,              // STARTTLS (faster + unblocked)
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

    /* ---------- 6. Send the message ---------- */
    await transporter.sendMail({
      from:    process.env.SENDER_EMAIL,
      to:      process.env.SUBMIT_EMAIL,
      subject: `🏨  ${name} requested accommodation!`,
      html:    emailHtml,
      attachments,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (err) {
    console.error("Accommodation email error →", err);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}

/* ------------------------------------------------------------------ */
/* GET -- simple health-check for the route                           */
/* ------------------------------------------------------------------ */
export function GET() {
  return NextResponse.json({ message: "Accommodation API is live." });
}
