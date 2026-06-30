import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Reveal from "./Reveal";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years across SaaS, AI & hardware" },
  { value: 40, suffix: "%", label: "Typical reduction in manual busywork" },
  { value: 3, suffix: "x", label: "Faster delivery after workflow redesign" },
  { value: 2023, suffix: "", label: "Founded — independent & senior-led" },
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

  const formatted = value >= 1000 ? Math.round(display).toString() : Math.round(display).toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="results" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass shadow-card lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative p-8 text-center"
              >
                <div className="font-display text-4xl font-bold text-white sm:text-5xl">
                  <span className="gradient-text">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                </div>
                <p className="mx-auto mt-3 max-w-[14rem] text-sm text-slate-400">
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
