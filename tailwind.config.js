/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f6f8',
          100: '#e8eaed',
          500: '#21467e',
          600: '#1e3e73',
          700: '#1a3667',
          800: '#162e5b',
          900: '#11254f',
        },
        secondary: {
          100: '#f4cbdf',
          200: '#e9b7ce',
          300: '#dea3bd',
          500: '#d088a8',
          600: '#c57799',
        },
        success: {
          100: '#d0eae3',
          500: '#599887',
        },
        warning: {
          100: '#cddfec',
          500: '#4a90c2',
        },
        purple: {
          100: '#d1d1ef',
          500: '#6366f1',
        },
        info: {
          100: '#e7dee3',
          500: '#8b7d82',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
