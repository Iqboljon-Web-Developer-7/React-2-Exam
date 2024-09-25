/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // Fonts
      fontFamily: {
        Inter: `"Inter", sans-serif`,
        Hammer: `"Hammersmith One", sans-serif`,
        Readex: `"Readex Pro", sans-serif`,
      },

      // Animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, inset: "0 -120% 0 0" },
          "100%": { opacity: 1, inset: "0 0 0 0" },
        },
        fadeOut: {
          "0%": { opacity: 1, inset: "0 0 0 0" },
          "50%": { opacity: 0, inset: "0 -50% 0 0", display: "none" },
          "100%": { opacity: 0, inset: "0 -120% 0 0", display: "none" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out forwards",
        fadeOut: "fadeOut 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
