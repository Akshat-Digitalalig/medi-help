import React from 'react';
import { render } from '@react-email/components';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { EmailTemp } from '@/lib/Email/EmailTemp';

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const { name, email,  country, city, phone, medicalProblem, ageOrDOB } = await req.json();
   console.log(name, email, country, city, phone, medicalProblem, ageOrDOB);

    // Validate input
    if (!name || !email || !country || !city || !phone || !medicalProblem || !ageOrDOB) {
      return NextResponse.json({ message: 'All fields are required thi' }, { status: 400 });
    }

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'tharabhainarendra7@gmail.com',
        pass: 'dmjbfmhjqvulwclr',
      },
    });
    const emailHtml = await render(React.createElement(EmailTemp, {
          name: name,
          email: email,
          country: country,
          city: city,
          phoneNumber:phone,
          medicalProblem: medicalProblem,
          ageOrDOB: ageOrDOB
        }));

    const mailOptions = {
      from: 'tharabhainarendra7@gmail.com',
      to: email,
      subject: `🙋‍♂️ ${name}, Sent a Query!`,
      html: emailHtml,

    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
