/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      yellow: {
        cc: "#FEC802",
      },
      blue: {
        cc0: "#08AEF0",
        cc1: "#1AA1D7",
        cc2: "#5BB7DC",
        cc3: "#9AD0E6",
        cc4: "#CDE5F1",
        cc5: "#E1F1F9",
      },

      red: {
        cc: "#7c0001",
      },
    },

    fontFamily: {
      fredoka: ["Fredoka", "serif"],
      robotoslab: ["Roboto Slab", "serif"],
      lobsterTwo: ["Lobster Two", "sans-serif"],
    },

    screens: {
      "custom-md": "770px", // Custom breakpoint
    },
  },
};
export const plugins = ["prettier-plugin-tailwindcss"];
