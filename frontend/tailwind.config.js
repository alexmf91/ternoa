const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{html,tsx}',
    './src/components/*.tsx',
    './src/views/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        '3xl': '1650px',
        '4xl': '2010px',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: '#18181B',
        secondary: '#262626',
        warning: '#ff7849',
        error: '#13ce66',
      },
    },
  },
  plugins: [],
};
