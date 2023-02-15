import React, { useState } from "react";
import { Modal } from "bootstrap";
const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => showModal(false)
  return (
    <>
      <div className="our_conts_btn">
        <div className="btn_ery">
          <a
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
            onClick={() => setShowModal(true)}
          >
            Contact Us
          </a>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <div className="header_Gf text-center">
                <h2 style={{ color: "#00D4FF" }}>Get in Touch</h2>
                <p>Fill up the form our team will get back to you within 24 Hours</p>
              </div>
              <div className="fomr_drf">
                <form>
                  <div className="mb-3 gth ftr_from1">
                    <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Name" />
                  </div>
                  <div className="mb-3 gth ftr_from2">
                    <input type="text" className="form-control" id="email" aria-describedby="name" placeholder="Phone Number" />
                  </div>
                  <div className="mb-3 gth ftr_from3">
                    <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Email Address" />
                  </div>
                  <div className="mb-3 gth ftr_from4">
                    <input type="text" className="form-control" id="email" aria-describedby="name" placeholder="Company Name" />
                  </div>
                  <div className="mb-3 gth ftr_from5">
                    <input type="text" className="form-control" id="email" aria-describedby="name" placeholder="Position" />
                  </div>
                  <div className="mb-3 gth ftr_from6">
                    <textarea className="form-control" placeholder="Message" id="floatingTextarea"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
