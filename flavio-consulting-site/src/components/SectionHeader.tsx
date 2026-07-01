import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  number: string;
  label: string;
  title: ReactNode;
  desc?: string;
};

/**
 * Editorial section opener: heavy top rule, index number left, small caps
 * label right, then a large left aligned display title.
 */
export default function SectionHeader({ number, label, title, desc }: Props) {
  return (
    <Reveal>
      <div className="flex items-baseline justify-between border-t-2 border-ink pt-4">
        <span className="font-display text-sm font-semibold text-burnt">
          {number}
        </span>
        <span className="label">{label}</span>
      </div>
      <div className="mt-10 max-w-3xl">
        <h2 className="font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-ink sm:text-5xl">
          {title}
        </h2>
        {desc && (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {desc}
          </p>
        )}
      </div>
    </Reveal>
  );
}
