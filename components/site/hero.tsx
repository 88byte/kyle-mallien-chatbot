"use client";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, HERO_STATS } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-32"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(8,8,8,0.92), rgba(8,8,8,0.97)), url(/img/pattern3.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="pointer-events-none absolute right-0 top-10 h-[520px] w-[620px]"
        style={{
          background:
            "radial-gradient(circle, rgba(194,161,77,0.16), transparent 65%)",
        }}
      />

      <div className="container-tight relative grid items-end gap-6 pb-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 text-center lg:text-left"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium text-gold-200 lg:mx-0">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-gold-300 text-gold-300" />
              ))}
            </span>
            250+ students mentored · $100M+ in deals
          </div>

          <h1 className="font-display mt-6 text-[2.1rem] leading-[1.04] text-white sm:text-6xl xl:text-7xl">
            Build wealth by{" "}
            <span className="text-gradient-gold">buying businesses</span>, not
            building them from scratch.
          </h1>

          <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-300 sm:text-xs">
            Author · Investor · Business Strategist · Mentor
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/75 lg:mx-0">
            I help Doctors, Lawyers, Sales and Accounting pros who are great at
            their jobs but feel trapped by them. They buy cash-flowing businesses
            instead. One acquisition can replace your income. The next builds
            generational wealth for your family, not your boss.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={BRAND.applyUrl}>
                Explore Ways to Work With Me
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Portrait — visible on all screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 mx-auto w-full max-w-[300px] sm:max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-6 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.portrait}
            alt="Kyle Mallien"
            width={460}
            height={560}
            fetchPriority="high"
            className="relative z-10 mx-auto max-h-[340px] w-auto object-cover object-top drop-shadow-2xl sm:max-h-[440px] lg:max-h-none lg:w-full"
          />
        </motion.div>
      </div>

      {/* Stat band */}
      <div className="border-t border-white/5 bg-black/60">
        <div className="container-tight grid grid-cols-2 divide-x divide-y divide-white/5 md:grid-cols-4 md:divide-y-0">
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="px-4 py-6 text-center md:py-7"
            >
              <div className="font-display text-2xl text-gradient-gold sm:text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[0.7rem] leading-snug text-foreground/55 sm:text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
