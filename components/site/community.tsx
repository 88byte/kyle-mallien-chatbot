"use client";
import { motion } from "motion/react";
import { Users, MessagesSquare, CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/site";
import { Reveal } from "./reveal";

const COMMUNITY_STATS = [
  { icon: Users, value: "250+", label: "Members mentored" },
  { icon: MessagesSquare, value: "Daily", label: "Coaching & community" },
  { icon: CalendarDays, value: "Live", label: "Events through the year" },
];

export function Community() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-tight">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-card/80 to-background p-8 sm:p-14">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72"
              style={{
                background:
                  "radial-gradient(circle, rgba(194,161,77,0.12), transparent 70%)",
              }}
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  The Inner Circle is active now
                </div>

                <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
                  You don&apos;t do this alone
                </h2>
                <p className="mt-5 text-foreground/70">
                  Building wealth through acquisition is a team sport. Inside
                  Kyle&apos;s private community you&apos;re surrounded by owners
                  closing real deals. Many of them started exactly where you
                  are, and now mentor the next wave. Ask questions, share wins,
                  and get unstuck daily.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {["JR", "EM", "TD", "AS", "KP"].map((m, i) => (
                      <span
                        key={i}
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-background bg-secondary text-xs font-semibold text-gold-200"
                      >
                        {m}
                      </span>
                    ))}
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-background bg-gold-gradient text-xs font-semibold text-primary-foreground">
                      250+
                    </span>
                  </div>
                  <p className="text-sm text-foreground/55">
                    owners building wealth together
                  </p>
                </div>

                <div className="mt-9">
                  <Button asChild size="lg">
                    <a href={BRAND.applyUrl}>
                      Join the community
                      <ArrowRight size={18} />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                {COMMUNITY_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true, margin: "-60px" }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300">
                      <stat.icon size={22} />
                    </span>
                    <div>
                      <div className="font-display text-2xl text-gradient-gold">
                        {stat.value}
                      </div>
                      <div className="text-sm text-foreground/60">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
