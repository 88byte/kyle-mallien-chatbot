import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SwipeHint from "./SwipeHint";
import { fadeUp, stagger } from "../lib/motion";

const pains = [
  "Your team is drowning in manual work that software should be handling.",
  "You have a stack of tools that do not talk to each other.",
  "Growth has outpaced your processes, and everything feels held together with tape.",
  "You know you need automation and AI, but not where to start.",
  "Customer experience is slipping through the cracks between teams.",
  "You need to build or scale a function, and hiring alone will not fix it.",
];

export default function Challenges() {
  return (
    <section id="challenges" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          number="01"
          label="Sound familiar?"
          title={
            <>
              Most teams do not have a{" "}
              <span className="text-burnt">technology problem</span>
            </>
          }
          desc="They have a too many tools, too much manual work, and not enough time problem. If any of this hits close to home, you are exactly who I built this practice for."
        />

        <SwipeHint />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="no-scrollbar max-sm:-mx-6 max-sm:mt-4 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:gap-4 max-sm:overflow-x-auto max-sm:px-6 max-sm:pb-3 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-3"
        >
          {pains.map((p, i) => (
            <motion.div
              key={p}
              variants={fadeUp}
              className="border-t border-ink/20 pt-5 max-sm:flex max-sm:w-[74vw] max-sm:shrink-0 max-sm:snap-start max-sm:flex-col max-sm:justify-between max-sm:border max-sm:border-ink/15 max-sm:bg-paper max-sm:p-6"
            >
              <span className="font-display text-sm font-semibold text-burnt max-sm:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft max-sm:mt-8 max-sm:text-base max-sm:text-ink">
                {p}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-16">
          <p className="max-w-2xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Whatever the tangle, I have almost certainly untangled something
            like it before.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
