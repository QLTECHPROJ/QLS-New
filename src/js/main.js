$(document).ready(function() {
            $('#partners').owlCarousel({
          loop:true,
          margin:30,
          nav:false,
          autoplay:true,
          dots: true,
          items:4,
          slideBy: 4,
            responsive: {
                0:{
                  items: 2,
                },
                480:{
                  items: 3,
                },
                769:{
                  items: 4,
                },
                991:{
                  items: 4,
                }
            }
      })
      })
function openNav() {
          document.getElementById("myNav").style.width = "100%";
        }

        function closeNav() {
          document.getElementById("myNav").style.width = "0%";
        }


        
document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});



//  const element = document.querySelector('.bnersec_txt2');

// element.addEventListener('animationend', function() {
//   this.classList.add('visbale2');
// });

// const element2 = document.querySelector('.bner_sec_text_d');

// element2.addEventListener('animationend', function() {
//   this.classList.add('visbale1');
// });



$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
window.onscroll = function() {myFunction()};

var header = document.getElementById("my_header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function showAccordion(ele) {
  const elementId = document.getElementById(ele);
  elementId.style.display = "block";
}
function hideAccordion(ele) {
  const elementId = document.getElementById(ele);
  elementId.style.display = "none";
}
 function removeColor(ele) {
  const elementId = document.getElementById(ele);
     elementId.style.background = "none";
     elementId.style.borderRadius = "none";
     elementId.style.padding = "0";
     elementId.style.display = "block";
     elementId.style.margin = "0";
}
function changColor(ele) {
  const elementId = document.getElementById(ele);
  elementId.style.background = "#023558";  
  elementId.style.borderRadius = "0px 0px 20px 20px";
  elementId.style.padding = "20px 15px";
  elementId.style.display = "block";
  elementId.style.margin = "-20px 0 0 0";
}