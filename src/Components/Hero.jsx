import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './Hero.css';
import HeroTerminal from './HeroTerminal';

function Hero() {
  const heroRef = useRef(null);

  // Smooth GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from('.eyebrow', { opacity: 0, y: -20, delay: 0.2 })
        .from('.hero-title-text', { opacity: 0, y: 30, stagger: 0.2 }, '-=0.6')
        .from('.hero-desc', { opacity: 0, y: 20 }, '-=0.6')
        .from('.hero-buttons', { opacity: 0, y: 20 }, '-=0.6')
        .from('.right-side', { opacity: 0, scale: 0.95 }, '-=0.6')
        .from('.scrolldown', { opacity: 0 }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="light-side">
          <span className="eyebrow">—IT & PRODUCT STUDIO, EST. 2026</span>
          
          <h1>
            <span className="hero-title-text">We engineer the </span><br />
            <span className="hero-title-text">digital backbone </span><br />
            <span className="hero-title-text"><span className="highlight">for</span> ambitious teams.</span>
          </h1>

          <p className="hero-desc">
            Vindarx.studio designs and builds websites, applications, and <br className="desktop-br" />
            IT infrastructure for companies that treat software as <br className="desktop-br" />
            core business — not overhead.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Start a project &rarr;
            </a>
            <button className="btn-secondary" onClick={handleScrollToWork}>
              See our work
            </button>
          </div>
        </div>

        <div className="right-side">
          <HeroTerminal />
        </div>
      </div>

      <div className="scrolldown">
        <div className="bar"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
}

export default Hero;