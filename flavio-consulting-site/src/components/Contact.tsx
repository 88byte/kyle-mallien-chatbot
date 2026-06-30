import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "hello@flaviodeoliveira.com";

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
        <div className="relative overflow-hidden rounded-[2rem] glass p-8 shadow-card sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_-10%,rgba(99,102,241,0.22),transparent_65%)]" />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Let's talk</span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to work{" "}
                <span className="gradient-text">smarter?</span>
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-slate-300">
                Book a free, no-pressure strategy call. We'll talk through where
                you're stuck and whether I can help — you'll leave with at least
                one idea worth acting on.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-slate-200 transition-colors hover:text-brand-cyan"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl glass">
                    <Mail size={18} className="text-brand-cyan" />
                  </span>
                  {CONTACT_EMAIL}
                </a>
                <div className="flex items-center gap-3 text-slate-200">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl glass">
                    <Calendar size={18} className="text-brand-violet" />
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
                  className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center"
                >
                  <CheckCircle2 size={44} className="text-brand-cyan" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">
                    Almost there!
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Your email draft is ready in your mail app. Hit send and I'll
                    be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="name" label="Name" required />
                    <Field name="email" label="Email" type="email" required />
                  </div>
                  <Field name="company" label="Company" />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400"
                    >
                      What can I help with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-brand-indigo/60 focus:ring-2 focus:ring-brand-indigo/30"
                      placeholder="A few words about your team and the problem you're facing…"
                    />
                  </div>
                  <button type="submit" className="btn-primary group w-full">
                    Send message
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                  <p className="text-center text-xs text-slate-500">
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
        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400"
      >
        {label}
        {required && <span className="text-brand-cyan"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-brand-indigo/60 focus:ring-2 focus:ring-brand-indigo/30"
      />
    </div>
  );
}
