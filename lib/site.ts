/**
 * Central content + brand data for the Kyle Mallien site.
 * Copy and figures are sourced from kylemallien.com and public profiles.
 */

export const BRAND = {
  name: "Kyle Mallien",
  tagline: "Acquisitionpreneur",
  // Logo + portrait hosted on the existing brand CDN.
  logo:
    "https://kylemallien.com/wp-content/uploads/2023/12/Stacked-Primary-Logo-without-Subline-Full-Gradient-on-Black.png",
  portrait:
    "https://kylemallien.com/wp-content/uploads/2024/01/business-strategist-kyle-mobile.png",
  // Primary action — point existing traffic to the application / call funnel.
  applyUrl: "https://kylemallien.com/work-with-me/",
  callUrl: "https://kylemallien.com/work-with-me/",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#results" },
  { label: "Stories", href: "#testimonials" },
];

export const HERO_STATS = [
  { value: "$170M+", label: "In student-led acquisitions" },
  { value: "500+", label: "Owners mentored" },
  { value: "20+", label: "Companies under management" },
  { value: "$30M+", label: "Profit created for members" },
];

export const ACCOLADES = [
  "INC 5000 — #1465 Fastest-Growing Company in the U.S.",
  "San Diego Business Journal — Top 40 Under 40 Business Leaders",
  "$100M+ Assets Under Management",
  "Investor · Author · Fund Manager · Buy-Side M&A",
];

export const PILLARS = [
  {
    step: "01",
    title: "Find",
    body: "Source off-market, cash-flowing businesses worth owning — with proven deal-flow systems, broker directories, and 2,000 monthly direct-mail campaigns done for you.",
  },
  {
    step: "02",
    title: "Underwrite",
    body: "Know exactly what a business is worth and how to structure the deal. In-house legal counsel, a fractional CFO, and $50K of battle-tested templates remove the guesswork.",
  },
  {
    step: "03",
    title: "Elevate",
    body: "Raise the capital, close with SBA and private investors, then install the operators and systems that scale cash flow without scaling your hours.",
  },
  {
    step: "04",
    title: "Legacy",
    body: "Stack acquisitions into a portfolio that compounds — building generational wealth for you and your family, not just another job you own.",
  },
];

export const PROGRAMS = [
  {
    name: "The Masterclass",
    badge: "Do It Yourself",
    price: "Self-paced",
    tagline: "The complete acquisition playbook, on your schedule.",
    description:
      "A self-paced training built from the exact $8,000 framework Kyle's members use to find, value, and close their first deal — learn the art of buying businesses from the ground up.",
    features: [
      "The full Find · Underwrite · Elevate · Legacy curriculum",
      "Deal sourcing, valuation & negotiation frameworks",
      "Underwriting calculators and offer templates",
      "Lifetime access — learn at your own pace",
    ],
    cta: "Start the Masterclass",
    featured: false,
  },
  {
    name: "Elite Wealth Club",
    badge: "Do It With Me",
    price: "By application",
    tagline: "Hands-on mentorship until the deal is closed.",
    description:
      "A 90-day intensive where Kyle, Dana Cornell, and a full deal team work alongside you — sourcing, underwriting, and closing real acquisitions with you, not just teaching you how.",
    features: [
      "Access to Kyle's private Inner Circle community",
      "12 calls with Kyle + daily expert coaching sessions",
      "$50K in legal, capital-raising & operating templates",
      "In-house legal counsel + fractional CFO on call",
      "SBA broker, investor network & Deal-of-the-Day flow",
      "4 live events a year, including the awards ceremony",
    ],
    cta: "Apply to Join",
    featured: true,
  },
];

export const SUCCESS_HIGHLIGHTS = [
  {
    metric: "480%",
    label: "Cash-on-cash return",
    body: "A Phoenix attendee bought a business needing just 1–4 hours of work a week — and is up 480% cash-on-cash this year.",
  },
  {
    metric: "$800K/mo",
    label: "Gross revenue in 12 months",
    body: "A member who started $40K in credit-card debt now runs two companies doing $800K/month in gross revenue.",
  },
  {
    metric: "20x",
    label: "Projected return on first deal",
    body: "Eric is on track to make 20x his investment on his very first acquisition — in year one — with the rest setting him up for life.",
  },
];

export const FINAL_CTA = {
  eyebrow: "Your first acquisition starts here",
  heading: "Stop building from scratch. Start buying what already works.",
  body: "Every week you wait is cash flow you don't own. Join the community turning ordinary operators into business owners — and build wealth the way the wealthy actually do it.",
};
