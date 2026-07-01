import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    <section id="contact" className="relative scroll-mt-24 bg-burnt-dark">
      <div className="container-page grid gap-14 py-24 sm:py-28 lg:grid-cols-2">
        <Reveal>
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/60">
            07 · Let's talk
          </span>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-[-0.02em] text-cream sm:text-6xl">
            Ready to work smarter?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/80">
            One free call. Zero pressure. You will leave with at least one idea
            worth acting on, whether we end up working together or not.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-10 inline-block border-b-2 border-cream/40 pb-1 font-display text-xl font-medium text-cream transition-colors hover:border-cream sm:text-2xl"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-sm text-cream/60">
            Typically responds within 1 business day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full flex-col items-start justify-center rounded-2xl border border-cream/25 p-10"
            >
              <CheckCircle2 size={40} className="text-cream" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                Almost there
              </h3>
              <p className="mt-2 max-w-sm text-cream/75">
                Your email draft is ready in your mail app. Hit send and I will
                be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8 lg:pt-4">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field name="name" label="Name" required />
                <Field name="email" label="Email" type="email" required />
              </div>
              <Field name="company" label="Company" />
              <div>
                <label htmlFor="message" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/60">
                  What can I help with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="w-full resize-none border-0 border-b border-cream/40 bg-transparent px-0 py-2 text-lg text-cream placeholder-cream/35 outline-none transition-colors focus:border-cream"
                  placeholder="A few words about your team and the problem you are facing."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-burnt-dark transition-colors duration-300 hover:bg-ink hover:text-cream sm:w-auto"
              >
                Send message
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <p className="text-xs text-cream/50">
                No spam, ever. Your details stay between us.
              </p>
            </form>
          )}
        </Reveal>
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
      <label htmlFor={name} className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/60">
        {label}
        {required && <span className="text-cream"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-0 border-b border-cream/40 bg-transparent px-0 py-2 text-lg text-cream placeholder-cream/35 outline-none transition-colors focus:border-cream"
      />
    </div>
  );
}
