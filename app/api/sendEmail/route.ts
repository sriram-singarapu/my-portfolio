import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { user_name, user_email, message } = await req.json();

    if (!user_name || !user_email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "srlooks057@gmail.com",
        pass: "djto uxwp araf ffst",
      },
    });

    const mailOptions = {
      from: "srlooks057@gmail.com",
      to: "sriramsingarapu2@gmail.com",
      subject: `New Contact Form Submission from ${user_name}`,
      html: `<p><strong>Name:</strong> ${user_name}</p><p><strong>Email:</strong> ${user_email}</p><p><strong>Message:</strong><br>${message.replace(
        /\n/g,
        "<br>"
      )}</p>`,
      replyTo: user_email,
    };

    const autoReplyOptions = {
      from: "srlooks057@gmail.com",
      to: user_email,
      subject: "Thank you for reaching out!",
      html: `<p>Hi ${user_name},</p><p>Thanks for your message. I will get back to you soon.</p>`,
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed. Use POST." },
    { status: 405 }
  );
}
