/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-rainbow':
          'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)',
      },
    },
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  plugins: [],
};
