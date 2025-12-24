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
        accent: {
          blue: '#0070F3',
          green: '#A8CFEE',
          orange: '#F59E0B',
          yellow: '#FFC40D',
        },
        beige: '#ece6d3',
        yellow: '#FBD26B',
        green: '#A8CFEE',
        red: '#E8381C',
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
