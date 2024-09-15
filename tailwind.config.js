/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif']
      },
      colors: {
        'gold-yellow': '#FFD700',
        pink: '#FF69B4',
        'lavender-purple': '#BA55D3',
        'dark-purple': '#8A2BE2',
        indigo: '#4B0082',
        'light-pink': '#FFC0CB',
        'warm-white': '#FFF5E6',
        'cloud-gray': '#f0f4f8',
        'card-pink': '#C48086',
        'card-gold': '#9E8652'
      }
    }
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')]
}
