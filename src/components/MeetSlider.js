//import React from 'react'
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Meetimg from '../image/parners1.png'
import ReactWOW from 'react-wow'
import 'animate.css';
import { Link, graphql,StaticQuery } from 'gatsby';
export default function MeetSlider() {
  
  const [MeetSettings, MeetSliderSettings] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
    //centerMode: true,
    arrows: false,
    dots:true,
    speed: 300,
    centerPadding: '0px',
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    margin:30,
    
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  return (

    <StaticQuery 
            query={graphql`
            query {
                wpPage(id: {eq: "cG9zdDo0MA=="}) {
                    id
                    slug
                    title                  
                    
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
                    
                  }
              }
            `}

            

            render={data => (
              
<>
<div>
<section class="newroom_sec2 pt ">
        <div class="container">
            <div class="row" data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                  <ReactWOW animation='fadeInUp' duration='1s'>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="cret_prt_toptxt">
                                <h1> <span class="titlecor">{data.wpPage.homePartnerSection.partnerHeading}</span></h1>
                                <p class="font_y">{data.wpPage.homePartnerSection.supportersHeading}</p>
                            </div>
                        </div>
                      </ReactWOW>
                    </div>
            <div class="row" data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <ReactWOW animation='fadeInUp' duration='1s'>
                <div class="col-md-12">
                    {/* <div class="owl-carousel owl-theme" id="partners"> */}
                    <Slider {...MeetSettings}>
              {data &&
                    data.wpPage &&
                    data.wpPage.homePartnerSection &&                    
                    data.wpPage.homePartnerSection.partner.map((prop, i) => {
                        return (
                            <>
          <>
                        <div class="item">
                          <div class="or_partner_group">
                                 <div class="imd_parner">
                                 <Link to={prop.siteUrl} >
                      <img src={prop.partnerImage.sourceUrl}  />
                      </Link>
                                 </div>
                                 <div class="imd_parner">
                                 <Link to={prop.siteUrl} >
                      <img src={prop.partnerImage.sourceUrl}  />
                      </Link>
                                 </div>
                          </div>
                        </div>
                        </>
                </>     
                         
                    
                         )
                         })}
              </Slider>
                      {/* </div> */}
                </div>
              </ReactWOW>
            </div>
        </div>
        </section>
      {/* <section class="newroom_sec2 pt  pb">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="sohome_toptxt"><h1>{data.wpPage.homePartnerSection.partnerHeading}</h1><p>{data.wpPage.homePartnerSection.supportersHeading} </p></div>
              
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <Slider {...MeetSettings}>
              {data &&
                    data.wpPage &&
                    data.wpPage.homePartnerSection &&                    
                    data.wpPage.homePartnerSection.partner.map((prop, i) => {
                        return (
                            <>
          <>
                <div class="item">
                  <div class="or_partner_group">
                    <div class="imd_parner">
                      <Link to={prop.siteUrl} >
                      <img src={prop.partnerImage.sourceUrl} className='img-fluid' />
                      </Link>
                    </div>
                    <div class="imd_parner">
                    <Link to={prop.siteUrl} >
                      <img src={prop.partnerImage.sourceUrl} className='img-fluid' />
                      </Link>
                    </div>
                  </div>
                </div>
                </>
                </>     
                         
                    
                         )
                         })}
              </Slider>
            </div>
          </div>
        </div>
      </section> */}
    </div>
</>
         
              
            )}

            />

    
  )
}
