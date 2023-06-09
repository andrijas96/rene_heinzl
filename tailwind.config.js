/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      'walter-light': ['Walter-Light', 'sans-serif'],
      walter: ['Walter', 'sans-serif'],
    },
    extend: {
      colors: {
        'accent/100': '#fdda44',
        'primary/50': '#E1ECF9',
        'primary/75': '#89A5C6',
        'primary/300': '#15283F',
      },
      animation: {
        myMoveInOne: 'myMoveInOne 0.8s ease-in',
        myMoveOutOne: 'myMoveOutOne 0.5s ease-in',
        myMoveInTwo: 'myMoveInTwo 0.8s ease-in',
        myMoveOutTwo: 'myMoveOutTwo 0.5s ease-in',
        myMoveInThree: 'myMoveInThree 0.8s ease-in',
        myMoveOutThree: 'myMoveOutThree 0.5s ease-in',
      },
      keyframes: {
        myMoveInOne: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'scale(1.7) translate(22%, 29%)' },
        },
        myMoveOutOne: {
          '0%': { transform: 'scale(1.7) translate(22%, 29%)' },
          '100%': { transform: 'scale(1)' },
          '50%': { transform: 'translate(0, 0)' },
        },
        myMoveInTwo: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'scale(1.7) translate(-21%, -8%)' },
        },
        myMoveOutTwo: {
          '0%': { transform: 'scale(1.7) translate(-21%, -8%)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'scale(1)' },
        },
        myMoveInThree: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'scale(2.4) translate(-102%, 91%)' },
        },
        myMoveOutThree: {
          '0%': { transform: 'scale(2.4) translate(-102%, 91%)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
