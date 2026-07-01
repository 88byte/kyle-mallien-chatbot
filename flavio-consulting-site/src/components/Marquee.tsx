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
    <section className="relative border-y border-line bg-paper py-7">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
          {row.map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-4 whitespace-nowrap font-display text-lg font-medium text-ink-soft"
            >
              {c}
              <span className="h-1.5 w-1.5 rounded-full bg-burnt" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
