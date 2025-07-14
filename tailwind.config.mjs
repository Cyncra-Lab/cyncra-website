// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme.js';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    
    screens: {
      ...defaultTheme.screens,
      'large-desktop': '1720px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '3rem',
        lg: '7rem',
        'large-desktop': '0',
      },
  
    
    },

    extend: {},
  },

  plugins: [],
};

export default config;
