// import React from "react";
// import { Link, StaticQuery, graphql } from "gatsby";
// import "react-bootstrap";
// import ReactModal from "react-modal";

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// export default function Header() {

//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (

//             <StaticQuery
//               query={graphql`
//                 query {
//                   wpMenu(id: { eq: "dGVybTozNQ==" }) {
//                     id
//                     menuItems {
//                       nodes {
//                         id
//                         label
//                       }
//                     }
//                   }

//                 }
//               `}
//               render={(data) => (
//                 <>
//   <header id="myHeader">
// 		<div className="main_header">
// 			 <nav className="navbar navbar-expand-lg navbar-light" >
// 			  <div className="container">

// 			    <Link to={"/"} className="navbar-brand logo">
// 			    	<img src="../logo.png" alt="logo" />
// 			    </Link>
// 			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarTogglerDemo02" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
// 			      <span className="navbar-toggler-icon"></span>
// 			    </button>
// 			    <div className="collapse navbar-collapse justify-content-end header_l" id="navbarTogglerDemo02">
// 			      <ul className="navbar-nav  mb-2 mb-lg-0">
//                   {data &&
//                     data.wpMenu &&
//                     data.wpMenu.menuItems &&
//                     data.wpMenu.menuItems.nodes.map((prop, i) => {
//                       return (
//                         <>
//                         { (
//                           <>
//                           {(prop.label == 'Home') ? (
//                             <li className="nav-item">
//                               <Link to={"/"} className="nav-link" activeClassName="active">{prop.label}</Link>
//                             </li>
//                           ) : (
//                             <li className="nav-item">
//                               <Link to={"/"+prop.label.replace(/\s+/g, '_').replace("'", '').toLowerCase()} className="nav-link" activeClassName="active">{prop.label}</Link>
//                             </li>
//                           )}
//                           </>
//                         )}
//                         </>

//                     )
//                     })}
//                           </ul>

//            </div>
//            <div className="nav-item cntbutton" id="main">
//                     <button
//                       onClick={openModal}
//                       className="btn btn-primary cnt cont_btn"
//                     >
//                       <span>Contact Us</span>
//                     </button>

//                     <ReactModal
//                       isOpen={modalIsOpen}
//                       onAfterOpen={afterOpenModal}
//                       onRequestClose={closeModal}
//                       style={customStyles}
//                       contentLabel="Example Modal"
//                     >
//                       <div className="col-md-6">
//                         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
//                           Hello
//                         </h2>
//                         <button onClick={closeModal}>close</button>
//                         <div className="form_get_touch">
//                           <iframe
//                             id="myIframe"
//                             src="http://localhost/qlspace-new/contact/"
//                             frameborder="0"
//                           ></iframe>
//                         </div>
//                       </div>
//                       {/* <div>I am a modal</div> */}
//                     </ReactModal>
//                   </div>

//          </div>
//        </nav>
//      </div>
//    </header>

//                 </>

//               )}

//             />

//   );
// }

// New code

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";
import ReactModal from "react-modal";
import { Button } from "react-bootstrap";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  
  },
};
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 10;
  animation: ${slideInLeft} 0.3s ease-in-out;
`;

const Menu = styled.ul`
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled.li`
  margin: 10px 0;
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  let subtitle;
   const [modalIsOpen, setIsOpen] = React.useState(false);

   function openModal() {
     //setIsOpen(true);
     setIsOpen(!open);
   }

  //  function afterOpenModal() {
      
  //    subtitle.style.color = '#f00';
  //  }

   function closeModal() {
     setIsOpen(false);
   }

   

  return (
    <StaticQuery
      query={graphql`
        query {
          wpMenu(id: { eq: "dGVybTozNQ==" }) {
            id
            menuItems {
              nodes {
                id
                label
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <header className="new_header">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="our_menu">
                    <div className="menm_bar">
                      <span
                        className="our_spanb"
                        onClick={() => setOpen(!open)}
                      >
                        &#9776;
                      </span>
                      {/* <button onClick={() => setOpen(!open)}>Toggle</button> */}
                      <div id="myNav" className="overlay">
                        <Overlay open={open} onClick={() => setOpen(false)}>
                          <Link
                            to=""
                            open={open}
                            onClick={() => setOpen(false)}
                            className="closebtn"
                          >
                            &times;
                          </Link>
                          {/* <Menu> */}
                          <div class="overlay-content">
                            <div class="list_wear">
                              <ul>
                                {data &&
                                  data.wpMenu &&
                                  data.wpMenu.menuItems &&
                                  data.wpMenu.menuItems.nodes.map((prop, i) => {
                                    return (
                                      <>
                                        {
                                          <>
                                            {prop.label == "Home" ? (
                                              <li>
                                                <Link
                                                  to={"/"}
                                                  className="nav-link"
                                                  activeClassName="active"
                                                >
                                                  {prop.label}
                                                </Link>
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
                                                  className="nav-link"
                                                  activeClassName="active"
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
                          {/* </Menu> */}
                        </Overlay>
                      </div>
                    </div>

                    <div class="log_menu">
                    <div class="logo_sec">
                    <a href="#">
                        <img src="../logo.png" alt="logomain" />
                    </a>
                </div>
                </div>

                <div class="our_conts_btn">
               
                    <div class="btn_ery">
                    <Link to=""  onClick={openModal}>Contact Us</Link>
                    </div>
                </div>
                    {/* <button
                       onClick={openModal}
                       className="btn btn-primary cnt cont_btn"
                     >
                       <span>Contact Us</span>
                     </button> */}
                     
                     {/* <Link onClick={openModal} className="btn btn-primary cnt cont_btn" role={Button}><span>Contact Us</span></Link> */}
                     <ReactModal
                       isOpen={modalIsOpen}
                       //onAfterOpen={afterOpenModal}
                       onRequestClose={closeModal}
                       style={customStyles}
                       contentLabel="Example Modal"
                     >

<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content" style={{backgroundColor:"#0B0C10"}}>
      <div class="modal-header">
        <button type="button" class="btn-close" onClick={closeModal} aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <div class="header_Gf text-center">
           <h2 style={{ color: "#00D4FF" }}>Get in Touch</h2>
               <p>Fill up the form our team will get back to you within 24 Hours</p>
           </div>
           <div class="fomr_drf">
           <iframe
                             id="myIframe"
                             src="http://steamlinedesign.com/suchi/qlspacenew/contact/"
                             frameborder="0"
                           ></iframe>
           </div>
      </div>
    
    </div>
  </div>

                       {/* <div className="col-md-6">
                         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                           Hello
                         </h2>
                         <button onClick={closeModal}>close</button>
                         <div className="form_get_touch">
                           <iframe
                             id="myIframe"
                             src="http://localhost/qlspace-new/contact/"
                             frameborder="0"
                           ></iframe>
                         </div>
                       </div> */}
                       {/* <div>I am a modal</div> */}
                     </ReactModal>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      )}
    />
  );
};

export default Header;
