/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Helvetica Neue",
          "Roboto",
          "ui-sans-serif",
          "system-ui",
        ],
        serif: [
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },

      colors: {
        haldiCream: "#FAF3E6",
        haldiRed: "#C1272D",
        haldiGold: "#D6AF72",
      },

      letterSpacing: {
        "wide-sm": "0.035em",   // For nav links (Haldiram style)
        "wide-md": "0.06em",
      },

      fontWeight: {
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        marquee: "marquee 14s linear infinite",
      },
    },
  },
  plugins: [],
};
