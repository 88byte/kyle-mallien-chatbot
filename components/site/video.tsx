"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import { BRAND } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionEyebrow } from "./section-eyebrow";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="relative py-20 sm:py-28">
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
          {/* The source clip is a landscape video letterboxed inside a 198x426
              portrait Vimeo canvas. We show it in a 16:9 frame and scale the
              player up so the landscape footage fills it and the baked-in black
              bars get clipped by overflow-hidden. */}
          <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-gold-500/25 bg-black shadow-2xl shadow-black/60">
            {playing ? (
              <div
                className="absolute left-1/2 top-1/2 w-full"
                style={{
                  aspectRatio: "198 / 426",
                  transform: "translate(-50%, -50%) scale(1.04)",
                }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${BRAND.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
                  title="Kyle Mallien"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ) : (
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play video"
                className="group absolute inset-0 h-full w-full"
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
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
