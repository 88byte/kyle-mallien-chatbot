import { motion } from "framer-motion";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { fadeUp, stagger } from "../lib/motion";

type Step = { icon: LucideIcon; title: string; desc: string };

const steps: Step[] = [
  {
    icon: Search,
    title: "Discover",
    desc: "We dig into how your business actually runs. The tools, the handoffs, the friction. No assumptions, just clarity.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Together we map a pragmatic plan: what to fix first, what to automate, and the highest leverage wins to chase.",
  },
  {
    icon: Rocket,
    title: "Build and Deploy",
    desc: "We implement the integrations, automations, AI, and the training to back it. Real systems, in production, fast.",
  },
  {
    icon: LineChart,
    title: "Measure and Scale",
    desc: "We track the impact, tune what is working, and set you up to keep compounding the gains long after we are done.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            A clear path from <span className="text-burnt">chaos to clarity</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            A proven, transparent process so you always know what is happening
            and why it matters.
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-16 grid gap-8 md:grid-cols-4"
        >
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={fadeUp} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-cream shadow-soft">
                  <Icon size={22} className="text-burnt" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-burnt text-xs font-bold text-cream">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
