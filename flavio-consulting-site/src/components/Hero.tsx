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
    <section id="top" className="relative scroll-mt-24 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <span className="h-2.5 w-2.5 bg-burnt" />
          <span className="label !text-ink-soft">
            Systems · Automation · Operations
          </span>
        </motion.div>

        <h1 className="mt-8 font-display font-semibold uppercase leading-[0.92] tracking-[-0.01em] text-ink">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[13.5vw] sm:text-[10vw] lg:text-[8.5rem]"
              {...rise(0.1)}
            >
              Work smarter.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[13.5vw] text-burnt sm:text-[10vw] lg:text-[8.5rem]"
              {...rise(0.24)}
            >
              Scale faster.
            </motion.span>
          </span>
        </h1>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              For over 20 years I have helped companies build the processes,
              tools, and teams that make growth feel effortless. I find what is
              slowing you down, then design and build the systems that fix it
              for good.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary group">
                Book a free strategy call
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a href="#services" className="btn-ghost">
                Explore services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.7 }}
            className="lg:pt-2"
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
            className="relative mx-auto w-full max-w-xs lg:mx-0 lg:w-72"
          >
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-burnt" />
            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
              <Portrait />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
