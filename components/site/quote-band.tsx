"use client";
import { motion } from "motion/react";

export function QuoteBand() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed image with heavy overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.78) 45%, rgba(8,8,8,0.62) 100%), url(/img/hero-kyle.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      />
      <div className="container-tight relative py-20 sm:py-28">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <span className="font-display text-5xl leading-none text-gold-400">
            “
          </span>
          <p className="mt-2 font-serif text-2xl font-light leading-snug text-white sm:text-4xl">
            They don&apos;t want you to know acquisition is even an option. My
            goal is to put you on my back and get you across the finish line.
          </p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Kyle Mallien
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
