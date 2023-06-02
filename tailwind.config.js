/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        neutral:{
          50: "#F8F9FA",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D2D6DB",
          400: "#9DA4AE",
          500: "#6C737F",
          600: "#4D5761",
          700: "#2F3746",
          800: "#1C2536",
          900: "#111927",
        }
      }
    },
  },
  plugins: [],
}
