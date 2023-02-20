import React from 'react'
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightIcon from "./ArrowRightIcon";
//import 'bootstrap/dist/css/bootstrap.min.css';
// import WOW from 'wowjs';
// import "wowjs/css/libs/animate.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NewSlider() {
//   const [animation, setAnimation] = useState(false);

//   const handleClick = () => {
//     setAnimation(!animation);
//   };
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliderSettings, setSliderSettings] = useState({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    dots: false,
    speed: 200,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: false,
    transformEnabled: false,
    afterChange: currentSlide => setSlideIndex(currentSlide),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
<section className='solution_slider pt   '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='cret_prt_toptxt'>
                <h1>{data.wpPage.homeSolution.solutionHeading}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.homeSolution.shortDetail }} />
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className='container countindex'>
            <div class="row">
                   {/* <div className='counslidbx'>
                   <p className='coutslider'>{slideIndex + 1}/{data.allWpSolutions.totalCount}</p>
              </div> */}
              </div>
              </div>
              <div className='container slidedetail'>
                <div className='row'>
                <div className='counslidbx'>
                   <p className='coutslider'>{slideIndex + 1}/{data.allWpSolutions.totalCount}</p>
              </div>
                <div class="slider_main_top">
                  <Slider {...sliderSettings}>
                {data.allWpSolutions.edges.map(({ node },i) =>(
                                 
                                 <>
                  <div className='slidebx'>
                    <div className='slidemnbx'>
                      <div className='slideimgbx'>
                        <img src={node.solutionSection.image.sourceUrl} className='img-fluid' />
                      </div>
                      <div className='sliduptextbx'>
                        <h4>
                        {node.title}
                        </h4>
                        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                        <div className="solact_mn">
                        {/* <Link to={`../solutions#${node.id}`} className="readmorebtn" >  */}
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
              </div>
               

           
         


        </div>
      </section>
</>
         
              
            )}

            />
      
      
      
    </>
  );
}

export default NewSlider;
