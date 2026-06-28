"use client";
import { MotionConfig } from "motion/react";

/**
 * Respects the user's prefers-reduced-motion setting across every
 * Framer Motion component (UI/UX Pro Max — Accessibility §1 reduced-motion).
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
