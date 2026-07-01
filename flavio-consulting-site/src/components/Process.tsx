import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, stagger } from "../lib/motion";

type Step = { title: string; desc: string };

const steps: Step[] = [
  {
    title: "Discover",
    desc: "We dig into how your business actually runs. The tools, the handoffs, the friction. No assumptions, just clarity.",
  },
  {
    title: "Design",
    desc: "Together we map a pragmatic plan: what to fix first, what to automate, and the highest leverage wins to chase.",
  },
  {
    title: "Build and Deploy",
    desc: "We implement the integrations, automations, AI, and the training to back it. Real systems, in production, fast.",
  },
  {
    title: "Measure and Scale",
    desc: "We track the impact, tune what is working, and set you up to keep compounding the gains long after we are done.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          number="04"
          label="How we work"
          title={
            <>
              A clear path from <span className="text-burnt">chaos to clarity</span>
            </>
          }
          desc="A proven, transparent process so you always know what is happening and why it matters."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="group border-t border-ink/25 pt-6 transition-colors duration-300 hover:border-burnt"
            >
              <span className="font-display text-7xl font-semibold leading-none text-ink/15 transition-colors duration-300 group-hover:text-burnt">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-tight text-ink">
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
