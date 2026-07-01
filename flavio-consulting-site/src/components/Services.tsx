import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { fadeUp, stagger } from "../lib/motion";

type Service = {
  tag: string;
  title: string;
  desc: string;
  points: string[];
};

const services: Service[] = [
  {
    tag: "Optimize",
    title: "Find what's slowing you down",
    desc: "A deep audit of your workflows, tools, and operations to surface the bottlenecks quietly costing you time, money, and momentum.",
    points: ["Operational audits", "Process redesign", "Cost rationalization"],
  },
  {
    tag: "Elevate",
    title: "Upskill your team for what's next",
    desc: "Practical, hands on training so your people confidently adopt automation, AI, and modern tools, then carry the momentum forward.",
    points: ["AI enablement", "Integration playbooks", "Workshops and coaching"],
  },
  {
    tag: "Build",
    title: "Ship systems that do the work",
    desc: "Custom solutions designed and built around your business. CRM setups, AI integrations, and automations that run while you sleep.",
    points: ["CRM implementation", "AI and LLM integration", "Automation systems"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          number="02"
          label="How I help"
          title={
            <>
              Three ways we can{" "}
              <span className="text-burnt">work together</span>
            </>
          }
          desc="Whether you need a sharp diagnosis, a sharper team, or a system built from scratch, we start exactly where you are and go from there."
        />
      </div>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-16 border-b border-ink/20"
      >
        {services.map((s, i) => (
          <motion.a
            key={s.tag}
            href="#contact"
            variants={fadeUp}
            className="group block border-t border-ink/20 transition-colors duration-300 hover:bg-ink max-sm:border-cream/10 max-sm:bg-ink"
          >
            <div className="container-page grid gap-4 py-10 max-sm:py-12 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10 sm:py-12">
              <span className="font-display text-sm font-semibold text-burnt max-sm:text-base">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-4xl font-semibold uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-cream max-sm:text-[13vw] max-sm:leading-none max-sm:text-cream sm:text-6xl">
                  {s.tag}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-cream/75 max-sm:mt-4 max-sm:text-cream/70">
                  {s.desc}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-mute transition-colors duration-300 group-hover:text-burnt max-sm:hidden">
                  {s.points.join("  ·  ")}
                </p>
                <span className="mt-6 hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-cream max-sm:inline-flex">
                  <span className="flex h-8 w-8 items-center justify-center bg-burnt text-cream">
                    <ArrowUpRight size={15} />
                  </span>
                  Start here
                </span>
              </div>
              <span className="hidden h-14 w-14 items-center justify-center border border-ink/25 text-ink transition-all duration-300 group-hover:border-burnt group-hover:bg-burnt group-hover:text-cream sm:flex">
                <ArrowUpRight size={22} />
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
