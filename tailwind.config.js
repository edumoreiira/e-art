/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(335, 83%, 56%)',
          100: 'hsl(335, 83%, 95%)',
          200: 'hsl(335, 83%, 85%)',
          300: 'hsl(335, 83%, 75%)',
          400: 'hsl(335, 83%, 65%)',
          500: 'hsl(335, 83%, 56%)', //default
          600: 'hsl(335, 83%, 46%)',
          700: 'hsl(335, 83%, 36%)',
          800: 'hsl(335, 83%, 26%)',
          900: 'hsl(335, 83%, 16%)',
        },
        secondary: {
          DEFAULT: 'hsl(248, 33%, 19%)',
          100: 'hsl(248, 33%, 90%)',
          200: 'hsl(248, 33%, 80%)',
          300: 'hsl(248, 33%, 70%)',
          400: 'hsl(248, 33%, 60%)',
          500: 'hsl(248, 33%, 50%)',
          600: 'hsl(248, 33%, 40%)',
          700: 'hsl(248, 33%, 30%)',
          800: 'hsl(248, 33%, 25%)',
          900: 'hsl(248, 33%, 19%)', //default
        },
      },

      transitionDuration: {
        DEFAULT: '200ms', // Define a duração padrão para 250ms
      },

      transitionTimingFunction: {
        DEFAULT: 'ease-in-out', // Define o easing padrão igual ao CSS
      },

      letterSpacing: {
        'widest-plus3': '0.7em',
        'widest-plus2': '0.4em',
        'widest-plus': '0.2em',
      },
    },
    plugins: [],
  }
}

