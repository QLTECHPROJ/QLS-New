


import React from "react"
import Helmet from 'react-helmet'


import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.min.css";

import { withPrefix, Link } from "gatsby"
//import "../css/bootstrap.min.css";
//import "../css/all.min.css";
//import "../css/font-awesome.min.css";
//import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";
import  "../css/slider.css";
import  "../css/style.css";
import  "../css/responsive.css";

//import  "../fonts/stylesheet.css";
//import  "../font/stylesheet.css";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
  <Helmet>
  {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/> */}
  
  </Helmet>
  
      
   { <Header />}
   
    {children}
  
     {<Footer />}
    
     
  </>
  
)

export default Layout






