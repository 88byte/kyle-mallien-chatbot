import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Portrait from "./Portrait";

const highlights = [
  "U.S. Navy veteran with two decades in emerging technology",
  "Operator first: strategy, execution, and training in one partner",
  "Fluent across creative, technical, and business teams",
  "Independent and senior. You work with me, start to finish",
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-baseline justify-between border-t-2 border-ink pt-4">
            <span className="font-display text-sm font-semibold text-burnt">06</span>
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
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
            Two decades turning complexity into{" "}
            <span className="text-burnt">advantage</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            I have spent my career in rooms where the stakes were high and the
            systems had to hold. Product launches, executive programs, sales
            organizations, and platforms serving hundreds of thousands of
            customers. The job was always the same: design the experience, then
            build the machinery underneath it so it runs without me in the room.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            That work taught me one thing above all: extraordinary experiences
            run on unglamorous systems. I bring both to your business. The
            creative eye for customer experience, and the operational discipline
            to make it repeatable.
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
