module.exports = {
  siteMetadata: {
    
  },
  plugins: [
    
    {
        resolve: `gatsby-source-wordpress`,
        options: {
            // Specify the URL of the WordPress source
            url:`http://steamlinedesign.com/suchi/qlspacenew/graphql`,
           
            includedRoutes: [
              '**/posts',
              '**/tags',              
              '**/categories'
            ]
        }
    }
  ]
}