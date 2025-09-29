/* ------------------------------------------------------------------ */
/*  app/api/sendVisaInvitationEmail/route.ts                          */
/* ------------------------------------------------------------------ */
import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { EmailTempVisaInvitations } from "@/lib/Email/EmailTemp";

/* ------------------------------------------------------------------ */
/* POST  -- handles the visa-invitation request form                  */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    /* ---------- 1. Parse multipart form ---------- */
    const fd = await req.formData();

    const name               = fd.get("name")?.toString().trim();
    const email              = fd.get("email")?.toString().trim();
    const phone              = fd.get("phone")?.toString();
    const numberOfAttendants = fd.get("numberOfAttendants")?.toString();
    const appointmentDate    = fd.get("appointmentDate")?.toString();
    const hospitalName       = fd.get("hospitalName")?.toString();
    const messageForUs       = fd.get("messageForUs")?.toString();

    const medicalReports      = fd.getAll("medicalReports")     as File[];
    const patientPassport     = fd.get("patientPassport")       as File | null;
    const attendantsPassports = fd.getAll("attendantsPassports") as File[];

    /* ---------- 2. Basic validation ---------- */
    if (
      !name || !email || !phone ||
      !numberOfAttendants || !appointmentDate || !hospitalName || !messageForUs ||
      !patientPassport
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    /* ---------- 3. Build attachments from memory ---------- */
    const attachments: { filename: string; content: Buffer }[] = [];

    /* 3-a. Patient passport (required) */
    attachments.push({
      filename: patientPassport.name,
      content:  Buffer.from(await patientPassport.arrayBuffer()),
    });

    /* 3-b. Medical reports */
    for (const file of medicalReports) {
      attachments.push({
        filename: file.name,
        content:  Buffer.from(await file.arrayBuffer()),
      });
    }

    /* 3-c. Attendants’ passports */
    for (const file of attendantsPassports) {
      attachments.push({
        filename: file.name,
        content:  Buffer.from(await file.arrayBuffer()),
      });
    }

    /* ---------- 4. Render HTML e-mail body ---------- */
    const emailHtml = await render(
      React.createElement(EmailTempVisaInvitations, {
        name,
        email,
        phoneNumber: phone,
        numberOfAttendants,
        appointmentDate,
        hospitalName,
        messageForUs,
      }),
    );

    /* ---------- 5. Nodemailer transport (GoDaddy) ---------- */
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,                 // STARTTLS – reliable in serverless
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
      subject: `🛂  ${name} requested visa-invitation letters!`,
      html:    emailHtml,
      attachments,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (err) {
    console.error("Visa-invitation email error →", err);
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
  return NextResponse.json({ message: "Visa-invitation API is live." });
}
