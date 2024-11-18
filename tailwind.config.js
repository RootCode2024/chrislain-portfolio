module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',  // Inclus tous les fichiers Vue, JS, TS, JSX et TSX
  ],
  darkMode: 'class',  // Active le mode sombre basé sur la classe 'dark'
  theme: {
    extend: {
      colors: {
        'slate-700': '#01161E',  // Change bg-slate-700 to #01161E
        'slate-100': '#EFF6E0'
      },
    },
  },
  plugins: [],
}

