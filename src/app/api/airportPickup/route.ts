/* ------------------------------------------------------------------ */
/*  app/api/sendAirportEmail/route.ts                                 */
/* ------------------------------------------------------------------ */
import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { EmailTempAirport } from "@/lib/Email/EmailTemp";

/* ------------------------------------------------------------------ */
/* POST  -- handles the airport-pickup enquiry form                   */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    /* ---------- 1. Parse form data ---------- */
    const fd = await req.formData();

    const name         = fd.get("name")?.toString().trim();
    const email        = fd.get("email")?.toString().trim();
    const phone        = fd.get("phone")?.toString();
    const vehicle      = fd.get("vehicle")?.toString();
    const messageForUs = fd.get("messageForUs")?.toString();

    /* multiple files under <input name="airTicket" multiple> */
    const files = fd.getAll("airTicket") as File[];

    /* ---------- 2. Basic validation ---------- */
    if (!name || !email || !phone || !vehicle || !messageForUs) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    /* ---------- 3. Render e-mail HTML ---------- */
    const emailHtml = await render(
      React.createElement(EmailTempAirport, {
        name,
        email,
        phoneNumber: phone,
        vehicle,
        messageForUs,
      }),
    );

    /* ---------- 4. Build attachments straight from memory ---------- */
    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content:  Buffer.from(await file.arrayBuffer()),
      })),
    );

    /* ---------- 5. Nodemailer transport (GoDaddy) ---------- */
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,               // STARTTLS
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

    /* ---------- 6. Send the e-mail ---------- */
    await transporter.sendMail({
      from:    process.env.SENDER_EMAIL,
      to:      process.env.SUBMIT_EMAIL,
      subject: `✈️  ${name} requested an airport pickup!`,
      html:    emailHtml,
      attachments,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (err) {
    console.error("Airport email error →", err);
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
  return NextResponse.json({ message: "Airport-pickup API is live." });
}
