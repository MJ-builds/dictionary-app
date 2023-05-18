/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inconsolata': ['Inconsolata', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}
