import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightIcon from "./ArrowRightIcon";
//import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs';
import "wowjs/css/libs/animate.css"

function SolutionSlider() {
  useEffect(() => {
    new WOW.WOW().init()
  }, [])
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliderSettings, setSliderSettings] = useState({
    slidesToShow: 3,
    slidesToScroll: 1,
    //centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: "0px",
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    afterChange: (currentSlide) => setSlideIndex(currentSlide),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  return (
    
    <>
    <StaticQuery 
            query={graphql`
            query {
              wpPage(id: {eq: "cG9zdDo0MA=="}) {
                id
                homeSolution {
                  solutionHeading
                  shortDetail
                }
              }
                  
              allWpSolutions {
                totalCount                
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

            

            render={data => (
              
<>

      <section class="solution_slider pt  pb" id="message">
        <div id="snow"></div>
        
       
        <div className="container">
          <div className="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="cret_prt_toptxt">
                <h1>
                
                  
                  <span class="titlecor">{data.wpPage.homeSolution.solutionHeading}</span>
                </h1>
                <p class="font_y nt_rgd">
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.homeSolution.shortDetail }} />
                {/* <p className="font_y nt_rgd" dangerouslySetInnerHTML={{ __html: data.wpPage.homeSolution.shortDetail.replace(/<p>/, "<h4>").replace(/<\/p>/, "</h4>") }} /> */}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="counslidbx">
              <p className="coutslider">{slideIndex + 1}/{data.allWpSolutions.totalCount}</p>
            </div>
            <Slider {...sliderSettings}>

            {data.allWpSolutions.edges.map(({ node },i) =>(
                           
                           <>
              <div className="slidebx">
                <div className="slidemnbx">
                  <div className="slideimgbx">
                  {/* <div className="wow bounceInUp"> */}
                    <img src={node.solutionSection.image.sourceUrl} className="img-fluid" />
                    {/* </div> */}
                  </div>
                  <div className="sliduptextbx">
                    <h4>{node.title}</h4>
                    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    
                    <div className="solact_mn">
                      <Link to='../solutions' className="readmorebtn" >
                        Read More
                        <span>
                          <ArrowRightIcon />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </>
        				))}
            </Slider>
          </div>
        </div>
        
      </section>
      </>
         
              
         )}

         />
    </>
  );
}

export default SolutionSlider;
