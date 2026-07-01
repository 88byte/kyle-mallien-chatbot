import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
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

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pains.map((p, i) => (
            <motion.div
              key={p}
              variants={fadeUp}
              className="border-t border-ink/20 pt-5"
            >
              <span className="font-display text-sm font-semibold text-burnt">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
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
