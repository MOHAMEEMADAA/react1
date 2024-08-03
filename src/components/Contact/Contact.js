import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p>
        <i className="fas fa-map-marker-alt"></i> New York, USA
      </p>
      <p>
        <i className="fas fa-phone"></i> (123) 456-7890
      </p>

      <button className="contact-button" id="contact">Contact Me</button>
    </div>
  );
};

export default Contact;
