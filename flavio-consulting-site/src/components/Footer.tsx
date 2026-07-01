import Logo from "./Logo";

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
    <footer className="relative border-t border-line bg-paper py-12">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-display text-base font-semibold text-ink">
              Flavio DeOliveira
              <span className="ml-1 font-sans text-sm font-normal text-ink-mute">
                Consulting
              </span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-soft transition-colors hover:text-burnt"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-mute sm:flex-row">
          <p>
            © {new Date().getFullYear()} Flavio DeOliveira Consulting. All rights
            reserved.
          </p>
          <p>Work smarter. Reduce inefficiencies. Scale faster.</p>
        </div>
      </div>
    </footer>
  );
}
