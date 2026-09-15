import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyVindar.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'One team, not four vendors',
    description:
      'Design, engineering, and infrastructure sit in the same room — no hand-off gaps, no finger-pointing.',
  },
  {
    title: 'Senior engineers only',
    description:
      "Every project is staffed by people who've shipped production systems before, not trained on yours.",
  },
  {
    title: 'Fixed-scope, transparent pricing',
    description:
      'You get a written scope and a number before we start — and we tell you early if that changes.',
  },
  {
    title: 'We stay after launch',
    description:
      'Support and monitoring are part of the plan from day one, not an upsell after something breaks.',
  },
];

function WhyVindar() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header & Image Fade/Scale reveal
      gsap.from('.why-left-anim', {
        scrollTrigger: {
          trigger: '.why-section',
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // 2. Feature Items Stagger Entrance Animation
      gsap.from('.feature-item', {
        scrollTrigger: {
          trigger: '.right-col',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-section" id="why-us" ref={sectionRef}>
      <div className="why-container">
        {/* Top Eyebrow Tag */}
        <span className="why-eyebrow why-left-anim">—WHY VINDARx.STUDIO</span>

        <div className="why-content flex-row">
          {/* Left Column: Heading + Image */}
          <div className="left-col">
            <h2 className="why-heading why-left-anim">
              The studio you keep past <br className="desktop-br" />
              launch day.
            </h2>
            <div className="image-card why-left-anim">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Team Collaboration"
                className="why-img"
              />
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className="right-col">
            <div className="feature-list">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-header">
                    <span className="feature-arrow">&rarr;</span>
                    <h3 className="feature-title">{feature.title}</h3>
                  </div>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyVindar;