/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        brand: {
          navy: '#0E1E38',
          'navy-dark': '#091322',
          'navy-light': '#182C4D',
          blue: '#0256B8',
          'blue-light': '#2563EB',
          orange: '#FF6B00',
          'orange-hover': '#E65100',
          'orange-light': '#FFF5EB',
          slate: '#64748B',
          'slate-dark': '#334155',
          'light-bg': '#F1F4F6',
          'warm-white': '#FAFAF7',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(14, 30, 56, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(14, 30, 56, 0.12)',
        subtle: '0 1px 3px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
