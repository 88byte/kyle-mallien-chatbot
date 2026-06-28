import { TrendingUp, Receipt } from "lucide-react";
import { PROBLEMS } from "@/lib/site";
import { Reveal } from "./reveal";

const ICONS = [TrendingUp, Receipt];

export function Problems() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] py-16 sm:py-28">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            The real question
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            Everyone has either an income problem or a tax problem
          </h2>
          <p className="mt-5 text-foreground/65">
            Figure out which one is yours — because acquisition is the answer to
            both.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {PROBLEMS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-white/10 bg-card/50 p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
