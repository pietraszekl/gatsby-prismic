module.exports = {
  siteMetadata: {
    title: 'Lukasz Pietraszek',
    description: 'SEO description',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            variants: ['400', '400i', '700', '700i', '900'],
          },
          {
            family: 'Amiri',
            variants: ['400', '400i', '700', '700i'],
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'pietraszekl-gatsby-prismic',
        pages: [{
          type: 'Page',
          match: '/:uid',
          path: '/page-preview',
          component: require.resolve('./src/templates/Page.js'),
        }],
      },
    },
  ],
}
