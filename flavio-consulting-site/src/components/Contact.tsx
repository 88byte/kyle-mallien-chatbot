import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Clock, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "flaviod022@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`New inquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-burnt-dark p-8 shadow-lift sm:p-12 lg:p-16">
          <div className="dotgrid absolute inset-0 opacity-30" />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.22em] text-cream/70">
                Let's talk
              </span>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
                Ready to work smarter?
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-cream/80">
                Book a free, zero pressure strategy call. We will talk through
                where you are stuck and whether I can help. You will leave with at
                least one idea worth acting on.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-cream transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream/10">
                    <Mail size={18} className="text-cream" />
                  </span>
                  {CONTACT_EMAIL}
                </a>
                <div className="flex items-center gap-3 text-cream/85">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream/10">
                    <Clock size={18} className="text-cream" />
                  </span>
                  Typically responds within 1 business day
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl bg-cream p-10 text-center shadow-soft"
                >
                  <CheckCircle2 size={44} className="text-burnt" />
                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                    Almost there
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    Your email draft is ready in your mail app. Hit send and I
                    will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="space-y-4 rounded-2xl bg-cream p-6 shadow-soft sm:p-7"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="name" label="Name" required />
                    <Field name="email" label="Email" type="email" required />
                  </div>
                  <Field name="company" label="Company" />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-mute"
                    >
                      What can I help with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-xl border border-line bg-paper/60 px-4 py-3 text-sm text-ink placeholder-ink-mute outline-none transition focus:border-burnt focus:ring-2 focus:ring-burnt/20"
                      placeholder="A few words about your team and the problem you are facing."
                    />
                  </div>
                  <button type="submit" className="btn-primary group w-full">
                    Send message
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                  <p className="text-center text-xs text-ink-mute">
                    No spam, ever. Your details stay between us.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-mute"
      >
        {label}
        {required && <span className="text-burnt"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-line bg-paper/60 px-4 py-3 text-sm text-ink placeholder-ink-mute outline-none transition focus:border-burnt focus:ring-2 focus:ring-burnt/20"
      />
    </div>
  );
}
