import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CtaBanner.css';

gsap.registerPlugin(ScrollTrigger);

function CtaBanner() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card Container entrance
      gsap.from('.cta-card', {
        scrollTrigger: {
          trigger: '.cta-card',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      // Inner elements stagger entrance with clearProps to guarantee button visibility
      gsap.from('.cta-anim', {
        scrollTrigger: {
          trigger: '.cta-card',
          start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.2,
        ease: 'power3.out',
        clearProps: 'all', 
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-section" id="contact" ref={ctaRef}>
      <div className="cta-container">
        <div className="cta-card">
          <span className="cta-eyebrow cta-anim">—LET'S BUILD</span>
          <h2 className="cta-title cta-anim">
            Tell us what you're building. <br className="desktop-br" />
            We'll tell you what it takes.
          </h2>
          <p className="cta-subtext cta-anim">
            Website, app, or full IT infrastructure — a senior engineer <br className="desktop-br" />
            reviews every inquiry within one business day.
          </p>
          <a href="mailto:hello@vindarx.com" className="cta-btn cta-anim">
            hello@vindarx.com &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;