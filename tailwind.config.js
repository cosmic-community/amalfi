/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amalfi: {
          sea: '#0d6e8c',
          seadeep: '#0a5266',
          sky: '#7fc8dd',
          lemon: '#f6d743',
          lemondeep: '#e2b616',
          terracotta: '#d97642',
          cream: '#fdf8ef',
          stone: '#5c5348',
          ink: '#1f2b30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'sea-gradient': 'linear-gradient(135deg, #0d6e8c 0%, #7fc8dd 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}