export function Accolades() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015] py-8">
      <div className="container-tight">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.24em] text-foreground/40">
          Recognized & Awarded
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="/img/inc5000.png"
            alt="INC 5000 — #1465 Fastest-Growing Company in the U.S."
            className="h-14 w-auto opacity-80 transition-opacity hover:opacity-100"
          />
          <img
            src="/img/top40.png"
            alt="San Diego Business Journal — Top 40 Under 40"
            className="h-16 w-auto opacity-80 transition-opacity hover:opacity-100"
          />
          {/* eslint-enable @next/next/no-img-element */}
          <div className="hidden h-12 w-px bg-white/10 sm:block" />
          <div className="text-center sm:text-left">
            <div className="font-serif text-2xl tracking-wide text-gradient-gold">
              $100M+ AUM
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-foreground/45">
              50 deals reviewed weekly · 2,500 a year
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
