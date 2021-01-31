module.exports = {
  pathPrefix: "/site",
  siteMetadata: {
    title: `Jon Kingsley - Engineer, Actor and more...`,
    description: `Jonathan Kingsley - Engineer, Actor and more...`,
    author: `Jonathan Kingsley`,
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
