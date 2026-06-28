"use client";
import React from "react";
import { motion } from "motion/react";
import { testimonials } from "@/lib/testimonials";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="w-full max-w-xs rounded-3xl border border-white/10 bg-card/60 p-8 shadow-xl shadow-black/40 backdrop-blur"
                  key={i}
                >
                  <div className="text-sm leading-relaxed text-foreground/85">
                    &ldquo;{text}&rdquo;
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-500/30"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium leading-5 tracking-tight">
                        {name}
                      </div>
                      <div className="text-sm leading-5 tracking-tight text-gold-300/90">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
