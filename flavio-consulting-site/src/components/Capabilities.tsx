import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import SwipeHint from "./SwipeHint";
import { fadeUp, stagger } from "../lib/motion";

type Capability = { title: string; desc: string };

const capabilities: Capability[] = [
  {
    title: "Custom processes and workflows",
    desc: "Work flows the way it should. Fewer dropped balls, faster handoffs, more output from the team you already have.",
  },
  {
    title: "Automation and AI",
    desc: "The repetitive work runs itself, so your people spend their energy on what actually needs a human.",
  },
  {
    title: "Tool and platform integration",
    desc: "Your CRM, your ops stack, your data. Connected, synced, and finally telling the same story.",
  },
  {
    title: "Systems simplification",
    desc: "Fewer tools, fewer tabs, lower bills. A stack that is calmer, cheaper, and faster to run.",
  },
  {
    title: "Building and scaling teams",
    desc: "New departments stood up right the first time, with the processes and tools to perform from day one.",
  },
  {
    title: "Customer experience and journey",
    desc: "Every touchpoint intentional. A journey so smooth your customers come back just because it is easy.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-24 bg-paper py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeader
          number="03"
          label="What I build"
          title={
            <>
              Built by hand,{" "}
              <span className="text-burnt">proven in the field</span>
            </>
          }
          desc="None of this is theory. It is work I have delivered for real businesses, again and again, for two decades."
        />

        <SwipeHint />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="no-scrollbar max-sm:-mx-6 max-sm:mt-4 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:gap-4 max-sm:overflow-x-auto max-sm:px-6 max-sm:pb-3 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-3"
        >
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="group border-t border-ink/25 pt-6 max-sm:flex max-sm:w-[80vw] max-sm:shrink-0 max-sm:snap-start max-sm:flex-col max-sm:rounded-2xl max-sm:border max-sm:border-ink/15 max-sm:bg-cream max-sm:p-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-semibold text-burnt max-sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 rounded-full bg-ink/20 transition-colors duration-300 group-hover:bg-burnt max-sm:bg-burnt" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-[-0.01em] text-ink max-sm:mt-6">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
