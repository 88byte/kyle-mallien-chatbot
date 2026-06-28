import { PILLARS } from "@/lib/site";
import { Reveal } from "./reveal";

export function Method() {
  return (
    <section
      id="fuel"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(8,8,8,0.97), rgba(10,9,8,0.9) 50%, rgba(8,8,8,0.98)), url(/img/fuel-bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            The Process
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            The F.U.E.L Process
          </h2>
          <p className="mt-5 text-foreground/65">
            The roadmap Kyle&apos;s students use to enter cash-flowing
            businesses — find it, pay for it, grow it, and turn it into a
            legacy.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.step} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-white/10 bg-card/50 p-7 transition-colors hover:border-gold-500/40">
                <div className="font-display flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-3xl text-gradient-gold">
                  {pillar.step}
                </div>
                <h3 className="mt-5 font-serif text-2xl font-medium">
                  {pillar.title}
                </h3>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold-300/70">
                  {pillar.subtitle}
                </p>
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
