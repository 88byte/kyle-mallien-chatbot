"use client";
import { motion } from "motion/react";
import { Search, Calculator, TrendingUp, Crown } from "lucide-react";
import { PILLARS } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionEyebrow } from "./section-eyebrow";

const ICONS = [Search, Calculator, TrendingUp, Crown];

export function Method() {
  return (
    <section
      id="fuel"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(8,8,8,0.97), rgba(10,9,8,0.9) 50%, rgba(8,8,8,0.98)), url(/img/fuel-bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow center>The Process</SectionEyebrow>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            The F.U.E.L Process
          </h2>
          <p className="mt-5 text-foreground/65">
            The roadmap Kyle&apos;s students use to enter cash-flowing
            businesses. Find it, pay for it, grow it, and turn it into a legacy.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={pillar.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-colors hover:border-gold-500/50"
              >
                {/* Big ghosted letter watermark */}
                <span className="font-display pointer-events-none absolute -right-2 -top-5 select-none text-[7rem] leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-gold-500/10">
                  {pillar.step}
                </span>

                {/* Step rail */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient text-primary-foreground shadow-lg shadow-gold-900/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300/70">
                    Step {i + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">
                  {pillar.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                  {pillar.body}
                </p>

                {/* Bottom accent line grows on hover */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-gradient transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
