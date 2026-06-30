import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  "Senior, hands-on partner — not a junior handoff",
  "Cross-industry pattern recognition from SaaS to spatial computing",
  "Pragmatic about tech: the right tool, not the trendy one",
  "Outcome-obsessed — measured in time and money saved",
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            {/* portrait / brand panel */}
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl glass shadow-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_55%),radial-gradient(circle_at_75%_85%,rgba(168,85,247,0.28),transparent_55%)]" />
              <div className="absolute inset-0 bg-grid opacity-40" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="font-display text-7xl font-bold gradient-text">
                    FD
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">
                    Founder & Principal
                  </p>
                </div>
              </motion.div>
            </div>
            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-5 -right-3 rounded-2xl glass px-5 py-4 shadow-glow sm:-right-6"
            >
              <p className="font-display text-2xl font-bold text-white">20+ yrs</p>
              <p className="text-xs text-slate-400">SaaS · AI · Hardware</p>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">About</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Two decades turning complexity into{" "}
            <span className="gradient-text">competitive advantage</span>
          </h2>
          <p className="mt-5 leading-relaxed text-slate-300">
            I've spent over 20 years inside the rooms where technology meets the
            real business problem — from scaling SaaS at Citrix to pioneering
            spatial computing at Magic Leap, and helping startups find their feet.
            Flavio DeOliveira Consulting brings that experience directly to you.
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            No bloated decks. No armies of consultants. Just a senior partner who
            rolls up his sleeves, finds what's actually broken, and builds what
            actually works.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-slate-200"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-violet">
                  <Check size={13} className="text-white" />
                </span>
                {h}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
