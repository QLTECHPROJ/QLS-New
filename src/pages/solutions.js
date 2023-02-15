import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, StaticQuery } from "gatsby";
import Solutions from '../components/Solutions';



export default function solutions() {
    
  return (
   
    <Layout>

      <Solutions />
        
        {/* <StaticQuery
          query={graphql`
            query {
              

                allWpSolutions {
                    edges {
                      node {
                        content
                        excerpt
                        title
                        id
                        solutionSection {
                          image {
                            sourceUrl
                          }
                        }
                      }
                    }
                  }
                }
          `}
          render={(data) => (
            <>
        <section className=" Solution_banner_sec" style={{ backgroundImage: `url(../../breadcumb.png)` }}>
           
            <div className="Solution_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <div className="solution_titlext pb_25">
                                <h1>Solution</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="Solution_imgbx pb_25">
                                <img src={`../../solution1.png`} className="img-fluid" alt="sol" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        
        <section class="sol_sec2 ">
            <div class="container">
                <div class="row">
				
						{data.allWpSolutions.edges.map(({ node,i }) =>(
                           
							<>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="solmnbx">
                            <div className="sol2_cntimg">
                                <img src={node.solutionSection.image.sourceUrl} className="img-fluid" />
                            </div>
                            <div className="btn_wrapd_cl">
                                <div className="solmntxt">
                                <h3>{node.title}</h3>
                                
                                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            </div>
                            <div className="sol_actxt">
                                <div className="solact_mn">
                                <div dangerouslySetInnerHTML={{ __html: node.content }} />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>      
							</>
        				))}
							
              </div>
              </div>
              </section>
				
			
              
            </>
          )}
          
        /> */}
       
    </Layout>
  )
}
