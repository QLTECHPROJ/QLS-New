/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
//const { default: news } = require("./src/templates/news")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/post.js")
 // const PageTemplate = path.resolve("./src/templates/page.js")
  const NewsTemplate = path.resolve("./src/templates/news.js")
  //const solutionTemplate = path.resolve("./src/templates/solution.js")

  const result = await graphql(`
    {
      

      allWpNews {
        edges {
          node {           
            slug
          }
        }
      }

      allWpSolutions {
        edges {
          node { 
            id          
            slug
          }
        }
      }
      

      
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const BlogPosts = result.data.allWpNews.edges
  BlogPosts.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: NewsTemplate,
      context: {
        slug: post.node.slug,
      },
    })

    // const Pages = result.data.allWpPage.edges
    // Pages.forEach(page => {
    //   createPage({
    //     path: `/${page.node.slug}`,
    //     component: PageTemplate,
    //     context: {
    //       slug: page.node.slug,
    //     },
    //   })
    // })

    // const newss = result.data.allWpNews.edges
    // newss.forEach(news => {
    //   createPage({
    //     path: `/${news.node.slug}`,
    //     component: NewsTemplate,
    //     context: {
    //       slug: news.node.slug,
    //     },
    //   })
    // })

    const solutions = result.data.allWpSolutions.edges
    solutions.forEach(solution => {
      createPage({
        path: `/newsolution/${solution.node.slug}`,
        component: path.resolve(`./src/templates/newsolution.js`),
        context: {
          id: solution.node.id
        },
      })
    })
  })
}