const { backgroundImage } = require("html2canvas/dist/types/css/property-descriptors/background-image");
const { fontFamily } = require("html2canvas/dist/types/css/property-descriptors/font-family");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"], // sets your default theme to dark
  },
};