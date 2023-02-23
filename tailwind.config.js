const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    colors: {
      ...colors,
      alpha: "#3252DF",
      beta: "#FF498B",
      gamma: "#152C5B",
      psi: "#B0B0B0",
      sigma: "#B3B3B3",
      omega: "#F5F6F8",
      error: "#E74C3C",
      success: "#1ABC9C",
    },
  },
  plugins: [],
};
