import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Reveal from "./Reveal";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years across SaaS, AI, and hardware" },
  { value: 40, suffix: "%", label: "Typical reduction in manual busywork" },
  { value: 3, suffix: "x", label: "Faster delivery after workflow redesign" },
  { value: 2023, suffix: "", label: "Founded, independent and senior led" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {Math.round(display)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="results" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-paper shadow-soft lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border-line p-8 text-center [&:not(:nth-child(2n))]:border-r lg:[&:not(:last-child)]:border-r [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
              >
                <div className="font-display text-5xl font-semibold text-burnt">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mx-auto mt-3 max-w-[14rem] text-sm text-ink-soft">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
