import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const clients = ["Citrix", "Magic Leap", "SaaS Scaleups", "AI Startups"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
      <motion.div style={{ y, opacity }} className="container-page">
        <motion.div
          variants={stagger(0.14, 0.1)}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="eyebrow">
              <Sparkles size={13} className="text-brand-cyan" />
              Technology · Strategy · Automation
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Work smarter.
            <br />
            <span className="gradient-text-anim">Scale faster.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            I help ambitious teams transform how they operate — cutting waste,
            modernizing workflows, and building AI-powered systems that turn
            operational chaos into a competitive edge.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#contact" className="btn-primary group w-full sm:w-auto">
              Book a free strategy call
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a href="#services" className="btn-ghost w-full sm:w-auto">
              Explore services
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              20+ years building with
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {clients.map((c) => (
                <span
                  key={c}
                  className="font-display text-sm font-semibold text-slate-400/90"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
