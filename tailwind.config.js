/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'slate-700': '#01161E',
        'slate-100': '#EFF6E0',
        'opacity-50': 'rgba(255, 255, 255, 0.999)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

