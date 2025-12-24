/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#333333',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
        },
        beige: {
          DEFAULT: '#FFF9F0',
          dark: '#C4B89E',
        },
        yellow: {
          DEFAULT: '#FBD26B',
          dark: '#B8922C',
        },
        orange: {
          DEFAULT: '#F1722A',
          dark: '#B82810',
        },
        green: {
          DEFAULT: '#82E1A0',
          dark: '#4CAF70',
        },
        blue: {
          DEFAULT: '#A8CFEE',
          dark: '#6B9DC8',
        },
        purple: {
          DEFAULT: '#B4A7D6',
          dark: '#8B7AB8',
        },
        pink: {
          DEFAULT: '#FFB6C1',
          dark: '#E08994',
        },
        coral: {
          DEFAULT: '#FF9B85',
          dark: '#E67A63',
        },
        peach: {
          DEFAULT: '#FFBD9B',
          dark: '#E69E7A',
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
