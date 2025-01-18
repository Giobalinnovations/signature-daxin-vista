'use server';

import { actionClient } from '@/lib/safe-action';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^\d{10}$/, {
    message: 'Please enter a valid 10-digit phone number.',
  }),
  buyingTimeline: z
    .string({
      required_error: "Please select when you're planning to buy.",
    })
    .min(1, {
      message: "Please select when you're planning to buy.",
    }),
});

type Result<T> = { success: true; data: T } | { success: false; error: string };

async function sendEmail(
  data: z.infer<typeof formSchema>
): Promise<Result<void>> {
  if (
    !process.env.HOSTINGER_EMAIL ||
    !process.env.HOSTINGER_PASSWORD ||
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT
  ) {
    console.error('Missing email configuration:', {
      email: !!process.env.HOSTINGER_EMAIL,
      password: !!process.env.HOSTINGER_PASSWORD,
      host: !!process.env.SMTP_HOST,
      port: !!process.env.SMTP_PORT,
    });
    return {
      success: false,
      error: 'Email configuration is missing',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      // host: process.env.SMTP_HOST,
      host: 'smtp.hostinger.com',
      // port: parseInt(process.env.SMTP_PORT),
      port: 587,
      secure: false,
      auth: {
        user: process.env.HOSTINGER_EMAIL,
        pass: process.env.HOSTINGER_PASSWORD,
      },
      // tls: {
      //   ciphers: 'SSLv3',
      //   rejectUnauthorized: false,
      // },
      tls: { ciphers: 'TLSv1.2' },
      requireTLS: true,
      debug: true,
    });

    console.log('Attempting to connect with config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
    });

    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      throw verifyError;
    }

    const mailOptions = {
      from: process.env.HOSTINGER_EMAIL,
      to: process.env.HOSTINGER_EMAIL,
      subject: 'New Contact Form Submission - Antalya Hills',
      text: `
        New contact form submission:

        Name: ${data.name}
        Email: ${data.email}
        Telephone: ${data.phone}
        Buying Timeline: ${data.buyingTimeline.replace(/_/g, ' ')}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telephone:</strong> ${data.phone}</p>
        <p><strong>Buying Timeline:</strong> ${data.buyingTimeline.replace(
          /_/g,
          ' '
        )}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, data: undefined };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}

export const submitContact = actionClient
  .schema(formSchema)
  .action(async ({ parsedInput }) => {
    if (!parsedInput) {
      return { success: false, error: 'Invalid input data' };
    }

    const emailResult = await sendEmail(parsedInput);
    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      return {
        success: false,
        error: 'Failed to send message. Please try again.',
      };
    }

    return {
      success: true,
      data: {
        success: true,
      },
    };
  });
