import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  number: string;
  label: string;
  title: ReactNode;
  desc?: string;
  align?: "center" | "left";
};

/**
 * Editorial section opener: a heavy top rule with an index number on the
 * left and a small caps label on the right, then the display title below.
 */
export default function SectionHeader({
  number,
  label,
  title,
  desc,
  align = "center",
}: Props) {
  return (
    <Reveal>
      <div className="flex items-baseline justify-between border-t-2 border-ink pt-4">
        <span className="font-display text-base font-semibold text-burnt">
          {number}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-mute">
          {label}
        </span>
      </div>
      <div
        className={
          align === "center"
            ? "mx-auto mt-10 max-w-2xl text-center"
            : "mt-10 max-w-2xl"
        }
      >
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
        {desc && <p className="mt-4 text-ink-soft">{desc}</p>}
      </div>
    </Reveal>
  );
}
