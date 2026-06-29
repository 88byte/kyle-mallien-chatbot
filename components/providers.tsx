"use client";
import { useEffect } from "react";
import { MotionConfig } from "motion/react";

/**
 * - Respects prefers-reduced-motion across all Framer Motion components.
 * - Forces the page to open at the top on every load (disables the browser's
 *   scroll-position restoration on reload / reopen).
 */
export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Jump to top on initial load (after layout settles).
    window.scrollTo(0, 0);
    const id = window.requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
