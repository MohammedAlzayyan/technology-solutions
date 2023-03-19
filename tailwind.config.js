/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}',
    './src/layouts/**/*.{html,js,jsx}',
    './src/sections/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007095',
        secondary: '#49BAD6',
        light: '#A3EAD6',
        blue_light: '#90DDE9',
        green: '#57C9AE',
        red: '#EE4A52',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
