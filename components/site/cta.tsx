"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, FINAL_CTA } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative py-16 sm:py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gold-500/30 bg-gradient-to-br from-gold-500/[0.12] via-card to-background px-8 py-16 text-center sm:px-16 sm:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(41_55%_57%_/_0.18),transparent)]" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
              {FINAL_CTA.eyebrow}
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {FINAL_CTA.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-foreground/70">
              {FINAL_CTA.body}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href={BRAND.applyUrl}>
                  Apply to Work With Kyle
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={BRAND.callUrl}>Book a Strategy Call</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
