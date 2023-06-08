/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      'walter-light': ['Walter-Light', 'sans-serif'],
    },
    extend: {
      colors: {
        'accent/100': '#fdda44',
        'primary/50': '#E1ECF9',
        'primary/300': '#15283F',
      },
    },
  },
  plugins: [],
};
