/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      'walter-light': ['Walter-Light', 'sans-serif'],
      walter: ['Walter', 'sans-serif'],
      SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        noise: 'url(/assets/NOISE.png)',
      },
      colors: {
        'accent/100': '#fdda44',
        'primary/50': '#E1ECF9',
        'primary/75': '#89A5C6',
        'primary/200': '#223348',
        'primary/300': '#15283F',
        'primary/400': '#06182F',
        'primary/500': '#000916',
      },
      animation: {
        myMoveInOne: 'myMoveInOne 0.8s ease-in',
        myMoveOutOne: 'myMoveOutOne 0.5s ease-in',
        myMoveInTwo: 'myMoveInTwo 0.8s ease-in',
        myMoveOutTwo: 'myMoveOutTwo 0.5s ease-in',
        myMoveInThree: 'myMoveInThree 0.8s ease-in',
        myMoveOutThree: 'myMoveOutThree 0.5s ease-in',
        contact: 'contact 15s linear infinite',
        contact2: 'contact 15s linear 7.5s infinite',
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
          '100%': { transform: 'scale(2.4) translate(-42%, 43%)' },
        },
        myMoveOutThree: {
          '0%': { transform: 'scale(2.4) translate(-42%, 43%)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'scale(1)' },
        },
        contact: {
          '0%': {
            left: '100%',
          },
          '100%': {
            left: '-100%',
          },
        },
      },
    },
  },
  plugins: [],
};
