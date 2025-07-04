// app/api/sendEmail/route.ts
import React from "react";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { EmailTemp } from "@/lib/Email/EmailTemp";

/* ------------------------------------------------------------------ */
/* POST /api/sendEmail                                                */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    /* ---------- 1. Parse form data ---------- */
    const fd = await req.formData();
    const name            = fd.get("name")?.toString().trim();
    const email           = fd.get("email")?.toString().trim();
    const country         = fd.get("country")?.toString();
    const city            = fd.get("city")?.toString();
    const phone           = fd.get("phone")?.toString();
    const medicalProblem  = fd.get("medicalProblem")?.toString();
    const ageOrDOB        = fd.get("ageOrDOB")?.toString();
    const hospital        = fd.get("hospital")?.toString() || "";
    const doctor          = fd.get("doctors")?.toString() || "";
    const file            = fd.get("file1") as File | null;

    /* ---------- 2. Basic validation ---------- */
    if (
      !name || !email || !country || !city ||
      !phone || !medicalProblem || !ageOrDOB
    ) {
      return NextResponse.json(
        { message: "All required fields must be filled." },
        { status: 400 },
      );
    }

    /* ---------- 3. Render e-mail HTML ---------- */
    const emailHtml = await render(
      React.createElement(EmailTemp, {
        name,
        email,
        country,
        city,
        phoneNumber: phone,
        medicalProblem,
        ageOrDOB,
        hospital,
        doctor,
      }),
    );

    /* ---------- 4. Build mail object ---------- */
    const mail = {
      from: process.env.SENDER_EMAIL,
      to:   process.env.SUBMIT_EMAIL,
      subject: `${name} sent a query!`,
      html: emailHtml,
    } as nodemailer.SendMailOptions;

    /* Attach uploaded file (if any) straight from memory */
    if (file && file.size) {
      const buffer = Buffer.from(await file.arrayBuffer());
      mail.attachments = [{
        filename: file.name,
        content: buffer,
      }];
    }

    /* ---------- 5. Nodemailer transport (GoDaddy) ---------- */
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,              // STARTTLS
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SENDER_EMAIL!,
        pass: process.env.SENDER_EMAIL_PASSWORD!,
      },
      /* keep Netlify Lambda < 10 s */
      connectionTimeout: 8_000,
      greetingTimeout:   8_000,
      tls: { rejectUnauthorized: false }, // GoDaddy’s cert chain can be odd
    });

    /* ---------- 6. Send the message ---------- */
    await transporter.sendMail(mail);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (err) {
    console.error("Email send error →", err);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
