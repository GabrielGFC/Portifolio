/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          darkest: '#1A1A1D',
          dark: '#3B1C32',
          primary: '#6A1E55',
          light: '#A64D79',
        },
      },
    },
  },
  plugins: [],
};