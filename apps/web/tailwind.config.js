// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      spacing: {
        header: '47px',
        footer: '24px',
        tabs: '45px',
      },
      width: {
        7.5: '1.8rem',
      },
      fontSize: {
        xxs: '.6rem',
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
      },
      borderWidth: {
        DEFAULT: '1px',
        border: '1px',
      },
    },
  },
  plugins: [],
};
