import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import SwipeHint from "./SwipeHint";
import { fadeUp, stagger } from "../lib/motion";

type Step = { title: string; desc: string };

const steps: Step[] = [
  {
    title: "Discover",
    desc: "We map how your business actually runs. The tools, the handoffs, the friction. No assumptions, just clarity.",
  },
  {
    title: "Design",
    desc: "You get a pragmatic plan: what to fix first, what to automate, and the wins that pay for the work.",
  },
  {
    title: "Build and deploy",
    desc: "I ship the integrations, automations, and AI, then train your team to run them. Real systems, in production, fast.",
  },
  {
    title: "Measure and scale",
    desc: "We track the impact, tune what works, and set you up to keep compounding the gains after I am gone.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          number="05"
          label="How we work"
          title={
            <>
              From first call to{" "}
              <span className="text-burnt">lasting change</span>
            </>
          }
          desc="No black box consulting here. You will always know what is happening, what comes next, and why it matters."
        />

        <SwipeHint />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="no-scrollbar max-sm:-mx-6 max-sm:mt-4 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:gap-4 max-sm:overflow-x-auto max-sm:px-6 max-sm:pb-3 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="group border-t border-ink/25 pt-6 transition-colors duration-300 hover:border-burnt max-sm:w-[74vw] max-sm:shrink-0 max-sm:snap-start max-sm:rounded-2xl max-sm:border max-sm:border-ink/15 max-sm:bg-paper max-sm:p-6"
            >
              <span className="font-display text-6xl font-medium leading-none text-ink/15 transition-colors duration-300 group-hover:text-burnt max-sm:text-burnt">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink max-sm:mt-7">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
