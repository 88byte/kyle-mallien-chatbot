"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import { BRAND } from "@/lib/site";
import { Reveal } from "./reveal";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="relative py-20 sm:py-28">
      <div className="container-tight">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
            Watch
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Why don&apos;t they teach us this?
          </h2>
          <p className="mt-4 text-foreground/65">
            The 2-minute introduction to acquisition — and why it&apos;s the
            fastest path most professionals never hear about.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border border-gold-500/20 shadow-2xl shadow-black/60">
            {playing ? (
              <iframe
                src={`https://player.vimeo.com/video/${BRAND.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                title="Kyle Mallien"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play video"
                className="group relative h-full w-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BRAND.heroPhoto}
                  alt="Kyle Mallien"
                  loading="lazy"
                  className="h-full w-full object-cover object-top brightness-[0.7] transition-all group-hover:brightness-[0.55]"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient shadow-xl transition-transform group-hover:scale-110">
                    <Play
                      size={28}
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
