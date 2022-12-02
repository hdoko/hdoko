/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: 'var(--pixel-font)',
        'wild-words': 'var(--wild-words-font)',
        poopins: 'var(--poppins-font)',
      },
    },
  },
  plugins: [],
}
