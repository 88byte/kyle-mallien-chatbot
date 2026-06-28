"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/site";

type Msg = { role: "user" | "assistant"; content: string };

const PROGRAM_KEYWORDS = [
  "program",
  "masterclass",
  "elite wealth",
  "course",
  "training",
  "offer",
  "acquisition",
];
const PRICING_KEYWORDS = [
  "cost",
  "price",
  "how much",
  "pricing",
  "invest",
];

function localAnswer(input: string): string | null {
  const lower = input.toLowerCase();
  const isProgram = PROGRAM_KEYWORDS.some((k) => lower.includes(k));
  const isPricing = PRICING_KEYWORDS.some((k) => lower.includes(k));
  if (isPricing && isProgram) {
    return "Pricing depends on the path that fits you best. The quickest way to get exact numbers is to apply or book a quick call, and the team will walk you through The Masterclass and Elite Wealth Club options.";
  }
  if (isProgram) {
    return "Kyle offers two paths:\n\n• The Masterclass: a self-paced, do-it-yourself training covering the full F.U.E.L Process.\n\n• Elite Wealth Club: a do-it-with-me intensive with hands-on mentorship and a deal team.\n\nWant me to help you figure out which fits your goals?";
  }
  return null;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const startChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setStarted(true);
    setMessages([
      {
        role: "assistant",
        content: `Hi ${name.split(" ")[0]}, welcome! I'm Kyle's AI assistant. Ask me anything about buying businesses, the programs, or how members are closing deals.`,
      },
    ]);
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");

    const canned = localAnswer(text);
    if (canned) {
      setMessages([...next, { role: "assistant", content: canned }]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        {
          role: "assistant",
          content: data.reply || "Sorry, please try that again.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again shortly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Kyle's AI"
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-xl shadow-gold-600/30 transition-transform hover:scale-105 active:scale-95"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-[60] flex h-[540px] w-[calc(100vw-3rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl shadow-black/60"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/5 bg-gradient-to-r from-gold-500/10 to-transparent px-5 py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BRAND.portrait}
                alt="Kyle Mallien"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-gold-500/40"
              />
              <div>
                <div className="flex items-center gap-1.5 text-sm font-semibold">
                  Kyle&apos;s AI Assistant
                  <Sparkles size={13} className="text-gold-400" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Usually replies instantly
                </div>
              </div>
            </div>

            {!started ? (
              <form
                onSubmit={startChat}
                className="flex flex-1 flex-col justify-center gap-4 px-6"
              >
                <p className="text-center text-sm text-foreground/65">
                  Tell us who you are and start the conversation.
                </p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none focus:border-gold-500/50"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none focus:border-gold-500/50"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gold-gradient py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
                >
                  Start Chat
                </button>
              </form>
            ) : (
              <>
                <div
                  ref={scrollRef}
                  className="flex-1 space-y-4 overflow-y-auto px-5 py-4"
                >
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        m.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm ${
                          m.role === "user"
                            ? "rounded-br-md bg-gold-gradient text-primary-foreground"
                            : "rounded-bl-md border border-white/10 bg-background text-foreground/85"
                        }`}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="flex gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-background px-4 py-3">
                        {[0, 1, 2].map((d) => (
                          <span
                            key={d}
                            className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-400"
                            style={{ animationDelay: `${d * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/5 p-3">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-background px-3 py-1.5">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && send()}
                      placeholder="Ask about acquisitions…"
                      className="flex-1 bg-transparent py-2 text-sm outline-none"
                    />
                    <button
                      onClick={send}
                      disabled={loading || !input.trim()}
                      aria-label="Send"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground disabled:opacity-40"
                    >
                      <Send size={15} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
