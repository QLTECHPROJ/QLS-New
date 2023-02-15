import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby";
const ContactModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModalOpen = () => setShowModal(true)
  const handleModalClose = () => setShowModal(false)

  return (
    <>
      

<div class="our_conts_btn">
               
                    <div class="btn_ery">
                    <Link to=""  onClick={handleModalOpen}>Contact Us</Link>
                    </div>
                </div>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="header_Gf text-center">
              <h2 style={{ color: "#00D4FF" }}>Get in Touch</h2>
              <p>Fill up the form our team will get back to you within 24 Hours</p>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="fomr_drf">
          <iframe
                             id="myIframe"
                             src="http://steamlinedesign.com/suchi/qlspacenew/contact/"
                             frameborder="0" width="400"
                             height="400"
                           ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ContactModal
