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
    desc: "We dig into how your business actually runs — the tools, the handoffs, the friction. No assumptions, just clarity.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Together we map a pragmatic plan: what to fix first, what to automate, and the highest-leverage wins to chase.",
  },
  {
    icon: Rocket,
    title: "Build & Deploy",
    desc: "We implement — integrations, automations, AI, and the training to back it. Real systems, in production, fast.",
  },
  {
    icon: LineChart,
    title: "Measure & Scale",
    desc: "We track the impact, tune what's working, and set you up to keep compounding the gains long after we're done.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            A clear path from <span className="gradient-text">chaos to clarity</span>
          </h2>
          <p className="mt-4 text-slate-400">
            A proven, transparent process — so you always know what's happening
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
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={fadeUp} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl glass shadow-glow">
                  <Icon size={22} className="text-brand-cyan" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-violet text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
