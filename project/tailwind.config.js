// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        jelloVertical: {
          '0%': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '40%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          '50%': {
            transform: 'scale3d(0.85, 1.15, 1)',
          },
          '65%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          '75%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        jelloVertical: 'jelloVertical 1s ease both',
      },
    },
  },
  plugins: [],
}
