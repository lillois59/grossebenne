import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        sand: {
          100: "#F7F7F5",
          200: "#EFEFEA",
          300: "#D8D8D1",
        },

        anthracite: {
          800: "#303633",
          900: "#1C2321",
          950: "#121614",
        },

        forest: {
          600: "#1F4736",
          700: "#173629",
          800: "#10251D",
        },

        eco: {
          400: "#5FAF7C",
          500: "#3F8F5F",
          600: "#2F714A",
        },
      },

      fontFamily: {
        display: [
          "var(--font-display)",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "monospace",
        ],
      },

      borderRadius: {
        xs: "6px",
      },

      boxShadow: {
        card:
          "0 10px 40px rgba(28,35,33,0.08)",
      },

      transitionTimingFunction: {
        smooth:
          "cubic-bezier(0.22,1,0.36,1)",
      },

      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },

  plugins: [],
};

export default config;