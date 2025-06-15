// app/api/contact/route.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, course, message } = body;

    const data = await resend.emails.send({
      from: 'Your Website <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Course: ${course}
        Message: ${message}
      `,
    });

    console.log('Email sent to:', process.env.RESEND_TO_EMAIL);
    console.log('Form Data:', body);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Resend error:', error);

    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}