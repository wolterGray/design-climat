const color = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      sky: color.sky,
      cyan: color.cyan,
      orange: color.orange,
      gray: color.gray,
      blue: color.blue,
      black: color.black,
      green: color.green,
      white: color.white,
      red: color.red,
      yellow: color.yellow,
      indigo: color.indigo,
    },

    extend: {},
  },
  plugins: [],
};
