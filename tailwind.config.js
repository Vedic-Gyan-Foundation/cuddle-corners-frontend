/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: {
        900: "#025A77",
        800: "#037799",
        700: "#058DB5",
        600: "#08AEF0",
        500: "#1AA1D7",
        400: "#5BB7DC",
        300: "#9AD0E6",
        200: "#CDE5F1",
        100: "#E1F1F9",
        75: "#ECF7FC",
        50: "#F3FAFE",
        25: "#F9FDFF",
      },

      secondary: {
        900: "#7A5701",
        800: "#9C6F01",
        700: "#BE8801",
        600: "#E0A101",
        500: "#FEC802",
        400: "#FFD531",
        300: "#FFE066",
        200: "#FFEA8C",
        100: "#FFF2B3",
        75: "#FFF7CC",
        50: "#FFFBE6",
      },

      tertiary: {
        900: "#4C0001",
        800: "#5F0001",
        700: "#6D0001",
        600: "#7C0001", // Original `cc` color
        500: "#A00002",
        400: "#C40002",
        300: "#E04849",
        200: "#F18A8B",
        100: "#F8B9BA",
        50: "#FDE8E8",
      },
    },

    fontFamily: {
      fredoka: ["Fredoka", "serif"],
      robotoSlab: ["Roboto Slab", "serif"],
      lobsterTwo: ["Lobster Two", "sans-serif"],
    },

    screens: {
      "custom-md": "770px", // Custom breakpoint
    },

    backgroundImage: {
      // Radial Gradient (Darkest at the edges, Lightest at the center)
      "radial-primary-mix":
        "radial-gradient(circle, #CDE5F1 10%, #E1F1F9 50%, #ECF7FC 100%)",

      // Linear Gradient (Darkest at the top, Lightest at the bottom)
      "linear-primary-mix":
        "linear-gradient(to bottom, #9AD0E6 10%, #CDE5F1 50%, #E1F1F9 100%)",

      // Linear Gradient (Darkest to Lightest)

      "linear-primary-dark":
        "linear-gradient(to bottom, #037799 0%, #058DB5 20%, #08AEF0 40%, #1AA1D7 60%, #5BB7DC 80%, #9AD0E6 100%)",

      // Linear Gradient (Dark to Light)
      "linear-primary-soft":
        "linear-gradient(to bottom left, #1AA1D7 0%, #5BB7DC 33%, #9AD0E6 66%, #CDE5F1 100%)",
    },
  },
};
export const plugins = ["prettier-plugin-tailwindcss"];
