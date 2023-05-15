/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5996",
        secondary: "#6C8AB5",
        "js-primary": "#00D1DB",
      },
      fontFamily: {
        handwritten: ['"Dancing Script"', "cursive"],
        gotham: ['"Gotham Ultra"', "sans-serif"],
        hugme: ["Hugme", "serif"],
      },
    },
  },
  plugins: [],
};
