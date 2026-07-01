const capabilities = [
  "Custom Processes",
  "Workflow Automation",
  "AI Integration",
  "Platform Integration",
  "CRM Setup",
  "Systems Simplification",
  "Department Building",
  "Customer Experience",
  "User Journey Design",
  "Operational Strategy",
];

export default function Marquee() {
  const row = [...capabilities, ...capabilities];
  return (
    <section className="relative overflow-hidden border-y border-ink/15 py-8">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused]">
          {row.map((c, i) => (
            <span
              key={i}
              className={`whitespace-nowrap font-display text-4xl font-semibold uppercase tracking-tight sm:text-5xl ${
                i % 2 === 0 ? "text-ink" : "text-stroke-burnt"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
