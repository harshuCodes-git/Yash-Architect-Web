/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "rgba(0, 0, 0, 0.46)",
          "200": "rgba(0, 0, 0, 0.73)",
          "300": "rgba(0, 0, 0, 0.65)",
          "400": "rgba(30, 30, 30, 0.67)",
          "500": "rgba(0, 0, 0, 0.31)",
          "600": "rgba(0, 0, 0, 0.63)",
          "700": "rgba(255, 255, 255, 0)",
          "800": "rgba(0, 0, 0, 0.68)",
          "900": "rgba(255, 255, 255, 0.75)",
        },
        gainsboro: "#d9d9d9",
        darkorange: "rgba(226, 122, 0, 0.7)",
        azure: "#e8fcff",
        powderblue: "#b2e6ed",
      },
      spacing: {},
      fontFamily: {
        archivo: "Archivo",
        arimo: "Arimo",
        mitr: "Mitr",
        inter: "Inter",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      "45xl": "64px",
      "36xl": "55px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
