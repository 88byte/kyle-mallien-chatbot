import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Mobile only floating action bar. Slides in once the visitor scrolls past
 * the hero and slides away while the contact section is on screen.
 */
export default function MobileCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 550);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.querySelector("#contact");
    let observer: IntersectionObserver | undefined;
    if (contact) {
      observer = new IntersectionObserver(
        ([entry]) => setContactVisible(entry.isIntersecting),
        { threshold: 0.05 }
      );
      observer.observe(contact);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = scrolled && !contactVisible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 z-40 flex items-center justify-between rounded-full bg-ink py-3 pl-6 pr-3 text-cream shadow-[0_18px_40px_-12px_rgba(25,21,17,0.55)] sm:hidden"
          style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <span className="text-sm font-semibold">
            Book a free strategy call
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-burnt">
            <ArrowRight size={16} />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
