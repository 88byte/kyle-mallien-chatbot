"use client";
import { motion } from "motion/react";
import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, FREE_GIFT } from "@/lib/site";

export function FreeGift() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-r from-gold-500/[0.1] via-card to-slate/10 p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -left-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[90px]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">
                <Gift size={13} />
                {FREE_GIFT.eyebrow}
              </div>
              <h2 className="mt-4 font-serif text-2xl font-semibold leading-snug sm:text-4xl">
                {FREE_GIFT.heading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                {FREE_GIFT.body}
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href={BRAND.giftUrl}>
                {FREE_GIFT.cta}
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
