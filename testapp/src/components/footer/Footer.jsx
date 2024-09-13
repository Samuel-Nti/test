import React from 'react';
import './Footer.css'; // Custom styling for the footer
import certifiedIcon from '../../assets/certified.png'; // Import the certified by icon
import logo from '../../assets/logo.png'; // Import the company logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </div>
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>No. 11 Ajenuloo Lane, Nyadji Crescent, Asylum Down, Accra, Ghana.</p>
          <p>+233 307 000 125</p>
          <p><a href="mailto:info@globalaccelerex.com.gh">info@globalaccelerex.com.gh</a></p>
        </div>
        <div className="certified-by">
          <img src={certifiedIcon} alt="Certified By" className="certified-icon" />
          <p>Certified By</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/data-privacy">Data Privacy Statement</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Solutions</h4>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/solutions">Solutions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="/pos-terminals">PoS Terminals</a></li>
            <li><a href="/request-pos">Request For PoS</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/news">News & Updates</a></li>
            <li><a href="/board-of-directors">Board Of Directors</a></li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom-text">
        <p>In the business quest to uphold good corporate governance and ethical standards whilst reporting discreetly and anonymously. Please report any unethical and or complaints to <a href="mailto:whistleblower@globalaccelerex.com.gh">whistleblower@globalaccelerex.com.gh</a></p>
        </div>
        <hr className="footer-divider" />
        <div className='allright'>
            <p>© 2020 Global Accelerex Ghana Limited. | All Rights Reserved</p>
            </div>
     
      <div className="socials">
        <a href="https://facebook.com" className="social-icon">Facebook</a>
        <a href="https://twitter.com" className="social-icon">Twitter</a>
        <a href="https://linkedin.com" className="social-icon">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
