import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, StaticQuery } from "gatsby";
export default function about() {
  return (
    <Layout>

<StaticQuery 
            query={graphql`
            query {
                wpPage(id: {eq: "cG9zdDo0NA=="}) {
                    title
                    about {
                      aboutImage {
                        sourceUrl
                      }
                      description
                      advisorsheading
                      ouradvisors {
                        designation
                        image {
                          sourceUrl
                        }
                        linkedinurl
                        name
                      }
                      teamheading
                      ourteam {
                        designation
                        linkedinurl
                        name
                        image {
                          sourceUrl
                        }
                      }
                    }
                  }
              }
            `}

            

            render={data => (
              
<>
<main>
		<section className="breadcumb pt pb" style={{ backgroundImage: `url(../../breadcumb.png)` }}>
	    <div className="container">
	    	<div className="row">
	    		<div className="col-md-12">
	    			<div className="img_wrap_u">
	    				<img src={`../earth_power.png`} alt="earth_power" />
	    			</div>
	    			<div className="about_text">
	    				<h1>{data.wpPage.title}</h1>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	</section>
    <section className="about_us_sec pb_100 ">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="about_cntimg">
							<img src={data.wpPage.about.aboutImage.sourceUrl} className="img-fluid" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="about_sec_text">
                        <div dangerouslySetInnerHTML={{ __html: data.wpPage.about.description }} />
						</div>
					</div>

				</div>
			</div>
		</section>

        <section className="creative_sec">
			<div className="create_partnr1 pt_100">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="cret_prt_toptxt">
                            <div dangerouslySetInnerHTML={{ __html: data.wpPage.about.teamheading }} />
							</div>
						</div>
					</div>
					<div className="row">

                    {data &&
                    data.wpPage &&
                    data.wpPage.about &&                    
                    data.wpPage.about.ourteam.map((prop, i) => {
                      return (
                        <>
                            <div className="col-lg-3 col-md-3 col-sm-3">
							<div className="creat_partner">
								<div className="partner_mainbx">
									<div className="partnr_imgbx">
										<img src={prop.image.sourceUrl} className="img-fluid" alt="raj" />
									</div>
									<div className="partner_txt">
										<div className="our_part_txt">
											<h4>{prop.name}</h4>
											<p>{prop.designation}</p>
										</div>
										<div className="social_txt">
											
                                                <Link to={prop.linkedinurl} target="_blank">
												<img src={`../../linkdinf.png`} alt="linkdinf" />
                                                </Link>
											
										</div>
									</div>
								</div>
							</div>
						</div>
                        </>     
                         
                      
                      
                        
                    
                    )
                    })}

						
						
					</div>
				</div>
			</div>
			<div className="create_partnr2 pb_100">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 pt-5">
							<div className="cret_prt_toptxt">
                            <div dangerouslySetInnerHTML={{ __html: data.wpPage.about.advisorsheading }} />
							</div>
						</div>
					</div>
					<div className="row">
                    {data &&
                    data.wpPage &&
                    data.wpPage.about &&                    
                    data.wpPage.about.ouradvisors.map((prop, i) => {
                      return (
                        <>

                            <div className="col-lg-3 col-md-3 col-sm-3">
                                    <div className="creat_partner">
                                        <div className="partner_mainbx">
                                            <div className="partnr_imgbx">
                                                <img src={prop.image.sourceUrl} className="img-fluid" alt="raj" />
                                            </div>
                                            <div className="partner_txt">
                                                <div className="our_part_txt">
                                                    <h4>{prop.name}</h4>
                                                    <p>{prop.designation}</p>
                                                </div>
                                                <div className="social_txt">
                                                <Link to={prop.linkedinurl} >
												<img src={`../../linkdinf.png`} alt="linkdinf" />
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
						    </div>
                        </>     
                         
                    
                         )
                         })}
						
						
					</div>
				</div>
			</div>
		</section>
    </main>
</>
         
              
            )}

            />
      
    </Layout>
  )
}
