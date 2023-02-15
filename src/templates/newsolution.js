import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const SolutionArchive = ({ data }) => {
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
          {expanded === index && <div>{post.title}</div>}
        </div>
      ))}
    </div>
    </Layout>
  )
}

export default SolutionArchive

export const query = graphql`
  query 
  {
    allWpSolutions 
    {
        edges
        {
            node
            {
                id
                title
                content
            }
        }
    }
  }
`
