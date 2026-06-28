import { SUCCESS_HIGHLIGHTS } from "@/lib/site";
import { Reveal } from "./reveal";

export function Results() {
  return (
    <section id="results" className="relative py-24 sm:py-28">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            Real outcomes
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            The numbers members are putting up
          </h2>
          <p className="mt-5 text-foreground/65">
            Not theory — deals closed by everyday people who decided to own
            instead of start over.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SUCCESS_HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-card/60 to-card/20 p-8">
                <div className="font-display text-5xl text-gradient-gold">
                  {item.metric}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-gold-300/80">
                  {item.label}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-foreground/65">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
