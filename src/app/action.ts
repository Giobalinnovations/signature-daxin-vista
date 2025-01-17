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
    return {
      success: false,
      error: 'Email configuration is missing',
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.HOSTINGER_EMAIL,
      pass: process.env.HOSTINGER_PASSWORD,
    },
    tls: { ciphers: 'TLSv1.2' },
    requireTLS: true,
    debug: true,
  });

  const mailOptions = {
    from: process.env.HOSTINGER_EMAIL,
    to: process.env.HOSTINGER_EMAIL,
    subject: 'New Contact Form Submission',
    text: `
      New contact form submission:

      Name: ${data.name}
      Email: ${data.email}
      Telephone: ${data.phone}
      Buying Timeline: ${data.buyingTimeline.replace(/_/g, ' ')}
    `,
  };

  const result = await transporter.sendMail(mailOptions).then(
    () => ({ success: true as const, data: undefined }),
    (error: Error) => ({
      success: false as const,
      error: error.message || 'Failed to send email',
    })
  );

  return result;
}

async function submitToPropKeys(data: z.infer<typeof formSchema>) {
  try {
    const baseUrl = 'https://propkeys04.realeasy.in/WebCreate.aspx';
    const params = new URLSearchParams({
      UID: 'fourqt',
      PWD: 'wn9mxO76f34=',
      Channel: 'FB',
      Src: 'Facebook',
      ISD: '91',
      Mob: data.phone,
      Email: data.email,
      name: data.name,
      City: '',
      Location: '',
      Project: 'AGF',
    });
    //
    const response = await fetch(`${baseUrl}?${params.toString()}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`PropKeys API error: ${response.statusText}`);
    }

    console.log(`${baseUrl}?${params.toString()}`);

    const result = await response.json();

    if (!result.Status) {
      throw new Error(result.Message || 'Failed to create lead');
    }

    return {
      success: true as const,
      leadId: result.Lead_Id,
    };
  } catch (error) {
    console.error('PropKeys API error:', error);
    return {
      success: false as const,
      error:
        error instanceof Error ? error.message : 'Failed to submit to PropKeys',
    };
  }
}

export const submitContact = actionClient
  .schema(formSchema)
  .action(async ({ parsedInput }) => {
    if (!parsedInput) {
      return { success: false, error: 'Invalid input data' };
    }

    // Submit to PropKeys first
    const propKeysResult = await submitToPropKeys(parsedInput);
    if (!propKeysResult.success) {
      console.error('PropKeys submission failed:', propKeysResult.error);
      return {
        success: false,
        error: 'Failed to submit lead. Please try again.',
      };
    }

    // Then send email
    const emailResult = await sendEmail(parsedInput);
    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      // Note: We don't return here since the lead was already created in PropKeys
    }

    console.log(propKeysResult);

    return {
      success: true,
      data: {
        leadId: propKeysResult.leadId,
        emailSent: emailResult.success,
      },
    };
  });
