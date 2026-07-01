import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import Portrait from "./Portrait";

const highlights = [
  "A senior partner who does the work, never a junior handoff",
  "Two decades across SaaS, hardware, AI, and spatial computing",
  "Equally at home in strategy, in the weeds, and in the build",
  "Measured in time saved, money saved, and experiences improved",
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-baseline justify-between border-t-2 border-ink pt-4">
            <span className="font-display text-base font-semibold text-burnt">05</span>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-mute">
              About
            </span>
          </div>
        </Reveal>
      </div>
      <div className="container-page mt-12 grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            {/* solid offset block for depth */}
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] bg-burnt/90" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-ink shadow-frame">
              <Portrait />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-4 bottom-10 rounded-2xl border border-line bg-cream px-5 py-4 shadow-soft sm:-right-6"
            >
              <p className="font-display text-2xl font-semibold text-ink">20+ yrs</p>
              <p className="text-xs text-ink-mute">SaaS · AI · Hardware</p>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.05]">
            Two decades turning complexity into{" "}
            <span className="italic text-burnt">competitive advantage</span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            I have spent over 20 years inside fast moving companies, from scaling
            SaaS at Citrix to pioneering spatial computing at Magic Leap, and
            helping startups find their footing. Along the way I have built custom
            processes and tools, stood up new departments, integrated platforms,
            automated the busywork, and rebuilt customer journeys that were
            quietly costing teams their growth.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            I am not a slide deck consultant. I am the person who gets in, figures
            out what is really going on, and builds the fix with your team.
            Senior, hands on, and focused on outcomes you can actually measure.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-ink"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-burnt">
                  <Check size={13} className="text-cream" />
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
