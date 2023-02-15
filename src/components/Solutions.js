import React, { useState } from 'react';
import Layout from '../components/Layout'
import { Link, graphql, StaticQuery } from "gatsby";
import ArrowRightIcon from './ArrowRightIcon';
import ArrowLeftIcon from './ArrowLeftIcon';


export default function Solutions() {
  
    
    const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index) => {
    setSelectedIndex(selectedIndex === index ? -1 : index);
    
  };


  return (
   
    <Layout>
        
        <StaticQuery
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

        
        <section className="sol_sec2 ">
            <div className="container">
                <div className="row">
                {/* <div className="accordion-container"> */}
				
						{data.allWpSolutions.edges.map(({ node},index) =>(
                           
							<>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="solmnbx">
                             <div key={node.id}>
                             <div className="sol2_cntimg">
                                <img src={node.solutionSection.image.sourceUrl} className="img-fluid" />
                            </div>
                            {selectedIndex === index ? (
            <>
                          <div class="sol_cntbx" id="solchang_colr1" style={{ background: '#023558' , borderRadius: '0px 0px 20px 20px', padding: '20px 15px',  display: 'block', margin: "-20px 0px 0px" }}>
                            <div className="solmntxt" style={{ backgroundColor: '#023558', color: '#fff' }}>
                                <h3 style={{ backgroundColor: '#023558', color: '#fff' }}>{node.title}</h3>
                                
                                <p style={{ backgroundColor: '#023558', color: '#fff' }} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            </div>
          
                <div className={`sol_actxt ${selectedIndex === index ? 'expanded' : ''}`}>
                                <div className="solact_mn">
                                
                                <div dangerouslySetInnerHTML={{ __html: node.content }} />

                                        <Link to='' onClick={(event) => {event.preventDefault(); handleClick(index)}} className="readmorebtn">Read Less <span><ArrowLeftIcon /></span></Link>

                                </div>
                            </div>
              </div>
                           
            </>
          ) : (
            <>
              <div className="solmntxt" >
                                <h3 >{node.title}</h3>
                                
                                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            </div>
              <Link to='' onClick={(event) => {event.preventDefault(); handleClick(index)}} className="readmorebtn">Read More <span><ArrowRightIcon /></span></Link>

            </>
          )}
        </div>
        </div>
            
        </div>
							</>
        				))}
							{/* </div> */}
              </div>
              </div>
              </section>
				
			
              
            </>
          )}
          
        />
       
    </Layout>
  )
}
