import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Sections scroll handle karega agar user dusre page se aaye
  const handleSectionClick = (e, sectionId) => {
    closeMenu();
    if (location.pathname !== '/') {
      e.preventDefault();
      window.location.href = `/${sectionId}`;
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          Vindarx<span className="x">.studio</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#services" onClick={(e) => handleSectionClick(e, '#services')}>Services</a>
          </li>
          <li>
            <a href="#process" onClick={(e) => handleSectionClick(e, '#process')}>Process</a>
          </li>
          <li>
            <a href="#work" onClick={(e) => handleSectionClick(e, '#work')}>Work</a>
          </li>
          <li>
            <a href="#team-section" onClick={(e) => handleSectionClick(e, '#team-section')}>Team</a>
          </li>
          <li>
            <a href="#why-us" onClick={(e) => handleSectionClick(e, '#why-us')}>Approach</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleSectionClick(e, '#contact')}>Contact</a>
          </li>

          <li>
            <a 
              href="#contact" 
              className="nav-cta" 
              onClick={(e) => handleSectionClick(e, '#contact')}
            >
              Start a project
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;