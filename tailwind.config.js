/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ashSteel: 'var(--biz-secondary-color)',
        stroke: 'var(--stroke, #777)',
        blue: '#40a9ff',
      },
    },
  },
  plugins: [],
};
