import { Quote } from "lucide-react";
import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl glass p-10 text-center shadow-card sm:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]" />
            <Quote
              size={40}
              className="mx-auto text-brand-cyan/70"
              aria-hidden="true"
            />
            <p className="relative mt-6 font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
              "Flavio doesn't just point at problems — he untangles them. Within
              weeks we'd cut hours of manual work a day and finally had systems we
              could trust. The kind of partner you wish you'd called sooner."
            </p>
            <div className="relative mt-7 flex items-center justify-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-violet font-display font-bold text-white">
                O
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">
                  Operations Lead
                </p>
                <p className="text-xs text-slate-400">Growth-stage SaaS company</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
