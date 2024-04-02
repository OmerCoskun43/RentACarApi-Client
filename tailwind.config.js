/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0px 10px 5px rgba(255, 0, 0, 0.3)",
        avatar: "0 0px 10px 5px rgba(0, 255, 0, 0.3)",
      },
    },
  },
  plugins: [],
});
