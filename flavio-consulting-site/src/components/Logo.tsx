type Props = { className?: string };

/** FD monogram. Solid burnt tile, sharp corners, cream letterforms. */
export default function Logo({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect width="100" height="100" fill="#9A3412" />
      <g fill="#F7F3EC" transform="translate(-5,-1)">
        <rect x="24" y="29" width="10" height="44" />
        <rect x="34" y="29" width="20" height="10" />
        <rect x="34" y="46" width="15" height="10" />
        <path
          fillRule="evenodd"
          d="M56 29 H70 A16 16 0 0 1 86 45 V57 A16 16 0 0 1 70 73 H56 Z
             M64 38 H70 A8 8 0 0 1 78 46 V56 A8 8 0 0 1 70 64 H64 Z"
        />
      </g>
    </svg>
  );
}
