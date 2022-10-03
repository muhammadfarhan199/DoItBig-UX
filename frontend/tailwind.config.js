module.exports = {
  content: ['./src/**/*.{html,ts}'],
  corePlugins: {
    container: false,
  },
  theme: {
    container: {
      padding: {
        DEFAULT: '4rem',
        sm: '1rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '4rem',
      },
    },
    extend: {
      boxShadow: {
        sm: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0px 4px 3px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#35B8EA',
          50: '#ECFAFF',
          100: '#BCE7F8',
          200: '#9ADBF4',
          300: '#78D0F1',
          400: '#57C4ED',
          500: '#35B8EA',
          600: '#2C99C3',
          700: '#237B9C',
          800: '#1B5C75',
          900: '#123D4E',
        },
        neutral: {
          DEFAULT: '#0B252F',
          100: '#F7F8F8',
          200: '#DEE2E3',
          300: '#AEB6BA',
          400: '#859297',
          500: '#5C6E74',
          600: '#344952',
          700: '#0B252F',
        },
        blue: {
          DEFAULT: '#00C3CE1A',
          100: '#00C3CE1A',
          200: '#00C3CE',
          300: '#AEB6BA',
          400: '#859297',
          500: '#5C6E74',
          600: '#344952',
          700: '#0B252F',
        },
        gray: '#5C6E74',
        'light-gray': '#AEB6BA',
        secondary: {
          DEFAULT: '#FFEAD9',
          100: '#FFEAD9',
          200: '#FFDCC0',
          300: '#FFCAA0',
          400: '#FFB981',
          500: '#FFA762',
          600: '#FF9642',
          700: '#D47D37',
          800: '#AA642C',
          900: '#804B21',
          1000: '#553216',
          2000: '#331E0D',
        },
        success: {
          DEFAULT: '#1CD49C',
          50: '#B3F5E1',
          100: '#A1F3DA',
          200: '#7DEECB',
          300: '#59E9BD',
          400: '#35E4AF',
          500: '#1CD49C',
          600: '#15A278',
          700: '#0F7153',
          800: '#083F2F',
          900: '#020E0A',
        },
        danger: {
          DEFAULT: '#eb5757',
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fccccc',
          300: '#f9a8a8',
          400: '#f47575',
          500: '#eb5757',
          600: '#d62c2c',
          700: '#b42121',
          800: '#951f1f',
          900: '#7c2020',
        },
        warning: {
          DEFAULT: '#DAAE10',
          50: '#F9E7A9',
          100: '#F7E296',
          200: '#F4D870',
          300: '#F2CD4A',
          400: '#EFC324',
          500: '#DAAE10',
          600: '#A6840C',
          700: '#715B08',
          800: '#3D3104',
          900: '#090701',
        },
        info: {
          DEFAULT: '#1684F1',
          50: '#C3DFFB',
          100: '#B0D5FA',
          200: '#89C1F8',
          300: '#63ADF6',
          400: '#3C98F3',
          500: '#1684F1',
          600: '#0C68C3',
          700: '#094C8E',
          800: '#053059',
          900: '#021324',
        },
        black: {
          100: '#343434',
        },
        'body-font': { DEFAULT: '#223b55' },
        'blue-light': { DEFAULT: '#f6f9fc' },
        'home-gradient-top': { DEFAULT: '#FAFAFA' },
        'home-gradient-bottom': { DEFAULT: '#E2EAFC' },
      },
      screens: {
        'extra-small': { max: '480px' },
        small: { max: '640px' },
        medium: { max: '768px' },
        large: { max: '1024px' },
        'extra-large': { max: '1280px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        },
      });
    },
  ],
};