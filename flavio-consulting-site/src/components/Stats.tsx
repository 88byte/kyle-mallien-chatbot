import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years building systems for real businesses" },
  { value: 40, suffix: "%", label: "Less manual busywork after automation lands" },
  { value: 3, suffix: "x", label: "Faster delivery once the right systems are in" },
  { value: 100, suffix: "%", label: "Senior led. You work with me, start to finish" },
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
              <div className="font-display text-5xl font-medium tracking-tight text-burnt sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
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
