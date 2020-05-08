module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
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
};
