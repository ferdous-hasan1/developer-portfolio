import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    console.log('[Contact Form Submission Received]:', {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      timestamp: new Date().toISOString()
    });

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    if (token && chat_id) {
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const message = `New message from ${payload.name}\n\nEmail: ${payload.email}\n\nMessage:\n ${payload.message}\n\n`;

      await axios.post(url, {
        text: message,
        chat_id: chat_id
      });
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    }, { status: 200 });
  } catch (error) {
    console.error('Contact route error:', error?.message || error);
    return NextResponse.json({
      message: "Message sending failed!",
      success: false,
    }, { status: 500 });
  }
}