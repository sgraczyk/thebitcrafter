module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `bitcraft.pl`,
    author: `Szymon Graczyk`,
    description: `Yet another blog about development and productivity`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/szgraczyk`,
      },
      {
        name: `github`,
        url: `https://github.com/sgraczyk`,
      },
    ],
  },
}
