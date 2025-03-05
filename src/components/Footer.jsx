import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
            <Link to="/" className="logo">The Lending Company</Link>
          <div className="footer-content">
            <div className="link-list program-list">
              <h4>Services</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/bridging-finance">Bridging Finance</Link>
                </li>
                <li>
                  <Link to="/buy-to-let">Buy to Let</Link>
                </li>
                <li>
                  <Link to="/residential-mortgages">Residential Mortgages</Link>
                </li>
                <li>
                  <Link to="/commercial-mortgages">Commercial Mortgages</Link>
                </li>
              </ul>
            </div>
            <div className="link-list">
              <h4>Company</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/configure">Configure</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="link-list social-list">
              <h4>Social</h4>
              <ul className="footer-links">
                <li>
                  <a href="/">
                    <FaFacebookF className="icon" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaInstagram className="icon" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTwitter className="icon" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedin className="icon" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-list connect-list">
              <h4>Connect</h4>
              <ul className="footer-links">
                <li>
                  <a href="tel:+123456789">
                    <FaPhone className="icon" />
                    <span>+0123456789</span>
                  </a>
                </li>
                <li>
                  <a href="mailto: ">
                    <FaEnvelope className="icon" />
                    <span>abc@company.com</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaMapMarkerAlt className="icon" />
                    <span>1234 Aviation Way, Suite 567</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <span>© 2025 The Lending Company. All Rights Reserved. The Lending Company is a marketing company for UK Lending.</span>
      </div>
    </footer>
  );
};

export default Footer;
