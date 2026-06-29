"use client";
import { motion } from "motion/react";
import {
  Clock,
  TrendingUp,
  MapPin,
  Rocket,
  Users,
  Heart,
  ShieldCheck,
  Award,
} from "lucide-react";
import {
  TestimonialStack,
  Testimonial,
} from "@/components/ui/glass-testimonial-swiper";
import { SectionEyebrow } from "./section-eyebrow";

const GOLD = "linear-gradient(135deg, #DDCFB4, #887052)";

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    initials: "TJ",
    name: "Tyler Joas",
    role: "Phoenix event attendee",
    quote:
      "I attended your event in Phoenix this year and have since bought a company that I work 1-4 hours per week on and have done 480% Cash on Cash return so far this year.",
    tags: [{ text: "480% Cash-on-Cash", type: "featured" }],
    stats: [
      { icon: Clock, text: "1-4 hrs / week" },
      { icon: TrendingUp, text: "480% ROI" },
    ],
    avatarGradient: GOLD,
  },
  {
    id: 2,
    initials: "MT",
    name: "Melanie Townsend",
    role: "Acquisition entrepreneur",
    quote:
      "We are very excited to share the news! Kodi and I finalized our first acquisition in September, moved to South Florida and are preparing for even BIGGER THINGS!!",
    tags: [{ text: "First acquisition closed", type: "featured" }],
    stats: [
      { icon: Rocket, text: "Deal #1 closed" },
      { icon: MapPin, text: "South Florida" },
    ],
    avatarGradient: GOLD,
  },
  {
    id: 3,
    initials: "TD",
    name: "Tyce Duncan",
    role: "Inner Circle member",
    quote:
      "I was introduced to this opportunity because of a family friend who is a retiring business owner. (He owns 2 pawn shops in my area) Since I got to see a retiring baby boomer first hand, my belief in this opportunity is SOLID! I'm super excited to be apart of this community and want to add value in any place I can!",
    tags: [{ text: "Belief is solid", type: "featured" }],
    stats: [{ icon: Users, text: "New member" }],
    avatarGradient: GOLD,
  },
  {
    id: 4,
    initials: "LM",
    name: "Lynn Richards Martin",
    role: "Inner Circle member",
    quote:
      "I've never been part of a coaching group where we were encouraged to share our vulnerabilities. I'm glad Kyle shared his with us, because it makes you more real and likable, rather than thinking what that person has or does is unattainable to the average person.",
    tags: [{ text: "Real relationships", type: "featured" }],
    stats: [{ icon: Heart, text: "Community" }],
    avatarGradient: GOLD,
  },
  {
    id: 5,
    initials: "TM",
    name: "Tommy Mello",
    role: "Founder & investor",
    quote:
      "Kyle is the only person who has my stamp of approval in the acquisition space.",
    tags: [{ text: "Stamp of approval", type: "featured" }],
    stats: [{ icon: ShieldCheck, text: "Industry peer" }],
    avatarGradient: GOLD,
  },
  {
    id: 6,
    initials: "GD",
    name: "Gallant Dill",
    role: "Entrepreneur",
    quote:
      "Kyle was one of the first entrepreneurs who showed me a true path to the top, and it's been an honor to sell him such a powerful brand that I know he'll take even further.",
    tags: [{ text: "A true path to the top", type: "featured" }],
    stats: [{ icon: Award, text: "Sold his brand to Kyle" }],
    avatarGradient: GOLD,
  },
  {
    id: 7,
    initials: "AS",
    name: "Alex Sharf",
    role: "Acquisition entrepreneur",
    quote:
      "Kyle showed me early on how to take a business from $100,000 a month to $1,000,000.",
    tags: [{ text: "$100K → $1M / mo", type: "featured" }],
    stats: [{ icon: TrendingUp, text: "10x growth" }],
    avatarGradient: GOLD,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(8,8,8,0.96), rgba(10,14,18,0.92), rgba(8,8,8,0.97)), url(/img/feedback-bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto mb-12 flex max-w-[640px] flex-col items-center justify-center text-center"
        >
          <SectionEyebrow center>Member Stories</SectionEyebrow>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            Real people. Real deals. Real results.
          </h2>
          <p className="mt-5 text-foreground/65">
            Students have done over $100 million in deals under Kyle&apos;s
            mentorship. Drag the cards to hear from them.
          </p>
        </motion.div>

        <TestimonialStack testimonials={TESTIMONIALS} />
      </div>
    </section>
  );
}
