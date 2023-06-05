/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#809FFF",

          secondary: "#5A84B3",

          accent: "#DFEEFF",

          neutral: "#dfeeff",

          "base-100": "#141D3D",

          info: "#599fd9",

          success: "#52ebb3",

          warning: "#f5c529",

          error: "#f3587a",
        },
      },
    ],
  },
};
