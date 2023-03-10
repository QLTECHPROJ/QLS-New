import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import  "../css/style.css";
import  "../css/responsive.css";
import LinkedInIcon from "./LinkedInIcon";
import FacebookIcon from "./FacebookIcon ";
import YoutubeIcon  from "./YoutubeIcon ";
import Twitter from "./Twitter";
import Instgram from "./Instgram";
import { useEffect, useState } from "react";
export default function Footer() {

  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight
      setIsAtBottom(isBottom)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
           

            wpMenu(id: { eq: "dGVybTozNQ==" }) {
              menuItems {
                nodes {
                  label
                  url

                  id
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            <footer id="footer_wrap">
            <div class="footer_sec pt_50 ">
                <div class="container">
                    <div id="block-8">
                        <div class="row pb_25">
                            <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="our_cont_arer">
                                    <div class="logo_footer text-start pb_20">
                                        <Link to="/">
                              <img src="../logo.png"
                                                alt="footerlogo" class="img-fluid" />
                            </Link>
                                        
                                    </div>
                                    <div class="footer_about pb_20">
                                        <p>Our goal is to develop cutting-edge space technology that accomplishes the
                                            incredible.</p>
                                        <p></p>
                                    </div>
                                    <div className="social_list pb_20">
                            <ul>
                            <li>
                                <Link to=""
                                  
                                  target="_blank"
                                >
                                  <span>
                                    <FacebookIcon />
                                    <br />
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link to="https://www.linkedin.com/company/qlspace"
                                  
                                  target="_blank"
                                >
                                  <span>
                                    <LinkedInIcon />
                                    <br />
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link to=""
                                  
                                  target="_blank"
                                >
                                  <span>
                                    
                                    <Twitter />
                                    <br />
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link to="https://www.youtube.com/channel/UC6xhk9nI6VxQ0UJpLjDmKvA/videos"
                                  
                                  target="_blank"
                                >
                                  <span>
                                    
                                    <YoutubeIcon />
                                    <br />
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link to=""
                                  
                                  target="_blank"
                                >
                                  <span>
                                    
                                    <Instgram />
                                    <br />
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="our_pages_link">
                                   <div class="list_pages">
                                        <ul>
                              {data &&
                                data.wpMenu &&
                                data.wpMenu.menuItems &&
                                data.wpMenu.menuItems.nodes.map((prop, i) => {
                                  return (
                                    <>
                                      {
                                        <>
                                          {prop.label == "home" ? (
                                            <li>
                                              <Link to={"/"}>{prop.label}</Link>
                                            </li>
                                          ) : (
                                            <li>
                                              <Link
                                                to={
                                                  "/" +
                                                  prop.label
                                                    .replace(/\s+/g, "_")
                                                    .replace("'", "")
                                                    .toLowerCase()
                                                }
                                              >
                                                {prop.label}
                                              </Link>
                                            </li>
                                          )}
                                        </>
                                      }
                                    </>
                                  );
                                })}
                            </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="our_add_bar">
                          <div className="our_call">
                            <div className="img_call">
                              <div className="icon_r">
                                <img
                                  decoding="async"
                                  src={`../../msg.png`}
                                />
                              </div>
                              
                            </div>
                            <div className="cont_gt">
                              <span>Mail</span>
                              
                              <p>
                                <a href="mailto:info@qlspace.com.au">
                                  {" "}
                                  info@qlspace.com.au{" "}
                                </a>
                              </p>
                              
                            </div>
                          </div>
                          <div className="our_call">
                            <div className="img_call">
                              <div className="icon_r">
                                <img
                                  decoding="async"
                                  src={`../../location.png`}
                                />
                              </div>
                             
                            </div>
                            <div className="cont_gt">
                              <span>Address</span>
                              
                              <p>
                                45 St Georges Terrace,
                                <br /> Ground Floor, Perth, WA, 6000
                              </p>
                              
                            </div>
                          </div>
                        </div>
                      </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="our_add_bar">
                          <div className="our_call">
                            <div className="img_call">
                              <div className="icon_r">
                                <img
                                  decoding="async"
                                  src={`../../call.png`}
                                />
                              </div>
                              
                            </div>
                            <div className="cont_gt">
                              <span>Tel</span>
                              
                              <p>
                                <a href="tel:+61862623559">+61 8 6262 3559</a>
                              </p>
                              
                            </div>
                          </div>
                          <div className="our_call">
                            <div className="img_call">
                              <div className="icon_r">
                                <img
                                  decoding="async"
                                  src={`../../call.png`}
                                />
                              </div>
                             
                            </div>
                            <div className="cont_gt">
                              <span>Mob</span>
                              
                              <p>
                                <a href="tel:+61410881616">+61 410 881 616</a>
                              </p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      
                        </div>
                    </div>


                </div>

            </div>
                               
           
              
                  {/* <div className="inner_bottom">
                    <Link to='#footer_wrap'>
                                <img src={`../../arrowdown.svg`} />
                    </Link>
                  </div> */}
                  
              
                  <div>
      {isAtBottom ? (
        <div className="inner_bottom">
          <Link to='#header_wrap' onClick={() => setIsAtBottom(false)}>
            <img src={`../../arrowdown1.svg`} />
          </Link>
        </div>
      ) : (
        <div className="inner_bottom">
          <Link to='#footer_wrap' onClick={() => setIsAtBottom(true)}>
            <img src={`../../arrowdown.svg`} />
          </Link>
        </div>
      )}
      {/* <div id="header_wrap">Header content goes here</div>
      <div id="footer_wrap">Footer content goes here</div> */}
    </div>
            

            <div className="bottom_footer pb_25">
                <div className="container">
                    <div id="block-9">
                        <div className="row">
                            <div className="col-md-6 col-lg-7 col-sm-12">
                                <div className="our_copy">
                                    <p>Copyright ??2022 SPACE. Powered By <Link to="" 
                                            target="_blank"> QL Tech </Link></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-sm-12">
                                <div className="our_copy hgbd " style={{ textAlign: "center" }}>
                                    <p>All Rights Reserved <Link to=""  target="_blank">
                                            Terms and Conditions Privacy Policy</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

            </div>

        </footer>
          </>
        )}
      />
    </>
  );
}
