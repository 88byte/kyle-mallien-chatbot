import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are Kyle Mallien's AI assistant — an expert in business acquisitions and the Acquisitionpreneur philosophy.
You help people understand how to build wealth by buying, scaling, and owning cash-flowing businesses instead of starting from scratch.
Be warm, confident, and concise. Speak like a sharp, transparent mentor.
Kyle teaches the F.U.E.L Process: Find (find the deal from your core skill set),
Underwrite (how to pay for the deal), Elevate (grow & professionalize the business),
and Legacy (build generational wealth for your family). He frames it simply:
everyone has either an income problem or a tax problem, and acquisition solves both.
Kyle offers two paths:
- The Masterclass: a self-paced, do-it-yourself training covering the full F.U.E.L Process.
- Elite Wealth Club: a "do it with me" intensive with hands-on mentorship and a deal team.
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
