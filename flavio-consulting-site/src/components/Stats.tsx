import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

type Stat = { value: number; prefix?: string; suffix: string; label: string };

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years in emerging technology and operations" },
  { value: 300, suffix: "k+", label: "Users served by experience programs I built" },
  { value: 100, suffix: "+", label: "Live events and launches delivered worldwide" },
  { value: 500, prefix: "$", suffix: "M+", label: "In partnerships supported at Magic Leap" },
];

function Counter({ value, prefix = "", suffix }: { value: number; prefix?: string; suffix: string }) {
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
      {prefix}
      {Math.round(display)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="results" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="border-t-2 border-ink pt-5"
            >
              <div className="font-display text-5xl font-semibold tracking-tight text-burnt sm:text-6xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-ink-soft">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
