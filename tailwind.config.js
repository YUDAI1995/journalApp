const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  mode: 'jit',
  content: [
    './src/**/**/*.{js,ts,jsx,tsx}',
    // path.join(__dirname, './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}'),
    // path.join(
    //   __dirname,
    //   './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    // ),
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        theme: {
          light: '#ffffff',
          medium: '#cccccc',
          DEFAULT: '#333333',
          dark: '#111111',
        },
        primary: {
          DEFAULT: '#2097f3',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  important: true,
});
