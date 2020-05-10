module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-prettier-eslint`,
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `thebitcrafter.com`,
    author: `Szymon Graczyk`,
    description: `Yet another blog about development, leadership and productivity`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/thebitcrafter`,
      },
      {
        name: `github`,
        url: `https://github.com/sgraczyk`,
      },
    ],
  },
}
