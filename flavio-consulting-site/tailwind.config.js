/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        paper: "#EFE8DB",
        ink: {
          DEFAULT: "#191511",
          soft: "#4E463D",
          mute: "#8A7E70",
        },
        burnt: {
          DEFAULT: "#9A3412",
          dark: "#77290D",
          deep: "#571E0A",
        },
        line: "#DDD3C2",
      },
      fontFamily: {
        display: ["'Clash Display'", "system-ui", "sans-serif"],
        sans: ["Satoshi", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
