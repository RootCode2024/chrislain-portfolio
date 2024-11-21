export const content = [
  './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}', // Inclus tous les fichiers Vue, JS, TS, JSX et TSX
];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      'slate-700': '#01161E', // Change bg-slate-700 to #01161E
      'slate-100': '#EFF6E0',
      'opacity-50': 'rgba(255, 255, 255, 0.999)',
    },
  },
};
export const plugins = [
  require('tailwindcss-animated')
];

