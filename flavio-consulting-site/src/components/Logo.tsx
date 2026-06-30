type Props = { className?: string };

/**
 * FD monogram. Solid burnt-orange tile with a cream F and D sharing a
 * tight, confident kerning. No gradients.
 */
export default function Logo({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="3" y="3" width="94" height="94" rx="26" fill="#9A3412" />
      <g fill="#FAF6EF" transform="translate(-5,-1)">
        {/* F */}
        <rect x="24" y="29" width="10" height="44" rx="1.5" />
        <rect x="34" y="29" width="20" height="10" rx="1.5" />
        <rect x="34" y="46" width="15" height="10" rx="1.5" />
        {/* D */}
        <path
          fillRule="evenodd"
          d="M56 29 H70 A16 16 0 0 1 86 45 V57 A16 16 0 0 1 70 73 H56 Z
             M64 38 H70 A8 8 0 0 1 78 46 V56 A8 8 0 0 1 70 64 H64 Z"
        />
      </g>
    </svg>
  );
}
