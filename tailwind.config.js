/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        superLightGrey: "#BBBFC3",
        lightGrey: "#415462",
        grey: "#24333E",
        darkGrey: "#1B2832",
        lightBlue: "#1095C120",
        blue: "#247BF6",
        darkBlue: "#171D34",
        grayish: "#415462",
        lightGrayish:"#A0A9B0",
        darkGrayish:"#24333E",
        cream: "#dadde0"
      },
    },
    screens: {
      xs: "480px",
      xss: "520px",
      ss: "620px",
      xsm: "660px",
      sm: "768px",
      xmd: "860px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
