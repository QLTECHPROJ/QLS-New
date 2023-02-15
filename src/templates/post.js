import React from "react"

//import Layout from "../components/layout"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
//import Layout from "../components/Layout"
//import "bootstrap/dist/css/bootstrap.css";
export default ({ data }) => {
  const post = data.allWpPost.edges[0].node
  console.log(post)
  
  
  return (
   <Layout>
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
       
        
        
        {/* <p> By: {post.title} </p> */}
        
        {/* <p> On: {post.date} </p>
        <h4>ACF FIELDS</h4>
        <p>{post.socialGroup.facebook}</p>
        <div className="col-md-4">
         
        <img src={post.socialGroup.image.sourceUrl} className="img-thumbnail"/>
        
        <p>{post.socialGroup.repeater.map(item => (
                    <React.Fragment>
                        <p>
                            {item.texts}
                            {item.detail}
                        </p>
                       
                    </React.Fragment>
                ))}</p>
        </div> */}
        </div>
        </div>
      </div>
      </>
      </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
          
          
        }
      }
    }
  }`