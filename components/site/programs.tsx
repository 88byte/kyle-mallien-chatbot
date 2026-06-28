import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, PROGRAMS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionEyebrow } from "./section-eyebrow";

export function Programs() {
  return (
    <section id="programs" className="relative py-16 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold-600/5 blur-[150px]" />
      <div className="container-tight relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow center>Ways to work together</SectionEyebrow>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-5xl">
            Choose your path to ownership
          </h2>
          <p className="mt-5 text-foreground/65">
            Learn the system yourself, or have Kyle and his deal team in the
            room with you until the acquisition closes.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl items-start gap-6 lg:grid-cols-2">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8 sm:p-10",
                  program.featured
                    ? "border-gold-500/50 bg-gradient-to-b from-gold-500/[0.08] to-card/40 shadow-2xl shadow-gold-900/30"
                    : "border-white/10 bg-card/40",
                )}
              >
                {program.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-gradient px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </div>
                )}

                <div className="flex items-center gap-2">
                  {program.featured && (
                    <Sparkles size={16} className="text-gold-400" />
                  )}
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
                    {program.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-3xl font-semibold">
                  {program.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/55">
                  {program.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-semibold text-gradient-gold">
                    {program.price}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                  {program.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-white/5 pt-7">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                        <Check size={12} className="text-gold-300" />
                      </span>
                      <span className="text-sm text-foreground/75">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <Button
                    asChild
                    size="lg"
                    variant={program.featured ? "default" : "outline"}
                    className="w-full"
                  >
                    <a href={BRAND.applyUrl}>{program.cta}</a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
