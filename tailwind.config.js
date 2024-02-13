const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./static/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', ...defaultTheme.fontFamily.sans],
      },
      typography: ({ theme }) => ({
        sky: {
          css: {
            '--tw-prose-body': theme('colors.gray[700]'),
            '--tw-prose-headings': theme('colors.sky[900]'),
            '--tw-prose-lead': theme('colors.gray[600]'),
            '--tw-prose-links': theme('colors.sky[900]'),
            '--tw-prose-bold': theme('colors.sky[900]'),
            '--tw-prose-counters': theme('colors.sky[600]'),
            '--tw-prose-bullets': theme('colors.sky[400]'),
            '--tw-prose-hr': theme('colors.gray[200]'),
            '--tw-prose-quotes': theme('colors.sky[900]'),
            '--tw-prose-quote-borders': theme('colors.sky[900]'),
            '--tw-prose-captions': theme('colors.sky[700]'),
            '--tw-prose-code': theme('colors.sky[900]'),
            '--tw-prose-pre-code': theme('colors.gray[900]'),
            '--tw-prose-pre-bg': theme('colors.sky[900]'),
            '--tw-prose-th-borders': theme('colors.sky[300]'),
            '--tw-prose-td-borders': theme('colors.sky[200]'),
            '--tw-prose-invert-body': theme('colors.sky[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.sky[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.sky[400]'),
            '--tw-prose-invert-bullets': theme('colors.sky[600]'),
            '--tw-prose-invert-hr': theme('colors.sky[700]'),
            '--tw-prose-invert-quotes': theme('colors.sky[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.sky[700]'),
            '--tw-prose-invert-captions': theme('colors.sky[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.sky[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.sky[600]'),
            '--tw-prose-invert-td-borders': theme('colors.sky[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}