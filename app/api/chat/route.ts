import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are Kyle Mallien's AI assistant — an expert in business acquisitions and the Acquisitionpreneur philosophy.
You help people understand how to build wealth by buying, scaling, and owning cash-flowing businesses instead of starting from scratch.
Be warm, confident, and concise. Speak like a sharp mentor. Kyle offers two programs:
- The Masterclass: a self-paced, do-it-yourself training built on his $8,000 acquisition framework.
- Elite Wealth Club: a 90-day "do it with me" intensive with hands-on mentorship, a deal team, legal counsel, and capital-raising support.
For specific pricing, invite the user to apply or book a call rather than quoting numbers.`;

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      {
        reply:
          "Thanks for reaching out! Our team will follow up shortly. In the meantime, you can apply to work with Kyle directly.",
      },
      { status: 200 },
    );
  }

  try {
    const body = await req.json();
    const userMessages = Array.isArray(body?.messages) ? body.messages : [];

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: body?.model || "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...userMessages],
      max_tokens: body?.max_tokens || 220,
      temperature: 0.7,
    });

    const reply =
      completion.choices?.[0]?.message?.content ||
      "I'm sorry, I couldn't process that just now. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Sorry, something went wrong. Please try again shortly." },
      { status: 200 },
    );
  }
}
