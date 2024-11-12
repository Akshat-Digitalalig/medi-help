import React from 'react';
import { render } from '@react-email/components';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { EmailTemp } from '@/lib/Email/EmailTemp';

const UPLOAD_DIR = path.resolve("public/uploads");

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const formdata = await req.formData();
    console.log(formdata)
    const name = formdata.get('name');
    const email = formdata.get('email');
    const country = formdata.get('country');
    const city = formdata.get('city');
    const phone = formdata.get('phone');
    const medicalProblem = formdata.get('medicalProblem');
    const ageOrDOB = formdata.get('ageOrDOB');
    const file = formdata.get('file1') as File;
   

    // Validate input
    if (!name || !email || !country || !city || !phone || !medicalProblem || !ageOrDOB) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Handle file upload if file is provided
    let filePath = null;
    console.log(file)
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
      }

      filePath = path.resolve(UPLOAD_DIR, file.name);
      fs.writeFileSync(filePath, buffer);
    }

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'tharabhainarendra7@gmail.com',
        pass: 'dmjbfmhjqvulwclr',
      },
    });

    // Render the email template
    const emailHtml = await render(
      React.createElement(EmailTemp, {
        name: String(name),
        email: String(email),
        country: String(country),
        city: String(city),
        phoneNumber: String(phone),
        medicalProblem: String(medicalProblem),
        ageOrDOB: String(ageOrDOB),
      })
    );

    // Define mail options
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'tharabhainarendra7@gmail.com' ,
      to: String(email),
      subject: `🙋‍♂️ ${name}, Sent a Query!`,
      html: emailHtml,
    };

    // Attach file if exists
    if (filePath) {
      console.log("file path", filePath)
      mailOptions.attachments = [
        {
          filename: file.name,
          path: filePath,
        },
      ];
    }
    
    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
