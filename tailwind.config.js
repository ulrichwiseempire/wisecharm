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
      colors: {
        dark: {
          bg: '#0B0C10',        // Noir profond mat
          card: '#16181E',      // Anthracite pour les cartes
          border: '#2A2D37',    // Bordure subtile
        },
        accent: {
          ruby: '#8B1E3F',      // Bordeaux Rubis
          gold: '#C5A059',      // Doré Cuivré
        },
        text: {
          main: '#F4F5F7',      // Blanc cassé
          muted: '#9DA3B4',     // Gris argenté
        }
      },
    },
  },
  plugins: [],
}
