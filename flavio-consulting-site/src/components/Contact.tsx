import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "flaviod022@gmail.com";
const CALENDLY_URL =
  "https://calendly.com/flaviod022/discovery-call-flavio-deoliveira" +
  "?embed_domain=flaviodeoliveira.com&embed_type=Inline" +
  "&hide_landing_page_details=1&hide_gdpr_banner=1" +
  "&background_color=F7F3EC&text_color=191511&primary_color=9A3412";

type Tab = "call" | "message";

export default function Contact() {
  const [tab, setTab] = useState<Tab>("call");
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
      <div className="container-page grid gap-14 py-24 max-sm:gap-10 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/60">
            08 · Let's talk
          </span>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.04] tracking-[-0.025em] text-cream sm:text-6xl">
            Ready to work smarter?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/80">
            One free call. Zero pressure. You will leave with at least one idea
            worth acting on, whether we end up working together or not.
          </p>

          <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/60">
            Prefer email?
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 inline-block border-b-2 border-cream/40 pb-1 font-display text-xl font-medium text-cream transition-colors hover:border-cream sm:text-2xl"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-sm text-cream/60">
            Typically responds within 1 business day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex gap-2">
            <TabButton active={tab === "call"} onClick={() => setTab("call")}>
              Pick a time
            </TabButton>
            <TabButton
              active={tab === "message"}
              onClick={() => setTab("message")}
            >
              Send a message
            </TabButton>
          </div>

          {tab === "call" ? (
            <>
              <div className="mt-5 overflow-hidden rounded-2xl bg-cream">
                <iframe
                  src={CALENDLY_URL}
                  title="Book a discovery call with Flavio DeOliveira"
                  className="h-[680px] w-full border-0 max-sm:h-[640px]"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-cream/60">
                Calendar not loading?{" "}
                <a
                  href="https://calendly.com/flaviod022/discovery-call-flavio-deoliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-cream"
                >
                  Open it in a new tab
                </a>
                .
              </p>
            </>
          ) : sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-5 flex flex-col items-start justify-center rounded-2xl border border-cream/25 p-10"
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
            <form onSubmit={onSubmit} className="mt-8 space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field name="name" label="Name" required />
                <Field name="email" label="Email" type="email" required />
              </div>
              <Field name="company" label="Company" />
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/60"
                >
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

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
        active
          ? "bg-cream text-burnt-dark"
          : "border border-cream/30 text-cream hover:border-cream/60"
      }`}
    >
      {children}
    </button>
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
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/60"
      >
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
