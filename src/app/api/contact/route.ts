import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, projectDomain, budget, contact, description } = body;

    // Validate required fields
    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and description are required.' },
        { status: 400 }
      );
    }

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const recipient = process.env.CONTACT_RECEIVE_EMAIL || 'mdjani1209@gmail.com';
    const copyRecipient = 'mdjani1209@gmail.com';

    // Compose the email
    const mailOptions = {
      from: `"SM² Website" <${process.env.SMTP_EMAIL}>`,
      to: recipient,
      ...(recipient.toLowerCase() !== copyRecipient.toLowerCase() && { cc: copyRecipient }),
      replyTo: email,
      subject: `🚀 New Project Inquiry — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e0e0e0; border-radius: 12px; overflow: hidden; border: 1px solid #222;">
          <div style="background: linear-gradient(135deg, #1a1a1a, #0a0a0a); padding: 32px; border-bottom: 1px solid #222;">
            <h1 style="margin: 0 0 4px 0; font-size: 22px; color: #ffffff; font-weight: 600;">New Project Inquiry</h1>
            <p style="margin: 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 2px;">SM² Contact Form</p>
          </div>
          
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 15px;"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">Organization</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 15px;">${organization || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">Project Domain</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 15px;">${projectDomain || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">Budget</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 15px;">${budget || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">Contact</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 15px;">${contact || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">Description</td>
                <td style="padding: 12px 0; color: #fff; font-size: 15px; line-height: 1.6;">${description}</td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 20px 32px; background: #111; border-top: 1px solid #222; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #555;">Sent from SM² website contact form • ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error: unknown) {
    console.error('Contact form email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
