import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonial.css';

gsap.registerPlugin(ScrollTrigger);

function Testimonial() {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for eyebrow, quote & author
      gsap.from('.testimonial-anim', {
        scrollTrigger: {
          trigger: '.testimonial-section',
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
      });
    }, testimonialRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonial-section" ref={testimonialRef}>
      <div className="testimonial-container">
        <span className="testimonial-eyebrow testimonial-anim">—CLIENT</span>
        <blockquote className="testimonial-quote testimonial-anim">
          "Vindarx.studio rebuilt our platform and our internal <br className="desktop-br" />
          systems in the same quarter — and both are still <br className="desktop-br" />
          running without a single late-night call."
        </blockquote>
        <p className="testimonial-author testimonial-anim">
          — Operations Director, Cargoline Logistics
        </p>
      </div>
    </section>
  );
}

export default Testimonial;