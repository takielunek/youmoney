/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        superLightGrey: "#BBBFC3",
        superLightGrey2: "#BBC6CE",
        lightGrey: "#415462",
        grey: "#24333E",
        darkGrey: "#1B2832",
        lightBlue: "#1095C120",
        blue: "#247BF6",
        darkBlue: "#171D34",
        grayish: "#415462",
        lightGrayish: "#A0A9B0",
        darkGrayish: "#24333E",
        cream: "#dadde0",
        silver: "#e4e8ec",
        red: "#c62828;",
        sky: "#bfdbfe",
        darkMode: "#11191f",
        darkModeText: "#edf0f3",
        darkModeText2: "#d5dce2",
        darkModeItemsBg: "#343b40",
        darkModeBg: "#141e26",
        darkModeBlueButton: "#19b3e6",
        darkModeBorderColor: "#374956"
      },
    },
    screens: {
      xxs: "350px",
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
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms"),
  ],
};
