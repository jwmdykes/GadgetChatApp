/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './frontend/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        themeTeal: '#5fecfb',
        themeGreen: '#1ddeab',
        themeYellow: '#fec134',
        themeBlack: '#012c4f',
      },
      fontFamily: {
        varelaRound: ['Varela Round'],
      },
    },
  },
  plugins: [],
};
