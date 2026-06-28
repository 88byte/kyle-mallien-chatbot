"use client";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, HERO_STATS } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="luxe-vignette relative overflow-hidden pb-20 pt-36 sm:pt-44"
    >
      {/* ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]" />

      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium text-gold-200">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-gold-400 text-gold-400"
                />
              ))}
            </span>
            Trusted by 500+ business owners
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            Build wealth by{" "}
            <span className="text-gradient-gold">buying businesses</span>,
            not building them from scratch.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Acquisition is the force multiplier the wealthy actually use. Kyle
            Mallien mentors ordinary operators into owners of cash-flowing
            companies — the art of finding, financing, and scaling businesses
            you don&apos;t have to start.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={BRAND.applyUrl}>
                Apply to Work With Kyle
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#programs">Explore the Programs</a>
            </Button>
          </div>
        </motion.div>

        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/60 px-6 py-7 text-center backdrop-blur"
            >
              <div className="font-serif text-3xl font-semibold text-gradient-gold md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs leading-snug text-foreground/55">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
