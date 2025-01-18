/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', ],
        lobster: ['Lobster', 'cursive'],
        playfair: ['Playfair Display'],
      },
      colors: {
        gold:'D4AF37',
        beige: '#F5F5DC',
        boldbeige: '#F5F5DC',
        
      },

    },
  },     

  variants: {
    extend: {

    },
  },
  plugins: [],
}

