import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import SwipeHint from "./SwipeHint";
import { fadeUp, stagger } from "../lib/motion";

type Capability = { title: string; desc: string };

const capabilities: Capability[] = [
  {
    title: "Custom processes and workflows",
    desc: "I design how work should actually flow, then document it so it sticks. Less chaos, fewer dropped balls, more output from the same team.",
  },
  {
    title: "Automation and AI",
    desc: "I put the repetitive work on autopilot with automation and AI, so your people spend their time on what genuinely needs a human.",
  },
  {
    title: "Tool and platform integration",
    desc: "I connect and configure the platforms you rely on, from CRM to operations tooling, so your data and your teams finally stay in sync.",
  },
  {
    title: "Systems simplification",
    desc: "Too many tools and too many tabs? I consolidate and streamline your stack so it is cheaper, calmer, and faster to run.",
  },
  {
    title: "Building and scaling teams",
    desc: "I help stand up and structure new departments and functions, with the processes and tools they need to perform from day one.",
  },
  {
    title: "Customer experience and journey",
    desc: "I map and rebuild the customer and user journey so every touchpoint feels intentional, smooth, and worth coming back to.",
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
              Real work, <span className="text-burnt">not just advice</span>
            </>
          }
          desc="Over the years I have helped businesses in all of these ways, hands on and shoulder to shoulder with their teams. Here is where I do my best work."
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
              className="group border-t border-ink/25 pt-6 max-sm:flex max-sm:w-[80vw] max-sm:shrink-0 max-sm:snap-start max-sm:flex-col max-sm:border max-sm:border-ink/15 max-sm:bg-cream max-sm:p-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-semibold text-burnt max-sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 bg-ink/20 transition-colors duration-300 group-hover:bg-burnt max-sm:bg-burnt" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink max-sm:mt-6">
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
