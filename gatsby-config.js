module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
