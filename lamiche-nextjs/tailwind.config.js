/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#1A120B',
        terra: {
          light: '#E8855A',
          DEFAULT: '#BF5A2F',
          dark: '#A34A22',
        },
        gold: {
          light: '#E8C078',
          DEFAULT: '#C8962A',
        },
        cream: '#FAF5EC',
        sage: '#6B7C5A',
        muted: '#9A806A',
        charcoal: '#0F0A06',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.2', transform: 'scaleY(0.8)' },
          '50%': { opacity: '1', transform: 'scaleY(1)' },
        },
        addPop: {
          '0%': { transform: 'scale(0.5)' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease both',
        ticker: 'ticker 28s linear infinite',
        scrollPulse: 'scrollPulse 1.5s ease-in-out infinite',
        addPop: 'addPop 0.4s ease',
      },
      scale: {
        '108': '1.08',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
