import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "What kinds of businesses do you work with?",
    a: "Founders and teams who have outgrown their current setup. Fast scaling startups, and established companies modernizing how they run. If you have people, processes, and tools that are not working together yet, that is my sweet spot.",
  },
  {
    q: "Do you advise, or do you actually build it?",
    a: "Both, and the building is the point. I can guide strategy, but I am at my best rolling up my sleeves and delivering the processes, automations, and integrations right alongside your team.",
  },
  {
    q: "How do we get started?",
    a: "With a free strategy call. We talk through where you are stuck, I share where I see the biggest wins, and if it is a fit we scope a first engagement together. No pressure and no obligation.",
  },
  {
    q: "What if my team is not technical?",
    a: "Even better. A big part of my job is making powerful tools feel simple. I handle the complexity and train your team so they stay confident long after the work is done.",
  },
  {
    q: "How quickly will we see results?",
    a: "Most engagements surface quick wins in the first few weeks. Larger systems take longer, but I sequence the work so you feel real momentum early and often.",
  },
];

function Item({ qa, index }: { qa: QA; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-semibold text-ink sm:text-xl">
          {qa.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-burnt-tint text-burnt"
        >
          <Plus size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">{qa.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow">Questions</span>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Good to <span className="text-burnt">know</span>
          </h2>
          <p className="mt-4 max-w-sm text-ink-soft">
            A few things people usually ask before we talk. Have another? Just put
            it in the form and I will answer it straight.
          </p>
          <a href="#contact" className="btn-primary mt-7 inline-flex">
            Book a free strategy call
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {faqs.map((qa, i) => (
              <Item key={qa.q} qa={qa} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
