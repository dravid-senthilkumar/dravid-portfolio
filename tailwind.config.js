/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        playwrite: ['"Playwrite AU VIC"', 'cursive'],
        lusitana: ['Lusitana', 'serif'],
      },
      colors: {
        brand: {
          warning: '#e7aa03',
          pink: '#ff004f',
          dark: '#0f0f11',
          card: '#18181c',
          cardBorder: '#2a2a32',
          textMuted: '#9e9e9e',
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
