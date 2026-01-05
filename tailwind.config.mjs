/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-border, #000000)',
          light: '#333333',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
        },
        black: 'var(--color-border, #000000)',
        beige: {
          DEFAULT: 'var(--color-beige, #FFF9F0)',
          dark: '#C4B89E',
        },
        yellow: {
          DEFAULT: 'var(--color-yellow, #FFB948)',
          dark: '#CC8F1A',
        },
        orange: {
          DEFAULT: 'var(--color-orange, #D66A00)',
          dark: '#CC6500',
        },
        green: {
          DEFAULT: 'var(--color-green, #00C763)',
          dark: '#00A355',
        },
        blue: {
          DEFAULT: 'var(--color-blue, #4A1BC7)',
          dark: '#2A009E',
        },
        purple: {
          DEFAULT: 'var(--color-purple, #6929C7)',
          dark: '#6B1FCC',
        },
        pink: {
          DEFAULT: 'var(--color-pink, #FF6BA3)',
          dark: '#CC2F61',
        },
        coral: {
          DEFAULT: 'var(--color-coral, #FF6B4A)',
          dark: '#CC4426',
        },
        peach: {
          DEFAULT: 'var(--color-peach, #FFAD7A)',
          dark: '#CC7D4A',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['Barlow Condensed', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Anton', 'Impact', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
