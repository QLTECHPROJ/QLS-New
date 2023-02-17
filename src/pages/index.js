import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Layout from "../components/Layout"
//import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap" ;
import { useState, useEffect } from "react";


import ArrowRightIcon from "../components/ArrowRightIcon";
import MeetSlider from "../components/MeetSlider";


import ReactWOW from 'react-wow'

import Calendar from "../components/Calendar";
import Adminlogo from "../components/Adminlogo";
import NewSlider from "../components/NewSlider";


const IndexPage = ({ data }) => {
 

  // const [visible, setVisible] = useState(false);
  // const [visibles, setVisibles] = useState(false);
  
  // useEffect(() => {
  //   const element = document.querySelector(".bner_sec_text_d");
  //   element.addEventListener("animationend", () => {
  //     setVisible(true);
  
  //     setTimeout(() => {
  //       const elements = document.querySelector(".bnersec_txt2");
  //       elements.addEventListener("animationend", () => {
  //         setVisibles(true);
  //       });
  //     }, 500); // delay the second animation by 500ms
  //   });
  
  //   return () => {
  //     element.removeEventListener("animationend", () => {
  //       setVisible(true);
  //     });
  //   };
  // }, []);
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

<section class="banner_sec" style={{ backgroundImage: `url(../../bnerimg.png)` }}>
			
			<div class="our_banner_top">
				<div class="container">
					<div class="row justify-content-center">
          <ReactWOW  animation='fadeInUp'>
                        <div class="col-md-12">
                            <div class="earth_new_mio" >
                                <img src="../../earth_wrap.png" />
                            </div>
                          
                        </div>
                        </ReactWOW>
                         <ReactWOW delay='0.4s' animation='fadeInUp'>            
						<div class="col-md-12">
							<div class="bner_sec_text_d"  >
                 
								<div class="bner_main_tx">
									
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderHeading }} />
                
								</div>
                
							</div>
						</div>
            </ReactWOW>
						<div class="col-md-12">
							<div class="bnersec_txt2 bn_cvb">
              <ReactWOW delay='0.8s' animation='fadeInUp'> 
								<div class="p_txt">
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderSubheading }} />
								</div>
               </ReactWOW>
							</div>
						</div>
                     
					</div>
				</div>
			</div>
		</section>

    <section class="about_us_sec pb_100 " style={{ backgroundImage: `url(../../Banne.png)` }}>
			<div class="container">
				<div class="row align-items-center">
          <div className="wow slideInLeft">
					<div class="col-md-8 " >
						<div class="about_sec_text fvg">
            
							<h1><strong>{data.wpPage.homeAboutSection.heading}</strong> us</h1>
							<div dangerouslySetInnerHTML={{ __html: data.wpPage.homeAboutSection.shortDescription }} />
              
						</div>
					</div>
					</div>
				</div>
			</div>
		</section>

    

             <NewSlider />
    
        
        
        <MeetSlider />
        <section class="newroom_sec2 pt  pb">
        <div class="container">
            <div class="row" data-aos="zoom-out-up" >
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="cret_prt_toptxt">
                                <h1> <span class="titlecor">{data.wpPage.homeNews.newsHeading}</span></h1>
                                <p class="font_y">{data.wpPage.homeNews.newsSubheading}</p>
                            </div>
                        </div>
                    </div>
            <div class="row">
            {data.allWpNews.edges.map(({ node }) => (
          <>
                <div class="col-lg-6 col-md-6 col-sm-12 pb_25" data-aos="flip-right"
     data-aos-duration="2000">
                  <div className="wow flipInY" data-wow-duration="1s">
                    <div class="newsec2_mnbox pb_25">
                        <img src={node.newsSection.imageArchivePage.sourceUrl} class="img-fluid" alt="" />
                        <div class="news_imgtxt">
                        <h4 dangerouslySetInnerHTML={{ __html: node.excerpt.replace(/<p>/, "<h4>").replace(/<\/p>/, "</h4>") }} />
                        </div>
                       
                    </div>
                    <div class="news_txtbx pb_25">
                        <div class="newtxtbx pb_20">
                             <div class="newculbox">
                                 <p><span><Calendar /></span>{node.date}</p>
                             </div>
                             <div class="newadminbx">
                                 <p><span><Adminlogo /></span>Admin</p>
                             </div>
                         </div>
                         <h4 dangerouslySetInnerHTML={{ __html: node.excerpt.replace(/<p>/, "<h4>").replace(/<\/p>/, "</h4>") }} />
                         <Link to={node.slug} class="readmorebtn" >
                                 Read more<span><ArrowRightIcon /></span>
                             </Link>
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

            />
    </main>
    </Layout>
  )
}



export default IndexPage
