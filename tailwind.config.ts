/** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      extend: {
        animation: {
          'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
          'star-movement-top': 'star-movement-top linear infinite alternate',
          marquee: 'marquee var(--duration, 30s) linear infinite',
        },
        keyframes: {
          'star-movement-bottom': {
            '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
            '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
          },
          'star-movement-top': {
            '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
            '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
          },
          marquee: {
            to: { transform: 'translateX(-50%)' },
          },
        },
      },
    },
  }
  