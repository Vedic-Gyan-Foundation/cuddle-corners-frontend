/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      yellow: {
        cc: "#FEC802",
      },
      blue: {
        cc: "#1AA1D7",
      },
      red: {
        cc: "#7c0001",
      },
    },

    fontFamily: {
      fredoka: ["Fredoka", "serif"],
    },
  },
};
export const plugins = [];
