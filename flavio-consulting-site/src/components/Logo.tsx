type Props = { className?: string };

/** Gradient "F" monogram mark. */
export default function Logo({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="0.5" stopColor="#6366F1" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#0A0C12" />
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="15"
        fill="none"
        stroke="url(#logo-g)"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <path d="M20 44V20h22v6H27v5h12v6H27v7z" fill="url(#logo-g)" />
    </svg>
  );
}
