module.exports = {
  siteMetadata: {
    title: `Conrad Metzger\'s Portfolio`,
    description: `portfolio of Conrad Metzger`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-theme-portfolio",
      options: {
        contentPath: `${__dirname}/content` // the path to your markdown files
      }
    }
  ]
}
