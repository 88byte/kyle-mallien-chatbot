"use client";
import { motion } from "motion/react";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, HERO_STATS } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 sm:pt-36"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(8,8,8,0.92), rgba(8,8,8,0.97)), url(/img/pattern3.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute right-0 top-10 h-[520px] w-[620px] rounded-full bg-gold-500/15 blur-[150px]" />

      <div className="container-tight relative grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium text-gold-200 lg:mx-0">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-gold-300 text-gold-300" />
              ))}
            </span>
            75+ students · $90M+ secured in 2 years
          </div>

          <h1 className="font-display mt-6 text-4xl leading-[1.06] text-white sm:text-5xl xl:text-6xl">
            Build wealth by{" "}
            <span className="text-gradient-gold">buying businesses</span> — not
            building them from scratch.
          </h1>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
            Author · Investor · Business Strategist · Mentor
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/75 lg:mx-0">
            I help Doctors, Lawyers, Sales and Accounting pros who are great at
            their jobs — but feel trapped by them — buy cash-flowing businesses.
            One acquisition can replace your income. The next builds generational
            wealth for your family, not your boss.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button asChild size="lg">
              <a href={BRAND.applyUrl}>
                Explore Ways to Work With Me
                <ArrowRight size={18} />
              </a>
            </Button>
            <a
              href="#video"
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground/80 transition-colors hover:text-gold-200"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10 transition-colors group-hover:bg-gold-500/20">
                <Play size={16} className="ml-0.5 fill-gold-200 text-gold-200" />
              </span>
              Watch Kyle&apos;s story
            </a>
          </div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="absolute -inset-6 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.portrait}
            alt="Kyle Mallien"
            width={460}
            height={560}
            // eslint-disable-next-line @next/next/no-img-element
            fetchPriority="high"
            className="relative z-10 w-full drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Stat band */}
      <div className="border-t border-white/5 bg-black/40 backdrop-blur">
        <div className="container-tight grid grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="px-4 py-7 text-center"
            >
              <div className="font-display text-3xl text-gradient-gold md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs leading-snug text-foreground/55">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
