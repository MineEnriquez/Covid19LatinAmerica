module.exports = {
  siteMetadata: {
    title: "Covid 19 - Latin America",
    author: "Minerva Enriquez",
    description: "Covid 19 - information in spanish for the latinamerican community"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Covid19 in spanish',
        short_name: 'Covid19 ES',
        lang: `es`,
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon2.png', //This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
