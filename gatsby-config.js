module.exports = {
  siteMetadata: {
      title: `cmdev-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "lICae9IgVhvIDrk75maeZsRxD4qqtMYL8hA-8w0P8M4",
      "spaceId": "a9aj5bcg0qv1"
    }
  }, "gatsby-plugin-styled-components",
    `gatsby-plugin-layout`]
};