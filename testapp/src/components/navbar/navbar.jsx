import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';  // For styling
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" className="logo-img" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
        
        {/* About Dropdown */}
        <li 
          className="dropdown"
          onMouseEnter={toggleAboutDropdown} 
          onMouseLeave={toggleAboutDropdown}
        >
          <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
          {aboutDropdown && (
            <ul className="dropdown-content">
              <li><NavLink to="/about-us" className={({ isActive }) => isActive ? 'active-link' : ''}>About Us</NavLink></li>
              <li><NavLink to="/board" className={({ isActive }) => isActive ? 'active-link' : ''}>Board of Directors</NavLink></li>
            </ul>
          )}
        </li>

        <li><NavLink to="/partners" className={({ isActive }) => isActive ? 'active-link' : ''}>Partners</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active-link' : ''}>Services</NavLink></li>
        <li><NavLink to="/solutions" className={({ isActive }) => isActive ? 'active-link' : ''}>Solutions</NavLink></li>
        <li><NavLink to="/products" className={({ isActive }) => isActive ? 'active-link' : ''}>Products</NavLink></li>
        <li><NavLink to="/news" className={({ isActive }) => isActive ? 'active-link' : ''}>News</NavLink></li>
        <li><NavLink to="/campaign" className={({ isActive }) => isActive ? 'active-link' : ''}>Campaign</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
