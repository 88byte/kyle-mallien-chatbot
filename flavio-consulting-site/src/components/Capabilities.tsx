import { motion } from "framer-motion";
import { Workflow, Sparkles, Cable, Layers, Building2, Route } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { fadeUp, stagger } from "../lib/motion";

type Capability = { icon: LucideIcon; title: string; desc: string };

const capabilities: Capability[] = [
  {
    icon: Workflow,
    title: "Custom processes and workflows",
    desc: "I design how work should actually flow, then document it so it sticks. Less chaos, fewer dropped balls, more output from the same team.",
  },
  {
    icon: Sparkles,
    title: "Automation and AI",
    desc: "I put the repetitive work on autopilot with automation and AI, so your people spend their time on what genuinely needs a human.",
  },
  {
    icon: Cable,
    title: "Tool and platform integration",
    desc: "I connect and configure the platforms you rely on, from CRM to operations tooling, so your data and your teams finally stay in sync.",
  },
  {
    icon: Layers,
    title: "Systems simplification",
    desc: "Too many tools and too many tabs? I consolidate and streamline your stack so it is cheaper, calmer, and faster to run.",
  },
  {
    icon: Building2,
    title: "Building and scaling teams",
    desc: "I help stand up and structure new departments and functions, with the processes and tools they need to perform from day one.",
  },
  {
    icon: Route,
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
              Real work, <span className="italic text-burnt">not just advice</span>
            </>
          }
          desc="Over the years I have helped businesses in all of these ways, hands on and shoulder to shoulder with their teams. Here is where I do my best work."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="group rounded-3xl border border-line bg-cream p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-burnt/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-burnt-tint transition-colors group-hover:bg-burnt">
                  <Icon
                    size={22}
                    className="text-burnt transition-colors group-hover:text-cream"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
