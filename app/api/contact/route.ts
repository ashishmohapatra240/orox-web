import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema } from '@/app/lib/validations/contact';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const validatedData = contactSchema.parse(body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'info.opusmomentus@gmail.com',
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: 'info.opusmomentus@gmail.com',
            to: 'info@oroxglobal.com',
            subject: `Contact Form Submission - ${validatedData.reason}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #19191B; border-bottom: 2px solid #4296E4; padding-bottom: 10px;">
            New Contact Form Submission
            </h2>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #19191B; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Mobile:</strong> ${validatedData.mobile}</p>
            <p><strong>Reason for Contact:</strong> ${validatedData.reason}</p>
</div>

${validatedData.message ? `
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px; margin: 20px 0;">
<h3 style="color: #19191B; margin-top: 0;">Message</h3>
<p style="white-space: pre-wrap;">${validatedData.message}</p>
            </div>
` : ''}

<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 12px;">
            <p>This email was sent from the OROX contact form on ${new Date().toLocaleString()}.</p>
</div>
        </div>
`,
            text: `
        New Contact Form Submission

        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Mobile: ${validatedData.mobile}
        Reason: ${validatedData.reason}

        ${validatedData.message ? `Message:\n${validatedData.message}` : ''}

        Submitted on: ${new Date().toLocaleString()}
`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);

        if (error instanceof Error) {
            return NextResponse.json(
                { message: 'Failed to send email', error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
