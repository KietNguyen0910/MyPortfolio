/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#55e6a5",
        second: "#FDE799",
        subColor: "#64748B",
        tertiary: "#FFD700",
        quaternary: "#008B8B",
        active: "#991B1F",
      },
      screens: {
        "max-sm": { max: "639px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1279px" },
        "max-2xl": { max: "1535px" },

        "only-sm": { min: "640px", max: "767px" },
        "only-md": { min: "768px", max: "1023px" },
        "only-lg": { min: "1024px", max: "1279px" },
        "only-xl": { min: "1280px", max: "1535px" },
      },
    },
  },
  plugins: [],
};
