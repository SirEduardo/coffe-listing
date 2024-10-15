/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Black-modal": "#1B1D1F",
        "Back-color": "#111315",
        "Grey-selected": "#6F757C",
        "Green-prices": "#BEE3CC",
        "White-text": "#FEF7EE",
        "Orange-star": "#F6C768",
        "Red-sold": "#ED735D",
      },
    },
  },
  plugins: [],
}
