/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xs': '375px',
      xs: '500px',
      ...defaultTheme.screens,
      '3xl': '1600px',
      '4xl': '1920px',
      '5xl': '2560px',
      '6xl': '2880px',
      '7xl': '3072px',
      '8xl': '3840px',
    },
    extend: {
      colors: {
        primary: '#2D3982',
        secondary: '#00B9AD',
        primaryDark: '#081553',
        primaryLight: '#212f73',
        gradientDark: '#06282C',
        danger: '#f5222d',
        ncaDark: '#323E48',
        cheko: {
          primary: '#1B365D',
          secondary: '#0EA5E9',
          accent: '#F59E0B',
          neutral: '#6B7280',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
      spacing: {
        75: '18.75rem',
      },
      minHeight: {
        400: '400px',
      },
      direction: {
        ltr: 'ltr',
        rtl: 'rtl',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
