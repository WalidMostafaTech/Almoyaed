/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Point to all your JS/TS/JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#894413	',
          foreground: 'hsl(var(--primary-foreground))'
        },
        container: {
          center: true,
        },
        hoverBtn: '#b16c3b',
        screens: {
          xs: '350px',
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1400px'
        },
      }
    },
  },
  plugins: [],
}
