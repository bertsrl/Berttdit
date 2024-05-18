/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        antic: "Antic",
        "pinyon-script": "'Pinyon Script'",
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      orange: {
        "100": "#e4a706",
        "200": "rgba(255, 185, 0, 0.4)",
        "300": "rgba(255, 185, 0, 0.2)",
        "400": "rgba(255, 185, 0, 0.6)",
      },
      gray: {
        "100": "rgba(255, 255, 255, 0.8)",
        "200": "rgba(0, 0, 0, 0.2)",
        "300": "rgba(0, 0, 0, 0.5)",
      },
    },
    fontSize: {
      base: "12px",
      lg: "13px",
      xl: "15px",
      "2xl": "20px",
      "3xl": "40px",
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "retro"
    ],
  },
  corePlugins: { preflight: false },
  plugins: [require("daisyui")],
};
