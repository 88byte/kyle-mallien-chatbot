import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand palette — sampled from kylemallien.com
        // bronze #887052 · champagne #DDCFB4 · cream #ECEBE9
        gold: {
          50: "#F6F3ED",
          100: "#ECEBE9",
          200: "#DDCFB4",
          300: "#CBB892",
          400: "#B49C71",
          500: "#887052",
          600: "#6E5940",
          700: "#534332",
          800: "#3A2F23",
          900: "#221C15",
        },
        // Secondary accent — slate blue #2A4759
        slate: {
          DEFAULT: "#2A4759",
          deep: "#1E333F",
        },
      },
      fontFamily: {
        // Gill Sans = brand body/headings (legible). Ailerons = display accent only.
        sans: ["var(--font-sans)", "Gill Sans", "Helvetica Neue", "sans-serif"],
        serif: ["var(--font-sans)", "Gill Sans", "Helvetica Neue", "sans-serif"],
        display: ["Ailerons", "var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #DDCFB4 0%, #B49C71 40%, #887052 100%)",
        "gold-text":
          "linear-gradient(180deg, #ECEBE9 0%, #DDCFB4 45%, #B49C71 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
