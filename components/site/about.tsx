import { CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/site";
import { Reveal } from "./reveal";

const POINTS = [
  "Mentored 250+ students into business ownership",
  "Guided students to $100M+ in real acquisitions",
  "Transparent mentorship that shares the wins and the vulnerabilities",
  "Recognized by INC 5000 and Top 40 Under 40",
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-28">
      <div className="container-tight grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gold-gradient opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BRAND.aboutPhoto}
                alt="Kyle Mallien"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl border border-gold-500/30 bg-background/90 px-6 py-4 shadow-xl backdrop-blur sm:-right-6">
              <div className="font-serif text-3xl font-semibold text-gradient-gold">
                #1465
              </div>
              <div className="text-xs text-foreground/55">
                INC 5000 fastest-growing
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            Meet Kyle Mallien
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            An investor who built the path he now teaches.
          </h2>
          <div className="mt-6 space-y-4 text-foreground/70">
            <p>
              Kyle Mallien is an author, investor, business strategist, and
              mentor who turned business acquisition into a force multiplier for
              wealth, then opened the playbook to everyone else. He has mentored
              over 250 students into ownership, and his method has guided them to
              more than $100M in acquisitions.
            </p>
            <p>
              His philosophy is simple and transparent. They don&apos;t want you
              to know acquisition is even an option. Don&apos;t gamble years
              starting something new when you can buy a business that already
              works, already pays, and is ready to scale. Then build a legacy for
              your family, not your current boss.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-gold-400"
                />
                <span className="text-sm text-foreground/75">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
