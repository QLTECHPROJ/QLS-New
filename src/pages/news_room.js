import React from "react";
import Layout from "../components/Layout";
import { Link, graphql, StaticQuery } from "gatsby";
import ArrowRightIcon from "../components/ArrowRightIcon";
import Calendar from "../components/Calendar";
import Adminlogo from "../components/Adminlogo";
export default function news_room() {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query {
            allWpNews{
              edges {
                node {
                  id
                  slug
                  title
                  excerpt
                  date(formatString: "DD MMMM yyyy")
                  newsSection {
                    imageArchivePage {
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
            <main>
              <section className=" Newsroom_banner_sec">
                <div
                  className="banersec__bg"
                  style={{ backgroundImage: `url(../../bnerimg.png)` }}
                ></div>
                <div className="newsrom_top">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <div className="Newsroom_titlext pb_25">
                          <h1>
                            <span className="titlecolor">NEWS FROM</span> QL SPACE
                          </h1>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
              </section>
                    
              <section class="newroom_sec2">
        <div class="container"> 
             <div class="row">
                      
                    {data.allWpNews.edges.map(({ node},i) => (
                      
                      <>
                      
                      {(i==0) ? (
<>
                        
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="news_txtbx pb_25">
                              {/* <h3>{node.excerpt}</h3> */}
                              {/* <h3 dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                              <h3 dangerouslySetInnerHTML={{ __html: node.excerpt.replace(/<p>/, "<h3>").replace(/<\/p>/, "</h3>") }} />

                              <div className="newtxtbx pb_25">
                                <div className="newculbox">
                                  <p>
                                    <span>
                                      <Calendar />
                                    </span>
                                    {node.date}
                                  </p>
                                </div>
                                <div className="newadminbx">
                                  <p>
                                    <span>
                                    <Adminlogo />
                                    </span>
                                    Admin
                                  </p>
                                </div>
                              </div>
                              <Link to={"/"+node.slug} className="readmorebtn" >
                                Read more
                                <span>
                                  <ArrowRightIcon />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="newroomimg_bx">
                              <img
                                src={
                                  node.newsSection.imageArchivePage.sourceUrl
                                }
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        
</>

) : (
<>

                <div class="col-lg-6 col-md-6 col-sm-12 pb_25">
                    <div class="newsec2_mnbox pb_25">
                        <img src={
                                  node.newsSection.imageArchivePage.sourceUrl
                                } class="img-fluid" alt="" />
                        <div class="news_imgtxt">
                            {/* <h4>{node.excerpt}</h4> */}
                            {/* <h4 dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
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
                         <h4>{node.title}</h4>
                         <Link to={"/"+node.slug} class="readmorebtn">
                                 Read more<span><ArrowRightIcon /></span>
                             </Link>
                     </div>
                </div>
                
            
</>

)}

                      </>
                      
                    ))}
                    
                    </div>
        </div>
        </section> 
            </main>
          </>
        )}
      />
    </Layout>
  );
}
