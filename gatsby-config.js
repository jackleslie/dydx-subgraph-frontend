module.exports = {
  siteMetadata: {
    title: `dYdX Subgraph`,
    description: `Frontend for the dydx subgraph, created by Jack Leslie as a submission for the CoinList + The Graph hackathon.`,
    author: `@jackleslie`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#247BA0`,
        theme_color: `#247BA0`,
        display: `minimal-ui`,
        icon: `src/images/dydx.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "dYdX",
        // This is field under which it's accessible
        fieldName: "dydx",
        // Url to query from
        url: "https://api.thegraph.com/subgraphs/name/jackleslie/dydx",
      },
    },
  ],
}
