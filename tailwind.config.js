/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        circularStd: 'circular-bold',
        circular: 'circular',
      },
    },
  },
  plugins: [],
};
