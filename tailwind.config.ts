import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#35C7BE',
          blue: '#A8E7F0',
          beige: '#F7F5F1',
          dark: '#134E4A',
        },
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
