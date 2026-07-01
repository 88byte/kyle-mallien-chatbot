import { motion } from "framer-motion";
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
    <section id="about" className="relative scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-baseline justify-between border-t-2 border-ink pt-4">
            <span className="font-display text-sm font-semibold text-burnt">05</span>
            <span className="label">About</span>
          </div>
        </Reveal>
      </div>

      <div className="container-page mt-14 grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative mr-4 max-w-md">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.75rem] bg-burnt" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink">
              <Portrait />
            </div>
            <div className="absolute -right-4 bottom-8 rounded-2xl border border-ink/15 bg-cream px-5 py-4">
              <p className="font-display text-2xl font-medium text-ink">20+ yrs</p>
              <p className="label mt-1 !tracking-[0.2em]">SaaS · AI · Hardware</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-ink sm:text-5xl">
            Two decades turning complexity into{" "}
            <span className="text-burnt">advantage</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            I have spent 20 plus years inside fast moving companies. Scaling SaaS
            at Citrix. Pioneering spatial computing at Magic Leap. Helping
            startups find their footing. Along the way I built processes, stood
            up departments, connected platforms, automated busywork, and rebuilt
            customer journeys that were quietly costing teams their growth.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            I am not a slide deck consultant. I get in, find what is really going
            on, and build the fix with your team. Senior, hands on, and measured
            by results.
          </p>

          <ul className="mt-10">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4 border-t border-ink/20 py-4 text-ink"
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-burnt" />
                <span className="font-medium">{h}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
