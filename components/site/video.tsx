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
          {/* Vertical video (198x426) — container matches its exact aspect */}
          <div className="relative mx-auto aspect-[198/426] w-full max-w-[300px] overflow-hidden rounded-[1.75rem] border border-gold-500/25 bg-black shadow-2xl shadow-black/60">
            {playing ? (
              <iframe
                src={`https://player.vimeo.com/video/${BRAND.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
                title="Kyle Mallien"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play video"
                className="group absolute inset-0 h-full w-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BRAND.portrait}
                  alt="Kyle Mallien"
                  loading="lazy"
                  className="h-full w-full object-cover object-top brightness-[0.7] transition-all group-hover:brightness-[0.55]"
                />
                <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gold-gradient shadow-xl transition-transform group-hover:scale-110">
                    <Play
                      size={24}
                      className="ml-1 fill-primary-foreground text-primary-foreground"
                    />
                  </span>
                </span>
                <span className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-white/90">
                  Watch Alex&apos;s story
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
