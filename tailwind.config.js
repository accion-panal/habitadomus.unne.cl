/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B1912E',
          opacity: '#B1912Ed4',
          ligth: '#D6C26C',
          300: '#EEA133',
          400: '#B28829',
        },
        secondary: {
          DEFAULT: '#262121',
          opacity: '#262121d4',
          ligth: '#434343',
          300: '#4a4a4a',
          400: '#3d3d3d',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
