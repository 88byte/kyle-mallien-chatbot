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
    org: "Current engagement",
    role: "Technology, Experience, Sales, and Operations · Present",
    title: "Executive leadership for a national brand",
    desc: "For a fast growing brand in personal development, I run technology, customer experience, inside sales, and operations as one connected system. AI assistants that capture and qualify leads, automation across the marketing and sales stack, and the operating rhythm that turns a growing audience into revenue.",
  },
  {
    org: "Tin Drum",
    role: "Head of Experience",
    title: "Operations that repeat flawlessly at scale",
    desc: "Designed the systems, processes, and customer journey that let a complex, device heavy product run perfectly in city after city worldwide. Refining the flow raised throughput and revenue per session.",
  },
  {
    org: "Talespin",
    role: "VP of Experience",
    title: "A customer experience engine for 300,000+ users",
    desc: "Built the onboarding, enablement, and customer success operation behind hundreds of enterprise customers. Seventy five percent retention and programs behind multimillion dollar recurring revenue.",
  },
  {
    org: "Magic Leap",
    role: "Experience, Systems, and Solutions",
    title: "Turning frontier technology into business value",
    desc: "Translated a brand new platform into real deployments for Fortune 500 partners. Built customer programs, executive briefing experiences, and solutions that supported partnerships valued at over 500 million dollars.",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          number="02"
          label="Selected work"
          title={
            <>
              The same skills,{" "}
              <span className="text-burnt">proven at scale</span>
            </>
          }
          desc="Everything I offer here, I have already run at the highest level. The scale was different. The problems were yours."
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
