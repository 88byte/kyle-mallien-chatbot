/**
 * Central content + brand data for the Kyle Mallien site.
 * Figures kept conservative and verifiable; placeholders flagged for the client.
 */

export const BRAND = {
  name: "Kyle Mallien",
  tagline: "Author · Investor · Business Strategist · Mentor",
  logo: "/img/logo-stacked.webp",
  logoWide: "/img/logo.webp",
  portrait: "/img/kyle-mallien.webp",
  aboutPhoto: "/img/kyle-about.webp",
  heroPhoto: "/img/hero-kyle.webp",
  vimeoId: "772304279",
  applyUrl: "https://kylemallien.com/work-with-me/",
  callUrl: "https://kylemallien.com/work-with-me/",
  successUrl: "https://kylemallien.com/success-stories/",
  giftUrl: "https://kylemallien.com/work-with-me/",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "The F.U.E.L Process", href: "#fuel" },
  { label: "Work With Me", href: "#programs" },
  { label: "Success Stories", href: "#testimonials" },
];

export const HERO_STATS = [
  { value: "250+", label: "Students mentored" },
  { value: "$100M+", label: "In student deals" },
  { value: "#1465", label: "INC 5000 in the U.S." },
  { value: "Top 40", label: "Under 40 leaders" },
];

export const PROBLEMS = [
  {
    title: "The Income Problem",
    body: "You're great at your job. Doctor, lawyer, sales, accounting. But you either hate the structure or feel trapped by it. One acquisition can replace your income, and the next can build wealth your boss will never hand you.",
  },
  {
    title: "The Tax Problem",
    body: "You already make great money, but your wealth manager has you in a 60/40 program you don't fully understand, netting about 4% after fees. Buying the right tax advantaged deals lets you use the IRS code to your advantage and keep far more of what you earn.",
  },
];

// The F.U.E.L Process (structure from the site)
export const PILLARS = [
  {
    step: "F",
    title: "Find",
    subtitle: "Identification",
    body: "Find the deal based on your core skill set. The businesses where your existing expertise is the unfair advantage.",
  },
  {
    step: "U",
    title: "Underwrite",
    subtitle: "Financial Modeling",
    body: "Learn exactly how to pay for the deal. The financial modeling and structures that get acquisitions funded.",
  },
  {
    step: "E",
    title: "Elevate",
    subtitle: "Growth & Professionalization",
    body: "Know how to manage and grow the business once it's yours. Professionalize operations and scale the cash flow.",
  },
  {
    step: "L",
    title: "Legacy",
    subtitle: "Generational Wealth",
    body: "Stack it into a legacy. Build generational wealth for you and your family, not your current boss.",
  },
];

export const PROGRAMS = [
  {
    name: "The Masterclass",
    badge: "Do It Yourself",
    price: "Self-paced",
    tagline: "The complete acquisition playbook, on your schedule.",
    description:
      "A self-paced, DIY training that walks you through the entire F.U.E.L Process. Find, underwrite, elevate, and build a legacy, with the comprehensive materials to close your first deal independently.",
    features: [
      "The full F.U.E.L Process curriculum",
      "Deal sourcing, underwriting & valuation frameworks",
      "Financing structures and offer templates",
      "Learn at your own pace, on demand",
    ],
    cta: "Get Access Now",
    featured: false,
  },
  {
    name: "Elite Wealth Club",
    badge: "Do It With Me",
    price: "By application",
    tagline: "Hands-on mentorship until the deal is closed.",
    description:
      "A do-it-with-me intensive where Kyle and his team work alongside you. Sourcing, underwriting, and closing real acquisitions with you, with the support, network, and accountability to get you across the finish line.",
    features: [
      "Direct mentorship from Kyle and his team",
      "Private Inner Circle community access",
      "Legal counsel, capital-raising & operating support",
      "Investor network and Deal-of-the-Day flow",
      "Live events throughout the year",
    ],
    cta: "Explore Ways to Work With Me",
    featured: true,
  },
];

// Grounded in kylemallien.com success-stories testimonials
export const SUCCESS_HIGHLIGHTS = [
  {
    metric: "$1M / mo",
    label: "Scaled from $100K a month",
    body: "“Kyle showed me early on how to take a business from $100,000 a month to $1,000,000.”",
  },
  {
    metric: "6 figures",
    label: "Net income from one deal",
    body: "Students acquire cash-flowing businesses that generate six figures in net income, without needing to be a rocket scientist.",
  },
  {
    metric: "$100M+",
    label: "In total student deals",
    body: "Students have done over $100 million in deals under Kyle's mentorship. Real businesses, bought and scaled.",
  },
];

export const FREE_GIFT = {
  eyebrow: "Free Gift",
  heading:
    "Learn what the wealthy are doing to pay less tax and buy more cash flow",
  body: "In these uncertain times, the people building real wealth aren't guessing. They're acquiring. Get the free breakdown of how tax-advantaged acquisitions actually work.",
  cta: "Get the Free Gift",
};

export const FINAL_CTA = {
  eyebrow: "Your first deal could replace your income",
  heading: "Are you ready to be my next success story?",
  body: "Let me put you on my back and get you across the finish line. First, replace your income. Second, build generational wealth for you and your family, not your current boss.",
};
