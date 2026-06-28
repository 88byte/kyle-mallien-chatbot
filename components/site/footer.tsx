import { BRAND, NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-14">
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BRAND.logo} alt="Kyle Mallien" className="h-12 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-foreground/55">
              Luxury business-acquisition coaching and mentorship. A community
              for people learning to build real wealth by buying and scaling
              cash-flowing businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300/70">
                Explore
              </h4>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/60 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300/70">
                Get started
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={BRAND.applyUrl}
                    className="text-sm text-foreground/60 transition-colors hover:text-gold-300"
                  >
                    Apply Now
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.callUrl}
                    className="text-sm text-foreground/60 transition-colors hover:text-gold-300"
                  >
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-foreground/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>Investor · Author · Fund Manager · Buy-Side M&A</p>
        </div>
      </div>
    </footer>
  );
}
