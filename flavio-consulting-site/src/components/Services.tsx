import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { useState } from "react";
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
    points: ["Operational & workflow audits", "Process mapping & redesign", "Tooling & cost rationalization"],
  },
  {
    icon: GraduationCap,
    tag: "Elevate",
    title: "Upskill your team for what's next",
    desc: "Hands-on training and enablement so your people confidently adopt automation, AI, and modern tools — and keep the momentum going.",
    points: ["AI & automation enablement", "Tool integration playbooks", "Team workshops & coaching"],
  },
  {
    icon: Boxes,
    tag: "Build",
    title: "Ship systems that do the work",
    desc: "Custom solutions designed and built around your business — CRM setups, AI integrations, and automations that run while you sleep.",
    points: ["CRM design & implementation", "AI & LLM integrations", "End-to-end automation systems"],
  },
];

function SpotlightCard({ service, index }: { service: Service; index: number }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const Icon = service.icon;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <motion.div
      variants={fadeUp}
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-3xl glass p-7 shadow-card transition-transform duration-300 hover:-translate-y-1"
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(360px circle at ${pos.x}% ${pos.y}%, rgba(99,102,241,0.18), transparent 65%)`,
        }}
      />
      {/* gradient border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(130deg,rgba(34,211,238,0.4),transparent_40%,rgba(168,85,247,0.4))] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] p-[1px]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 ring-1 ring-white/10">
            <Icon size={22} className="text-brand-cyan" />
          </div>
          <span className="font-display text-5xl font-bold text-white/5 transition-colors group-hover:text-white/10">
            0{index + 1}
          </span>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
          {service.tag}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {service.desc}
        </p>

        <ul className="mt-5 space-y-2">
          {service.points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-violet" />
              {p}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors hover:text-brand-cyan"
        >
          Start here
          <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What I do</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Three ways to move your{" "}
            <span className="gradient-text">business forward</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Whether you need a sharp diagnosis, a sharper team, or a system built
            from scratch — we meet you where you are.
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
            <SpotlightCard key={s.tag} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
