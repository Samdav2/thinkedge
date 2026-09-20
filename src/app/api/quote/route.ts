import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, service } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please provide a message or quote details." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail =
      process.env.FROM_EMAIL || "Think Edge Quotes <onboarding@resend.dev>";

    if (!resendApiKey || resendApiKey.includes("your_api_key")) {
      console.error(
        "RESEND_API_KEY is not configured or still contains placeholder value."
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please set RESEND_API_KEY in your .env.local file.",
        },
        { status: 500 }
      );
    }

    if (!adminEmail) {
      console.error("ADMIN_EMAIL is not configured.");
      return NextResponse.json(
        {
          error:
            "Admin recipient email is not configured. Please set ADMIN_EMAIL in your .env.local file.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const serviceDisplay = service ? service.trim() : "General Quote";
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      dateStyle: "full",
      timeStyle: "short",
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Quote Request</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 24px; color: #1f2937; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .header { background-color: #0F2E44; padding: 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.8; }
    .content { padding: 32px 24px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; margin-bottom: 4px; }
    .value { font-size: 16px; color: #111827; font-weight: 500; }
    .message-box { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #374151; }
    .footer { background-color: #f9fafb; border-top: 1px solid #e5e7eb; padding: 16px 24px; text-align: center; font-size: 12px; color: #9ca3af; }
    .badge { display: inline-block; background-color: #2563EB; color: #ffffff; padding: 4px 10px; border-radius: 9999px; font-size: 13px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Think Edge Consultancy</h1>
      <p>New Quote Request Received</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Requested Service</div>
        <div class="value"><span class="badge">${serviceDisplay}</span></div>
      </div>
      <div class="field">
        <div class="label">Customer Name</div>
        <div class="value">${cleanName}</div>
      </div>
      <div class="field">
        <div class="label">Customer Email</div>
        <div class="value"><a href="mailto:${cleanEmail}" style="color: #2563EB; text-decoration: none;">${cleanEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Date & Time (UK)</div>
        <div class="value" style="font-size: 14px; color: #4b5563;">${timestamp}</div>
      </div>
      <div class="field" style="margin-bottom: 0;">
        <div class="label">Message / Project Requirements</div>
        <div class="message-box">${cleanMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>
    </div>
    <div class="footer">
      This quote request was submitted via the Think Edge website. You can reply directly to this email to contact the customer.
    </div>
  </div>
</body>
</html>
    `.trim();

    const textContent = `
New Quote Request - Think Edge Consultancy
------------------------------------------
Service: ${serviceDisplay}
Customer Name: ${cleanName}
Email: ${cleanEmail}
Date: ${timestamp}

Message:
${cleanMessage}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      replyTo: cleanEmail,
      subject: `New Quote Request: ${cleanName} (${serviceDisplay})`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send quote email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Quote request sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Error processing quote request:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your request." },
      { status: 500 }
    );
  }
}

