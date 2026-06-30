import { motion } from "framer-motion";

/** Fixed, full-page ambient background: gradient orbs, grid, and noise. */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(99,102,241,0.18),transparent_60%)]" />

      {/* Animated orbs */}
      <motion.div
        className="absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-brand-cyan/20 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-violet/20 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-indigo/20 blur-[130px]"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid + noise */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-soft-light" />
    </div>
  );
}
