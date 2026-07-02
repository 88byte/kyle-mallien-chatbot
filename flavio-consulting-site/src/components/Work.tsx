import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, stagger } from "../lib/motion";

type Project = {
  org: string;
  role: string;
  title: string;
  desc: string;
};

const projects: Project[] = [
  {
    org: "Tin Drum",
    role: "Head of Experience",
    title: "The world's first touring XR concert",
    desc: "Directed strategy and operations for XR performances and art installations across the globe. Over 400 devices, more than 10 shows a day, and audiences moved seamlessly through every venue, city after city.",
  },
  {
    org: "Magic Leap",
    role: "Experience, Systems, and Solutions",
    title: "Spatial computing at Olympic scale",
    desc: "Directed large scale XR experiences for the Olympics, delivered the platform at more than 100 major events and executive showings worldwide, and supported strategic partnerships valued at over 500 million dollars.",
  },
  {
    org: "Talespin",
    role: "VP of Experience",
    title: "Immersive learning for 300,000+ users",
    desc: "Built the enablement engine behind hundreds of enterprise customers across VR, AR, desktop, and mobile. Seventy five percent retention and programs behind multimillion dollar recurring revenue.",
  },
  {
    org: "Private client",
    role: "Systems and AI Partner, Present",
    title: "The engine behind a touring speaker brand",
    desc: "For a fast growing brand in live events and personal development, I build and run the machinery behind the scenes. AI assistants that capture and qualify leads, automation across the marketing and sales stack, and the operations that keep a national audience engaged.",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          number="01"
          label="Selected work"
          title={
            <>
              Experiences most people{" "}
              <span className="text-burnt">only read about</span>
            </>
          }
          desc="Customer experience, location based experiences, and live operations at global scale. A few highlights."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 border-b border-ink/15 max-sm:mt-10"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="grid gap-3 border-t border-ink/15 py-9 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.65fr)] sm:gap-10"
            >
              <div>
                <p className="font-display text-lg font-semibold text-ink">
                  {p.org}
                </p>
                <p className="label mt-1.5 !tracking-[0.18em]">{p.role}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
