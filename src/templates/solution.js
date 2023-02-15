import React from "react"
import { useState } from "react";
//import Layout from "../components/layout"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/Layout"
import "bootstrap/dist/css/bootstrap.css";
export default ({ data }) => {
  const posts = data.allWpSolutions.edges
  const [expanded, setExpanded] = useState(null)

  console.log(posts)
  
  
  return (
   
    <Layout>
      <div>
      {posts.map((post, index) => (
        <div key={post.id}>
          <h2 onClick={() => setExpanded(expanded === index ? null : index)}>
            {post.title}
          </h2>
          {expanded === index && <div>{post.content}</div>}
        </div>
      ))}
    </div>
        
      </Layout>
    
  )
}

export const query = graphql`
  query {
    allWpSolutions {
        edges {
          node {
            id
            title            
            excerpt
            slug
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
  }`