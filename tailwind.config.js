const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This enables dark mode variant
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#9775AA',
          200: '#764BBE',
          300: '#582A72',
          400: '#3D1255',
          500: '#260339',
        },
        pink: {
          100: '#CD88AF',
          200: '#AA5585',
          300: '#882D61',
          400: '#661141',
          500: '#440027',
        },
        lavender: {
          100: '#887CAF',
          200: '#615192',
          300: '#403075',
          400: '#261758',
          500: '#13073A',
        },
        lighModetBg: '#F3F4F6', // A light gray for light mode
        darkModeBg: '#000000', // A dark gray for dark mode
        lightModeTxt: '#111111',
        darkModeTxt: '#F3F4F6'
      },
      animation: {
        scroll:
            "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
          {
            "bg-dot-thick": (value: any) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
              )}")`,
            }),
          },
          { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}