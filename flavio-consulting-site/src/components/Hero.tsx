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
              Systems · Automation · Operations
            </motion.span>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  Work{" "}
                  <span className="relative inline-block">
                    smarter.
                    <svg
                      viewBox="0 0 220 16"
                      preserveAspectRatio="none"
                      className="absolute -bottom-1.5 left-0 h-3 w-full sm:-bottom-2.5 sm:h-4"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M6 11 C 55 4, 150 3, 214 8"
                        fill="none"
                        stroke="#9A3412"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
                      />
                    </svg>
                  </span>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="block italic text-burnt"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                >
                  Scale faster.
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              For over 20 years I have helped companies build the processes,
              tools, and teams that make growth feel effortless. I find what is
              slowing you down, then design and build the systems that fix it for
              good.
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
