/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      "mamun-green": "#02E29E",
      "mamun-light-blue": "#36B7FE",
      "mamun-blue": "#1749DC",
    },

    fontFamily: {
      "mamun-font": ["Poppins", "sans-serif"],
      "mamun-font-secondary": ["Montserrat", "sans-serif"],
      "astrapi-billing": ["Inter", "sans-serif"]
    },
  },
  plugins: [],
};
