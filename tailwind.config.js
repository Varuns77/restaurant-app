/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.8s ease-in-out',
        slideInTop: 'slideInTop 0.8s ease-out',
      },
      boxShadow: {
       'thick-purple': '0.3em 0.3em rgba(101, 93, 187, 1)',
      },
      borderWidth: {
        'custom': '0.1em', // Custom border width matching the shadow's offset
      },
      borderColor: {
        'custom-purple': '#655DBB', // Custom border color to match shadow
      }
    },
  },
  plugins: [],
}

