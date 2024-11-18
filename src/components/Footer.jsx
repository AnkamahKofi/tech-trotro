import React from "react";
import { Link, useNavigate } from "react-router-dom";
import WhatsApp from "../images/WhatsApp.png"
import Twitter from "../images/twitter.png"
import Instagram from "../images/instagram.png"


function Footer() {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = () => {
    navigate("/"); 
    setTimeout(() => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0); // a lil timeout for scroll completion
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Tech Trotro</h2>
          <p>
            Your ultimate destination for everything tech in Ghana. Explore, innovate, and stay updated with the latest in technology.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/" onClick={handleScrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <span onClick={handleAboutClick} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
                About Us
              </span>
            </li>
            <li>
              <Link to="/BlogPage">Blog</Link>
            </li>
            <li>
              <Link to="/ShopPage">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:info@techtrotro.com">info@techtrotro.com</a></p>
          <p>Phone: +233 204 254 274</p>
          <p>Address: Accra, Ghana</p>
          <div className="footer-socials">
            <a href="https://wa.me/233204254274" target="_blank" rel="noopener noreferrer">
              <img src={WhatsApp} alt="WhatsApp" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tech Trotro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
