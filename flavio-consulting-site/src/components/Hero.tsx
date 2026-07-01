import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Portrait from "./Portrait";

const clients = ["Citrix", "Magic Leap", "SaaS Scaleups", "AI Startups"];

const rise = (delay: number) => ({
  initial: { y: "110%" },
  animate: { y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-24 pt-32 pb-16 max-sm:flex max-sm:min-h-[100svh] max-sm:flex-col max-sm:justify-center max-sm:pt-24 max-sm:pb-24 sm:pt-44 sm:pb-28"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-burnt" />
          <span className="label !text-ink-soft">
            Systems · Automation · Operations
          </span>
        </motion.div>

        <h1 className="mt-8 font-display font-semibold leading-[0.98] tracking-[-0.02em] text-ink max-sm:mt-6">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[14.5vw] sm:text-[9vw] lg:text-[7.5rem]"
              {...rise(0.1)}
            >
              Work smarter.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[14.5vw] text-burnt sm:text-[9vw] lg:text-[7.5rem]"
              {...rise(0.24)}
            >
              Scale faster.
            </motion.span>
          </span>
        </h1>

        <div className="mt-14 grid items-start gap-12 max-sm:mt-8 max-sm:gap-8 lg:grid-cols-[1fr_1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <p className="max-w-md text-lg leading-relaxed text-ink-soft max-sm:text-base">
              Your team is capable of more. I design the processes, connect the
              tools, and build the automation that proves it. You get your hours
              back. Your business gets its momentum back.
            </p>
            <div className="mt-8 flex flex-col gap-3 max-sm:mt-6 sm:flex-row">
              <a href="#contact" className="btn-primary group">
                Book a free strategy call
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a href="#services" className="btn-ghost max-sm:hidden">
                Explore services
              </a>
            </div>

            {/* Mobile signature strip: portrait tile + credentials */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-9 flex items-center gap-5 sm:hidden"
            >
              <div className="relative h-28 w-24 shrink-0">
                <div className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl bg-burnt" />
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-ink">
                  <Portrait compact />
                </div>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink">
                  20+ years in the build
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {clients.join("  ·  ")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.7 }}
            className="hidden sm:block lg:pt-2"
          >
            <p className="label">Over 20 years building with</p>
            <ul className="mt-5 space-y-3">
              {clients.map((c) => (
                <li
                  key={c}
                  className="border-t border-ink/15 pt-3 font-display text-lg font-medium text-ink"
                >
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.74, duration: 0.7 }}
            className="relative hidden w-72 sm:block"
          >
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.75rem] bg-burnt" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink">
              <Portrait />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
