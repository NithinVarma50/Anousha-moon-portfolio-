/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.tsx",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          800: '#292524',
          900: '#1c1917',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#DCC38E',
          dark: '#A6823C'
        },
        background: '#ffffff',
        foreground: '#1c1917',
        primary: {
          DEFAULT: '#1c1917',
          foreground: '#fafaf9',
        },
        secondary: {
          DEFAULT: '#f5f5f4',
          foreground: '#1c1917',
        },
        muted: {
          DEFAULT: '#f5f5f4',
          foreground: '#78716c',
        },
        accent: {
          DEFAULT: '#f5f5f4',
          foreground: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}
