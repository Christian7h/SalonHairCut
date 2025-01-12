/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Esto asegura que Tailwind use la clase 'dark' para habilitar el modo oscuro
  theme: {
    extend: {},
  },
  plugins: [],
};