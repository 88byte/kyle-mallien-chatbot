import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import Reveal from "./Reveal";
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
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Sound familiar?</span>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Most teams do not have a{" "}
            <span className="text-burnt">technology problem</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            They have a too many tools, too much manual work, and not enough time
            problem. If any of this hits close to home, you are exactly who I
            built this practice for.
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2"
        >
          {pains.map((p) => (
            <motion.div
              key={p}
              variants={fadeUp}
              className="flex items-start gap-3.5 rounded-2xl border border-line bg-cream p-5 shadow-soft"
            >
              <AlertCircle
                size={20}
                className="mt-0.5 flex-shrink-0 text-burnt"
              />
              <p className="text-[15px] leading-relaxed text-ink-soft">{p}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="font-display text-xl text-ink sm:text-2xl">
            Whatever the tangle, I have almost certainly untangled something like
            it before.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
