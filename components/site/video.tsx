"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import { BRAND } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionEyebrow } from "./section-eyebrow";

export function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="video" className="relative py-16 sm:py-28">
      <div className="container-tight">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <SectionEyebrow center>Watch</SectionEyebrow>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Why don&apos;t they teach us this?
          </h2>
          <p className="mt-4 text-foreground/65">
            A short introduction to acquisition, and why it&apos;s the fastest
            path most professionals never hear about.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Horizontal thumbnail; plays in a lightbox so controls are usable */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Play video"
            className="group relative mx-auto block aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-gold-500/25 bg-black shadow-2xl shadow-black/60"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BRAND.heroPhoto}
              alt="Kyle Mallien speaking"
              loading="lazy"
              className="h-full w-full object-cover brightness-[0.7] transition-all group-hover:brightness-[0.55]"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gold-gradient shadow-xl transition-transform group-hover:scale-110">
                <Play
                  size={26}
                  className="ml-1 fill-primary-foreground text-primary-foreground"
                />
              </span>
            </span>
          </button>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button
              aria-label="Close video"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[198/426] max-h-[86vh] w-auto overflow-hidden rounded-2xl bg-black shadow-2xl"
            >
              <iframe
                src={`https://player.vimeo.com/video/${BRAND.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
                title="Kyle Mallien"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
