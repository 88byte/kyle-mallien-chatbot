import { useState } from "react";

type Props = { className?: string; compact?: boolean };

/**
 * Flavio's portrait. Loads /portrait.jpg from /public. If the file is not
 * present yet, it falls back to a branded ink panel so the layout never
 * looks broken. Drop a real photo at public/portrait.jpg to use it.
 * `compact` fits the fallback into small tiles.
 */
export default function Portrait({ className = "", compact = false }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-ink ${className}`}
        aria-label="Flavio DeOliveira"
      >
        <div className="text-center">
          <div
            className={`font-display font-semibold text-cream ${
              compact ? "text-3xl" : "text-7xl"
            }`}
          >
            FD
          </div>
          {!compact && (
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cream/60">
              Founder &amp; Principal
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src="/portrait.jpg"
      alt="Flavio DeOliveira, Founder and Principal"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
      loading="eager"
    />
  );
}
