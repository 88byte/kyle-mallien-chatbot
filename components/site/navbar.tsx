"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="container-tight flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.logo}
            alt="Kyle Mallien"
            className="h-11 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={BRAND.applyUrl}>Apply Now</a>
          </Button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-background/95 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 text-base font-medium text-foreground/80"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href={BRAND.applyUrl}>Apply Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
