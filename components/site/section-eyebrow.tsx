/** Consistent, editorial section label: a short gold rule + uppercase text. */
export function SectionEyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <span className="h-px w-8 bg-gradient-to-r from-gold-500 to-gold-500/0" />
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
        {children}
      </span>
      {center && (
        <span className="h-px w-8 bg-gradient-to-l from-gold-500 to-gold-500/0" />
      )}
    </div>
  );
}
