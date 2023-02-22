import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Layout from "../components/Layout"
//import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap" ;
import { useState, useEffect } from "react";


import ArrowRightIcon from "../components/ArrowRightIcon";
import MeetSlider from "../components/MeetSlider";
import ReactWOW from 'react-wow'
import 'animate.css';
import Calendar from "../components/Calendar";
import Adminlogo from "../components/Adminlogo";
import NewSlider from "../components/NewSlider";



const IndexPage = ({ data }) => {
 
  // const getAnimationDelay = (index) => {
  //   // calculate delay time for each section
  //   return index * 500; // adjust delay time as needed
  // };

  
  
  return (
    <Layout>
      <main>
      <StaticQuery 
            query={graphql`
            query {
              wpPage(id: {eq: "cG9zdDo0MA=="}) {
                id
                slug
                title
                homeSlider {
                  sliderHeading
                  sliderSubheading
                }
                homeAboutSection {
                  heading
                  image {
                    sourceUrl
                  }
                  shortDescription
                }
                homePartnerSection {
                  partnerHeading
                  supportersHeading                  
                  partner {
                    partnerImage {
                      sourceUrl
                    }
                    siteUrl
                  }
                }
                homeNews {
                  newsHeading
                  newsSubheading
                }
              }

              allWpNews(sort: {date: ASC}, limit: 2) {
                edges {
                  node {
                    id
                    title
                    author {
                      node {
                        name
                      }
                    }
                    newsSection {
                      
                      imageArchivePage {
                        sourceUrl
                      }
                    }
                    excerpt
                    slug
                    date(formatString: "DD MMMM yyyy")
                  }
                }
              }
              }
            `}

            

            render={data => (
              
              <>

              {/* <MyComponent /> */}
              {/* <MyComponent /> */}

<section className="banner_sec" style={{ backgroundImage: `url(../../bnerimg.png)` }}>
			
			<div className="our_banner_top">
				<div className="container">
					<div className="row justify-content-center">
          <ReactWOW  animation='fadeInUp' duration="1s" delay='0.5s' >
                        <div className="col-md-12">
                            <div className="earth_new_mio" >
                                <img src="../../earth_wrap.png" />
                            </div>
                          
                        </div>
                        </ReactWOW>
                                                 
						<div className="col-md-12">
            
							<div className="bner_sec_text_d" >
              <ReactWOW  animation='fadeInUp' duration='1s' delay='1.5s'> 
								<div className="bner_main_tx">
									
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderHeading }} />
                
								</div>
                </ReactWOW>
							</div>
              
						</div>
            
						<div className="col-md-12">
							<div className="bnersec_txt2 bn_cvb" >
              <ReactWOW  animation='fadeInUp' duration='1s' delay='2.5s'> 
								<div className="p_txt" >
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderSubheading }} />
								</div>
               </ReactWOW>
							</div>
						</div>
                     
					</div>
				</div>
			</div>
		</section>

    {/* <MyComponent /> */}

    <section className="about_us_sec pb_100 " style={{ backgroundImage: `url(../../Banne.png)` }}>
			<div className="container">
				<div className="row align-items-center">
          {/* <div className="wow slideInLeft"> */}
          <ReactWOW animation="slideInLeft" duration="2s">
					<div className="col-md-8 " >
						<div className="about_sec_text fvg">
            
							<h1><strong>{data.wpPage.homeAboutSection.heading}</strong> us</h1>
							<div dangerouslySetInnerHTML={{ __html: data.wpPage.homeAboutSection.shortDescription }} />
              
						</div>
					</div>
          </ReactWOW>
					{/* </div> */}
				</div>
			</div>
		</section>

    

             <NewSlider />
    
        
        
        <MeetSlider />
        <section className="newroom_sec2 pt  pb">
        <div className="container">
            <div className="row" data-aos="zoom-out-up" >
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="cret_prt_toptxt">
                                <h1> <span className="titlecor">{data.wpPage.homeNews.newsHeading}</span></h1>
                                <p className="font_y">{data.wpPage.homeNews.newsSubheading}</p>
                            </div>
                        </div>
                    </div>
            <div className="row">
            {data.allWpNews.edges.map(({ node },index) => (
          <>
                <div className="col-lg-6 col-md-6 col-sm-12 pb_25">
                  {/* <div className="wow flipInY" data-wow-duration="1s"> */}
                  <ReactWOW animation="slideInUp"  duration="2s" >
                    <div className="newsec2_mnbox pb_25">
                        <img src={node.newsSection.imageArchivePage.sourceUrl} className="img-fluid" alt="" />
                        <div className="news_imgtxt">
                        <h4 dangerouslySetInnerHTML={{ __html: node.excerpt.replace(/<p>/, "<h4>").replace(/<\/p>/, "</h4>") }} />
                        </div>
                       
                    </div>
                    <div className="news_txtbx pb_25">
                        <div className="newtxtbx pb_20">
                             <div className="newculbox">
                                 <p><span><Calendar /></span>{node.date}</p>
                             </div>
                             <div className="newadminbx">
                                 <p><span><Adminlogo /></span>{node.author.node.name}</p>
                             </div>
                         </div>
                         <h4 dangerouslySetInnerHTML={{ __html: node.excerpt.replace(/<p>/, "<h4>").replace(/<\/p>/, "</h4>") }} />
                         <Link to={node.slug} className="readmorebtn" >
                                 Read more<span><ArrowRightIcon /></span>
                             </Link>
                     </div>
                     </ReactWOW>
                  {/* </div> */}
                </div>
                </>
        ))}
                
            
            </div>
        </div>
        </section>
        
              </>
         
              
            )}

            />
    </main>
    </Layout>
  )
}



export default IndexPage
