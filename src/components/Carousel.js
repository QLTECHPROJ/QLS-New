import React, { useEffect } from "react";
import $ from "jquery";
import "owl.carousel";

const Carousel = () => {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  }, []);

  return (
    <div className="owl-carousel">
      <div>Your Content</div>
      <div>Your Content</div>
      <div>Your Content</div>
      <div>Your Content</div>
      <div>Your Content</div>
    </div>
  );
};

export default Carousel;
