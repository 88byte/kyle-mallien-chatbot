import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Portrait from "./Portrait";

const highlights = [
  "U.S. Navy veteran with two decades in emerging technology",
  "Led experiences for the Olympics, Fortune 500s, and world tours",
  "Built customer experience programs serving 300,000+ users",
  "Senior and hands on. You work with me, start to finish",
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
            For the last decade I have lived at the frontier of spatial
            computing. I directed large scale XR experiences for the Olympics at
            Magic Leap, built the customer experience engine behind 300,000 plus
            users at Talespin, and led the world's first touring XR concert at
            Tin Drum. Location based experiences, live events at global scale,
            and the systems and processes that make them run night after night.
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
