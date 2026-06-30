import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";
import Portrait from "./Portrait";

const clients = ["Citrix", "Magic Leap", "SaaS Scaleups", "AI Startups"];

export default function Hero() {
  return (
    <section id="top" className="relative scroll-mt-24 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: message */}
          <motion.div
            variants={stagger(0.13, 0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Technology · Strategy · Automation
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            >
              Work smarter.
              <br />
              <span className="text-burnt">Scale faster.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              I help ambitious teams transform how they operate. We cut waste,
              modernize workflows, and build AI powered systems that turn
              operational chaos into a real competitive edge.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
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

            <motion.div variants={fadeUp} className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-mute">
                Over 20 years building with
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
                {clients.map((c) => (
                  <span
                    key={c}
                    className="font-display text-base font-semibold text-ink-soft"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            {/* solid offset block for depth */}
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-burnt/90" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-ink shadow-frame">
              <Portrait />
            </div>
            <div className="absolute -left-5 bottom-8 rounded-2xl border border-line bg-cream px-5 py-3 shadow-soft">
              <p className="font-display text-xl font-semibold text-ink">20+ yrs</p>
              <p className="text-xs text-ink-mute">SaaS · AI · Hardware</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
