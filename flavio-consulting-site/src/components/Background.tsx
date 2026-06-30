/**
 * Quiet, warm page backdrop. A flat cream base with a faint dotted texture
 * and a soft top highlight. No gradients, no animated color blobs.
 */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-cream" />
      <div className="dotgrid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_30%,transparent_85%)]" />
    </div>
  );
}
