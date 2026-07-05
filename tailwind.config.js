/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Sky-blue — the TRUST anchor (CTAs, links, key headings, calm fills).
        // Ramp fixed to darken monotonically (the old 500/600 were inverted).
        primary: {
          900: "#025A77",
          800: "#037799",
          700: "#058DB5",
          600: "#1AA1D7",
          500: "#08AEF0", // brand hero blue (the base tone)
          400: "#5BB7DC",
          300: "#9AD0E6",
          200: "#CDE5F1",
          100: "#E1F1F9",
          75: "#ECF7FC",
          50: "#F3FAFE",
          25: "#F9FDFF",
        },

        // Golden-yellow — the JOY accent (sparing highlights + the motif).
        // Never use white/light text on these; pair with primary-900 ink.
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

        // Brand-red — reserved for the wordmark/logo lockup and rare emphasis.
        tertiary: {
          900: "#4C0001",
          800: "#5F0001",
          700: "#6D0001",
          600: "#7C0001", // the Cuddle Corners red
          500: "#A00002",
          400: "#C40002",
          300: "#E04849",
          200: "#F18A8B",
          100: "#F8B9BA",
          50: "#FDE8E8",
        },

        // Warm ground + readable ink. Pastels live in fills; text uses ink.
        paper: {
          DEFAULT: "#FBF7EF", // the canvas for everything (warm, not clinical white)
          alt: "#F5EDDD", // alternating section band
          deep: "#EFE6D2", // deepest warm tint
        },
        ink: {
          DEFAULT: "#0E3A49", // body text — deep teal-navy, clears WCAG AA on paper
          soft: "#4B6C77", // secondary text
          muted: "#7C97A0", // captions / disabled
        },
        line: "rgba(2, 90, 119, 0.14)", // hairline borders (sky-deep tint)

        // Illustration-only palette for the hand-drawn bear/cloud motifs.
        sand: {
          light: "#F7E6CE",
          DEFAULT: "#E7B889",
          dark: "#C68F5C",
        },
        blush: "#F4A79E",

        // Functional affordance — WhatsApp CTAs only.
        whatsapp: { DEFAULT: "#1FAF54", dark: "#178943" },
      },

      fontFamily: {
        // headings / display
        fredoka: ["Fredoka", "ui-rounded", "system-ui", "sans-serif"],
        // body + default sans
        body: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        // wordmark / logo lockup ONLY
        wordmark: ["Lobster Two", "ui-serif", "cursive"],
        lobsterTwo: ["Lobster Two", "ui-serif", "cursive"],
        // legacy alias: existing `font-robotoSlab` usages now render as body
        robotoSlab: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      borderRadius: {
        card: "18px",
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },

      boxShadow: {
        soft: "0 1px 2px rgba(2,90,119,.05), 0 8px 24px -12px rgba(2,90,119,.22)",
        lift: "0 2px 4px rgba(2,90,119,.06), 0 18px 40px -16px rgba(2,90,119,.28)",
      },

      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        400: "400ms",
      },

      keyframes: {
        floatCloud: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },
      animation: {
        "cloud-slow": "floatCloud 60s linear infinite",
        "cloud-medium": "floatCloud 45s linear infinite",
        "cloud-fast": "floatCloud 30s linear infinite",
        "cloud-xfast": "floatCloud 20s linear infinite",
        "cloud-ultraslow": "floatCloud 90s linear infinite",
      },

      backgroundImage: {
        // Kept — used by the navbar and footer.
        "linear-primary-mix-tb":
          "linear-gradient(to bottom, #9AD0E6 10%, #CDE5F1 50%, #E1F1F9 100%)",
        "linear-primary-mix-bt":
          "linear-gradient(to top, #9AD0E6 10%, #CDE5F1 50%, #E1F1F9 100%)",
      },
    },
  },
  plugins: [],
};
