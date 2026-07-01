import { ArrowRight } from "lucide-react";

/** Mobile only affordance shown above horizontal snap rails. */
export default function SwipeHint() {
  return (
    <div className="mt-8 flex items-center sm:hidden" aria-hidden="true">
      <span className="label">Swipe</span>
      <span className="mx-4 h-px flex-1 bg-ink/20" />
      <ArrowRight size={14} className="text-burnt" />
    </div>
  );
}
