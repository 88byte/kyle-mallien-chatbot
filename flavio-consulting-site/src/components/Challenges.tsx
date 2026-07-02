import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SwipeHint from "./SwipeHint";
import { fadeUp, stagger } from "../lib/motion";

const pains = [
  "Your team burns hours on work a system should be doing.",
  "Your tools do not talk to each other, so your people play messenger.",
  "Growth outpaced your processes and now everything feels duct taped.",
  "You know AI could help. Nobody has time to figure out where.",
  "Customers feel the cracks between your teams.",
  "You are scaling a team without the systems to hold it up.",
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
              You do not need more software. You need it{" "}
              <span className="text-burnt">working together.</span>
            </>
          }
          desc="Growing businesses rarely have a technology problem. Too many tools, too much manual work, not enough time. If that sounds like home, you are in the right place."
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
              className="border-t border-ink/20 pt-5 max-sm:flex max-sm:w-[74vw] max-sm:shrink-0 max-sm:snap-start max-sm:flex-col max-sm:justify-between max-sm:rounded-2xl max-sm:border max-sm:border-ink/15 max-sm:bg-paper max-sm:p-6"
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

        <Reveal className="mt-16 max-sm:mt-10">
          <p className="max-w-2xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Whatever your tangle looks like,{" "}
            <span className="text-burnt">I have untangled one like it before.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
