import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { fadeUp, stagger } from "../lib/motion";

type Service = {
  tag: string;
  desc: string;
  points: string[];
};

const services: Service[] = [
  {
    tag: "Optimize",
    desc: "I audit how your business really runs and hand you a plan that pays for itself. Bottlenecks, busywork, and money leaks. Found, named, and fixed.",
    points: ["Operational audits", "Process redesign", "Cost rationalization"],
  },
  {
    tag: "Elevate",
    desc: "Training that sticks. Your team becomes fluent in automation and AI, with playbooks they will actually use and confidence that compounds.",
    points: ["AI enablement", "Integration playbooks", "Workshops and coaching"],
  },
  {
    tag: "Build",
    desc: "Systems that work while you sleep. CRMs, integrations, and AI automation built around how your business actually operates.",
    points: ["CRM implementation", "AI and LLM integration", "Automation systems"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          number="03"
          label="How I help"
          title={
            <>
              Three ways to{" "}
              <span className="text-burnt">start winning back time</span>
            </>
          }
          desc="Every engagement starts with listening and ends with results you can measure. Pick the door that fits."
        />
      </div>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-16 border-b border-ink/15 max-sm:mt-10"
      >
        {services.map((s, i) => (
          <motion.a
            key={s.tag}
            href="#contact"
            variants={fadeUp}
            className="group block border-t border-ink/15 transition-colors duration-300 hover:bg-ink max-sm:border-cream/10 max-sm:bg-ink"
          >
            <div className="container-page grid gap-4 py-10 max-sm:py-12 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10 sm:py-12">
              <span className="font-display text-sm font-semibold text-burnt max-sm:text-base">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-4xl font-semibold tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-cream max-sm:text-[12vw] max-sm:leading-none max-sm:text-cream sm:text-5xl">
                  {s.tag}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-cream/75 max-sm:mt-4 max-sm:text-cream/70">
                  {s.desc}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-mute transition-colors duration-300 group-hover:text-burnt max-sm:hidden">
                  {s.points.join("  ·  ")}
                </p>
                <span className="mt-6 hidden items-center gap-3 text-sm font-semibold text-cream max-sm:inline-flex">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-burnt text-cream">
                    <ArrowUpRight size={16} />
                  </span>
                  Start here
                </span>
              </div>
              <span className="hidden h-14 w-14 items-center justify-center rounded-full border border-ink/20 text-ink transition-all duration-300 group-hover:border-burnt group-hover:bg-burnt group-hover:text-cream sm:flex">
                <ArrowUpRight size={22} />
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
