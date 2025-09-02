/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#2DD4BF', // A color similar to the reference image
        'brand-dark': '#0D1117', // A deep, near-black color for the background
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}