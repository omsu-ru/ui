/** @type {import('tailwindcss').Config} */
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss, autoprefixer],
};
