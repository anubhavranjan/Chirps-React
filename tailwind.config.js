/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  // make sure to safelist these classes when using purge
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],

  // enable dark mode via class strategy
  darkMode: 'class',

  // theme: {
  //   colors: {
  //     gray: colors.coolGray,
  //     blue: colors.lightBlue,
  //     red: colors.rose,
  //     pink: colors.fuchsia,
  //   },
  //   fontFamily: {
  //     sans: ['Graphik', 'sans-serif'],
  //     serif: ['Merriweather', 'serif'],
  //   },
  //   extend: {
  //     spacing: {
  //       '128': '32rem',
  //       '144': '36rem',
  //     },
  //     borderRadius: {
  //       '4xl': '2rem',
  //     }
  //   }
  // },
  // variants: {
  //   fill: [],
  //   extend: {
  //     borderColor: ['focus-visible'],
  //     opacity: ['disabled'],
  //   }
  // },
  // presets: [
  //   require('@acmecorp/base-tailwind-config')
  // ],
  plugins: [
    require('flowbite/plugin')
  ],
  // prefix: 'ch-',
}

