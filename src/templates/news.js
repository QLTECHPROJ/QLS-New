import React from "react"

//import Layout from "../components/layout"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/Layout"
import "bootstrap/dist/css/bootstrap.css";
//import news_sidebar from "../pages/news_sidebar";
export default ({ data }) => {
  const news = data.allWpNews.edges[0].node
  console.log(news)
  
  
  return (
   
    <Layout>
      
      <main>
        <section class="news_deatails_sec">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="news_dtbx">
                        <p>{news.date}</p>
                        <h3>{news.newsSection.headingsinglepage}</h3>
                        <div class="new_dtimgbx">
                            <img src={news.featuredImage.node.sourceUrl} class="img-fluid" alt="" />
                            <div class="newsdt_uptxt abso_u">
                                <h1 class="sky_clo">{news.newsSection.imageheading}</h1>
                                <h3 class="gfv_wasd">{news.newsSection.imagesubheading}</h3>
                            </div>
                        </div>
                        <div class="cont_dcs">
                            <p dangerouslySetInnerHTML={{ __html: news.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </section>
        </main>
        
      </Layout>
    
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpNews (filter: { slug: { eq: $slug } }) {
        edges {
          node {
            id
            title            
            excerpt
            slug
            date(formatString: "DD MMMM yyyy")
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
            newsSection {
                      
              imageArchivePage {
                sourceUrl
              }
              headingsinglepage
          imageheading
          imagesubheading
            }
          }
        }
      }
  }`