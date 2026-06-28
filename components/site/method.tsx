import { PILLARS } from "@/lib/site";
import { Reveal } from "./reveal";

export function Method() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            The Method
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            Four steps from first deal to lasting legacy
          </h2>
          <p className="mt-5 text-foreground/65">
            The same framework Kyle&apos;s members use to find, finance, and
            scale acquisitions — sequenced so nothing gets skipped.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.step} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-white/10 bg-card/50 p-7 transition-colors hover:border-gold-500/40">
                <div className="font-serif text-4xl font-semibold text-gold-600/60 transition-colors group-hover:text-gradient-gold">
                  {pillar.step}
                </div>
                <h3 className="mt-4 font-serif text-2xl font-medium">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
