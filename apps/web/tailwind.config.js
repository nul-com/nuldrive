// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proppins, sans-serif', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'sans-serif'],
      },
      spacing: {
        header: '47px',
        footer: '24px',
        menu: '35px',
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      width: {
        7.5: '1.8rem',
      },
      fontSize: {
        xxs: '.6rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        primaryColor: '#ffffff',
        countryCode: '#989DA3',
        titleColor: '#f1f2f3',
        searchBarBg: '#1C2534',
        searchBarBorder: '#27303E',
        searchBarText: '#8494AA',
        borderColor: '#E6E6E6',
        borderHoverColor: '#81acf0',
        blue: {
          100: '#E6F0FD',
          200: '#CCE2FC',
          300: '#99C5FA',
          400: '#66A9F7',
          500: '#338CF5',
          600: '#0070F4',
          700: '#0064DA',
          800: '#0059C2',
          900: '#3679E5',
        },
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        },
      },
      borderWidth: {
        DEFAULT: '1px',
        border: '1px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        sidebar: 'fit-content(100%) auto',
      },
      inset: {
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        10: '2.5rem',
      },
      scale: {
        98: '.98',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
