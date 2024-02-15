/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './frontend/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        themeTeal: '#5fecfb',
        themeGreen: '#1ddeab',
        'pastel-blue': '#8bd3e6',
        'pastel-red': '#ffa2a0ff',
        'pastel-yellow': '#f7f97c',
        'pastel-orange': '#fbdaae',
        'pastel-purple': '#c7b8de',
        'lightning-yellow': {
          50: '#fffbeb',
          100: '#fff2c6',
          200: '#ffe488',
          300: '#fed04b',
          400: '#fec134',
          500: '#f89a08',
          600: '#dc7203',
          700: '#b64f07',
          800: '#943d0c',
          900: '#79330e',
          950: '#461802',
        },
        themeBlack: '#012c4f',
        themeBorderColor: '#d4d4d4',
      },
      fontFamily: {
        varelaRound: ['Varela Round'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    'bg-pastel-blue',
    'bg-pastel-red',
    'bg-pastel-yellow',
    'bg-pastel-orange',
    'bg-pastel-purple',
    'bg-neutral-300',
  ],
};
