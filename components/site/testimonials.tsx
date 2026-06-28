"use client";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { testimonials } from "@/lib/testimonials";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold-500/[0.07] blur-[150px]" />
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[600px] flex-col items-center justify-center text-center"
        >
          <div className="rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-gold-200">
            Member Stories
          </div>

          <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            Lives changed, one acquisition at a time
          </h2>
          <p className="mt-5 text-foreground/65">
            From military disability checks to multi-million dollar portfolios —
            here&apos;s what happens inside the community.
          </p>
        </motion.div>

        <div className="mt-14 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={17} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={21}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={19}
          />
        </div>
      </div>
    </section>
  );
}
