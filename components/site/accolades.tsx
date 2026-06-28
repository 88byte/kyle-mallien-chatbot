import { ACCOLADES } from "@/lib/site";

export function Accolades() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015] py-6">
      <div className="container-tight">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
          {ACCOLADES.map((item) => (
            <span
              key={item}
              className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/45"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
