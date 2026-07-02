const links = [
  { label: "How I help", href: "#services" },
  { label: "What I build", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink pb-10 pt-16 text-cream">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <p className="max-w-xs font-display text-xl font-medium leading-snug">
            Work smarter. Reduce inefficiencies. Scale faster.
          </p>
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-cream/60 transition-colors hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <a
          href="#top"
          aria-label="Back to top"
          className="group mt-14 block select-none"
        >
          <svg
            viewBox="0 0 1200 132"
            className="w-full"
            role="img"
            aria-hidden="true"
          >
            <text
              x="0"
              y="112"
              textLength="1200"
              lengthAdjust="spacingAndGlyphs"
              className="fill-cream font-display transition-colors duration-300 group-hover:fill-burnt"
              style={{ fontSize: 130, fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Flavio DeOliveira
            </text>
          </svg>
        </a>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Flavio DeOliveira Consulting. All rights reserved.</p>
          <p>flaviodeoliveira.com</p>
        </div>
      </div>
    </footer>
  );
}
