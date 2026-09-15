import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);
  const location = useLocation();

  // Scroll to section handler
  const handleSectionClick = (e, sectionId) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      window.location.href = `/${sectionId}`;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up animation for footer main content
      gsap.from('.footer-main', {
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">
        {/* Main Links Row */}
        <div className="footer-main">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Vindarx<span className="highlight">.studio</span>
            </Link>
            <p className="footer-desc">
              A digital product studio for websites, <br className="desktop-br" />
              apps, and IT infrastructure — built to last <br className="desktop-br" />
              past launch day.
            </p>
          </div>

          {/* Column 1: Studio */}
          <div className="footer-col">
            <h4 className="col-title">STUDIO</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#services" onClick={(e) => handleSectionClick(e, '#services')}>Services</a></li>
              <li><a href="#work" onClick={(e) => handleSectionClick(e, '#work')}>Work</a></li>
              <li><a href="#process" onClick={(e) => handleSectionClick(e, '#process')}>Process</a></li>
              <li><a href="#approach" onClick={(e) => handleSectionClick(e, '#approach')}>Approach</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col">
            <h4 className="col-title">SERVICES</h4>
            <ul>
              <li><a href="#services" onClick={(e) => handleSectionClick(e, '#services')}>Web development</a></li>
              <li><a href="#services" onClick={(e) => handleSectionClick(e, '#services')}>App development</a></li>
              <li><a href="#services" onClick={(e) => handleSectionClick(e, '#services')}>IT infrastructure</a></li>
              <li><a href="#services" onClick={(e) => handleSectionClick(e, '#services')}>UI/UX design</a></li>
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div className="footer-col">
            <h4 className="col-title">CONNECT</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/swe_yashhh?stkn=MTE5ZTloNDdtZWtiNQ==" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>Instagram</span>
                  <span className="arrow">&#8599;</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>LinkedIn</span>
                  <span className="arrow">&#8599;</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>Twitter / X</span>
                  <span className="arrow">&#8599;</span>
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>GitHub</span>
                  <span className="arrow">&#8599;</span>
                </a>
              </li>
              <li><a href="mailto:hello@vindarx.com" className="email-link">hello@vindarx.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom">
          <p>&copy; 2026 Vindarx.studio Technologies. All rights reserved.</p>
          <div className="footer-social-icons">
            {/* Instagram */}
            <a href="https://www.instagram.com/swe_yashhh?stkn=MTE5ZTloNDdtZWtiNQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
          <p className="intent-tag">Made with intent, not templates.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;