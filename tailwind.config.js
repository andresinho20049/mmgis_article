const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        50: colors.black[50],
        100: colors.black[100],
        200: colors.black[200],
        300: colors.black[300],
        400: colors.black[400],
        500: colors.black[500],
        600: colors.black[600],
        700: colors.black[700],
        800: colors.black[800],
        900: colors.black[900]
      },
      white: colors.white,
      gray: {
        50: colors.gray[50],
        100: colors.gray[100],
        200: colors.gray[200],
        300: colors.gray[300],
        400: colors.gray[400],
        500: colors.gray[500],
        600: colors.gray[600],
        700: colors.gray[700],
        800: colors.gray[800],
        900: colors.gray[900]
      },
      green: colors.emerald,
      purple: colors.purple,
      yellow: colors.amber,
      pink: colors.fuchsia,
      neutral: {
        50: colors.neutral[50],
        100: colors.neutral[100],
        200: colors.neutral[200],
        300: colors.neutral[300],
        400: colors.neutral[400],
        500: colors.neutral[500],
        600: colors.neutral[600],
        700: colors.neutral[700],
        800: colors.neutral[800],
        900: colors.neutral[900]
      },
      primary: colors.cyan[500],
      secondary: colors.pink[50]
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
		extend: {}
  },
  plugins: [require("@tailwindcss/typography")],
}
