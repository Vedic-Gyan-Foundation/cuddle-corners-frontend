/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      yellow: {
        cc: "#FEC802",
      },
      blue: {
        cc1: "#1AA1D7",
        cc2: "#E1F1F9",
      },

      red: {
        cc: "#7c0001",
      },
    },

    fontFamily: {
      fredoka: ["Fredoka", "serif"],
      robotoslab: ["Roboto Slab", "serif"],
    },

    screens: {
      "custom-md": "770px", // Custom breakpoint
    },
  },
};
export const plugins = ["prettier-plugin-tailwindcss"];
