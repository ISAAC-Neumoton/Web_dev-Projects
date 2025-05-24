import React from "react";
import "./Contact.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-watermark">CONTACT</div>
        <div className="my-contact">
            <div className="contact">
              <div className="contact-info">
              <h2>NAME: <span>Umoh Isaac Joseph</span></h2>
              <h2>PHONE: <span>+234 810 123 4567</span></h2>
              <h2>ADDRESS: <span>Uyo, Akwa Ibom State, Nigeria</span></h2>
            </div>

            {/* ✅ Properly Added Social Icons */}
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href="mailto:issacujay123@gmail.com">
                <SiGmail className="icon" />
              </a>
            </div>
        </div>
      </div>
          

      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
