/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6EF",
        paper: "#F2E9DB",
        sand: "#EBDFCC",
        ink: {
          DEFAULT: "#211C16",
          soft: "#5A5046",
          mute: "#8A7E70",
        },
        burnt: {
          DEFAULT: "#9A3412",
          dark: "#7C2D12",
          deep: "#5E2410",
          clay: "#BE5A2E",
          tint: "#F4E6D8",
        },
        line: "#E4D8C5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(33,28,22,0.04), 0 16px 36px -22px rgba(33,28,22,0.22)",
        lift: "0 30px 60px -30px rgba(33,28,22,0.38)",
        frame: "0 40px 80px -40px rgba(94,36,16,0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
