import { motion } from "framer-motion";
import { Gauge, GraduationCap, Boxes, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { fadeUp, stagger } from "../lib/motion";

type Service = {
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  points: string[];
};

const services: Service[] = [
  {
    icon: Gauge,
    tag: "Optimize",
    title: "Find what's slowing you down",
    desc: "A deep audit of your workflows, tools, and operations to surface the bottlenecks quietly costing you time, money, and momentum.",
    points: [
      "Operational and workflow audits",
      "Process mapping and redesign",
      "Tooling and cost rationalization",
    ],
  },
  {
    icon: GraduationCap,
    tag: "Elevate",
    title: "Upskill your team for what's next",
    desc: "Practical, hands on training so your people confidently adopt automation, AI, and modern tools, then carry the momentum forward.",
    points: [
      "AI and automation enablement",
      "Tool integration playbooks",
      "Team workshops and coaching",
    ],
  },
  {
    icon: Boxes,
    tag: "Build",
    title: "Ship systems that do the work",
    desc: "Custom solutions designed and built around your business. CRM setups, AI integrations, and automations that run while you sleep.",
    points: [
      "CRM design and implementation",
      "AI and LLM integrations",
      "Complete automation systems",
    ],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col rounded-3xl border border-line bg-cream p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-burnt/40"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-burnt-tint">
          <Icon size={22} className="text-burnt" />
        </div>
        <span className="font-display text-5xl font-semibold text-ink/10 transition-colors group-hover:text-burnt/20">
          0{index + 1}
        </span>
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-burnt">
        {service.tag}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.desc}</p>

      <ul className="mt-5 space-y-2.5">
        {service.points.map((p) => (
          <li key={p} className="flex items-center gap-2.5 text-sm text-ink-soft">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-burnt" />
            {p}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-burnt transition-colors hover:text-burnt-dark"
      >
        Start here
        <ArrowUpRight size={15} />
      </a>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How I help</span>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Three ways we can{" "}
            <span className="text-burnt">work together</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            Whether you need a sharp diagnosis, a sharper team, or a system built
            from scratch, we start exactly where you are and go from there.
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.tag} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
