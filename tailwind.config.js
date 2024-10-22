/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      green: "#027580",
      white: "#ffffff",
      red: "#EE7563",
      "white-smoke": "#F5F5F5",
      "light-green": "#F0FBF7",
      yellow: "#F9C66E",
      grey: "#D9D9D9",
      black: "#000000",
      "soft-grey": "#A6A3A3",
      "light-grey": "#F2F2F2",
      gradian: "linear-gradient(156.6deg, #EF7A64 -8.29%, #FAC16F 101.3%)",
    },
    extend: {
      boxShadow: {
        custom: "0px 2px 4px 0px #00000026",
      },
    },
  },
  plugins: [],
};
