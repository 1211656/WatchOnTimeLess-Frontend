/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'gilda': ['Gilda Display', 'serif'],
        'oswald': ['Oswald Display'],
      }
    },
  },
  variants: {
    extend: {
      textColor: ['placeholder', ]
    }
  },
  plugins: [],
}

