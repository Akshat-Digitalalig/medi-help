/* ------------------------------------------------------------------ */
/*  app/api/sendVideoConsultEmail/route.ts                            */
/* ------------------------------------------------------------------ */
import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

import { EmailTempVideoConsult } from "@/lib/Email/EmailTemp";

/* ------------------------------------------------------------------ */
/* POST  -- handles the video-consult enquiry form                    */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    /* ---------- 1. Parse multipart form ---------- */
    const fd = await req.formData();

    const name = fd.get("name")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const phone = fd.get("phone")?.toString();
    const passport = fd.get("passport") as File | null;
    const doctorName = fd.get("doctorName")?.toString();
    const disease = fd.get("disease")?.toString();
    const messageForUs = fd.get("messageForUs")?.toString();

    /* medical reports (optional multiple) */
    const medicalReports = fd.getAll("medicalReports") as File[];

    /* ---------- 2. Basic validation ---------- */
    if (
      !name ||
      !email ||
      !phone ||
      !passport ||
      !doctorName ||
      !disease ||
      !messageForUs
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    /* ---------- 3. Build attachments directly from memory ---------- */
    const attachments: Mail.Attachment[] = [];

    /* 3-a. Passport (always first attachment) */
    attachments.push({
      filename: passport.name,
      content: Buffer.from(await passport.arrayBuffer()),
    });

    /* 3-b. Medical reports (if any) */
    for (const file of medicalReports) {
      attachments.push({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      });
    }

    /* ---------- 4. Render HTML e-mail body ---------- */
    const emailHtml = await render(
      React.createElement(EmailTempVideoConsult, {
        name,
        email,
        phoneNumber: phone,
        doctorName,
        disease,
        messageForUs,
      })
    );

    /* ---------- 5. Nodemailer transport (GoDaddy) ---------- */
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587, // STARTTLS – reliable in serverless
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SENDER_EMAIL!,
        pass: process.env.SENDER_EMAIL_PASSWORD!,
      },
      connectionTimeout: 8_000,
      greetingTimeout: 8_000,
      tls: { rejectUnauthorized: false },
    });

    /* ---------- 6. Send the e-mail ---------- */
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.SUBMIT_EMAIL,
      subject: `📹 ${name} requested a video consultation!`,
      html: emailHtml,
      attachments,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Video-consult email error →", err);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

/* ------------------------------------------------------------------ */
/* GET -- simple health-check                                         */
/* ------------------------------------------------------------------ */
export function GET() {
  return NextResponse.json({ message: "Video-consult API is live." });
}
