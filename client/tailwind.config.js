/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode based on the class applied to the HTML tag
  theme: {
    extend: {
      colors: {
        light: {
          text: "#1d0712",
          background: "#f8e2ee",
          primary: "#dd7375",
          secondary: "#f1dbc6",
          accent: "#bd732e",
        },
        dark: {
          text: "#f4e7ec",
          background: "#11080c",
          primary: "#9a476c",
          secondary: "#070305",
          accent: "#883f60",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        text: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
