module.exports = {
  siteMetadata: {
    title: `Jon Kingsley`,
    description: `My personal website.`,
    author: `Jon Kingsley`,
  },
  plugins: [
  	'gatsby-plugin-postcss', 
  	'gatsby-transformer-sharp', 
  	'gatsby-plugin-sharp',
  	{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139202082-1"
      },
    },
  ],
}
