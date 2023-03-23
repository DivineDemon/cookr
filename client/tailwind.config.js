module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        // Light mode color palette
        textprimary: "#333333", // Neutral Gray
        textsecondary: "#FFFFFF", // White
        background: "#F5F5F5", // Light Gray
        componentprimary: "#FFFFFF", // White
        componentsecondary: "#F5F5F5", // Light Gray
        buttonprimary: "#FF9800", // Warm Orange
        buttonsecondary: "#8BC34A", // Bright Green

        // Dark mode color palette
        darktextprimary: "#FFFFFF", // White
        darktextsecondary: "#BDBDBD", // Light Gray
        darkbackground: "#212121", // Dark Gray
        darkcomponentprimary: "#333333", // Neutral Gray
        darkcomponentsecondary: "#424242", // Dark Gray
        darkbuttonprimary: "#FF5722", // Deep Orange
        darkbuttonsecondary: "#4CAF50", // Dark Green
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-dark-mode")()],
};
