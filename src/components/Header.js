

// New code

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";
import ReactModal from "react-modal";
import { Button } from "react-bootstrap";
import ContactModal from "./ContactModal";

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
  animation: ${slideInLeft} 0.7s ease-in-out;
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

  // let subtitle;
  //  const [modalIsOpen, setIsOpen] = React.useState(false);

  //  function openModal() {
  //    //setIsOpen(true);
  //    setIsOpen(!open);
  //  }

 

  //  function closeModal() {
  //    setIsOpen(false);
  //  }

   

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
                                    <ContactModal />
                
                    
                    
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
