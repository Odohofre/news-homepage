/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "soft-orange": "#e9ab53",
          "soft-red": "#f15e50",
        },
        "off-white": "#fffdfa",
        "neutral-blue": {
          100: "#c5c6ce",
          300: "#5d5f79",
          700: "#00001a",
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"], // font weights 400, 700, 800
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
