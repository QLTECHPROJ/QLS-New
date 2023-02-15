import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import  "../css/style.css";
import  "../css/responsive.css";
import LinkedInIcon from "./LinkedInIcon";
import FacebookIcon from "./FacebookIcon ";
import YoutubeIcon  from "./YoutubeIcon ";
export default function Footer() {
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
            <footer>
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
                                <Link to="https://www.youtube.com/channel/UC6xhk9nI6VxQ0UJpLjDmKvA/videos"
                                  
                                  target="_blank"
                                >
                                  <span>
                                    
                                    <YoutubeIcon />
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

                            <div className="col-lg-3">
                        <div className="our_add_bar">
                          <div className="our_call">
                            <div className="img_call">
                              <div className="icon_r">
                                <img
                                  decoding="async"
                                  src={`../../call.png`}
                                />
                              </div>
                              <p></p>
                            </div>
                            <div className="cont_gt">
                              <span>Tel</span>
                              <p></p>
                              <p>
                                <a href="tel:+61862623559">+61 8 6262 3559</a>
                              </p>
                              <p></p>
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
                              <p></p>
                            </div>
                            <div className="cont_gt">
                              <span>Mob</span>
                              <p></p>
                              <p>
                                <a href="tel:+61410881616">+61 410 881 616</a>
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="our_add_bar">
                          <div className="our_call">
                            <div className="img_call">
                              <div className="icon_r">
                                <img
                                  decoding="async"
                                  src={`../../msg.png`}
                                />
                              </div>
                              <p></p>
                            </div>
                            <div className="cont_gt">
                              <span>Mail</span>
                              <p></p>
                              <p>
                                <a href="mailto:info@qlspace.com.au">
                                  {" "}
                                  info@qlspace.com.au{" "}
                                </a>
                              </p>
                              <p></p>
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
                              <p></p>
                            </div>
                            <div className="cont_gt">
                              <span>Address</span>
                              <p></p>
                              <p>
                                45 St Georges Terrace,
                                <br /> Ground Floor, Perth, WA, 6000
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className="bottom_footer pb_25">
                <div className="container">
                    <div id="block-9">
                        <div className="row">
                            <div className="col-md-7 col-lg-7 col-sm-12">
                                <div className="our_copy">
                                    <p>Copyright ©2022 SPACE. Powered By<a href="#"
                                            target="_blank"> QL Tech </a></p>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5 col-sm-12">
                                <div className="our_copy " style={{ textAlign: "center" }}>
                                    <p>All Rights Reserved<a href="#" target="_blank">
                                            Terms and Conditions Privacy Policy</a></p>
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
