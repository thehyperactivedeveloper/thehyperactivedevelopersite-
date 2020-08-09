module.exports = {
  siteMetadata: {
    title: 'The hyperactive developer',
    author: 'Kynda Loyola',
    description: 'A developer portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'thehyperactivedeveloper',
        short_name: 'HAD',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        //icon: '', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
