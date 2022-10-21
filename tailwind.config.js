/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#747bff',
        secondary: '#2f2f2f',
        main: '#242424',
        'primary-text': '#ffffffde',
        'secondary-text': '#ebebeb99',
        brand: '#646cff',
        'brand-hover': '#747bff',
      },
    },
  },
  plugins: [],
};
