import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Work.css';

// Apni images yahan import karna
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    image: project1,
    category: 'FINTECH · WEB PLATFORM',
    title: 'Ledgerline Banking Portal',
  },
  {
    id: 2,
    image: project2,
    category: 'HEALTH · IOS & ANDROID',
    title: 'Pulsegrid Patient App',
  },
  {
    id: 3,
    image: project3,
    category: 'LOGISTICS · DASHBOARD',
    title: 'Cargoline Ops Console',
  },
  {
    id: 4,
    image: project4,
    category: 'RETAIL · E-COMMERCE',
    title: 'Northfield Marketplace',
  },
];

function Work() {
  const workRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal Animation
      gsap.from('.work-head-anim', {
        scrollTrigger: {
          trigger: '.work',
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // 2. Project Cards Stagger Entrance Animation
      gsap.from('.work-card', {
        scrollTrigger: {
          trigger: '.work-grid',
          start: 'top 80%',
        },
        y: 45,
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
      });
    }, workRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="work" id="work" ref={workRef}>
      {/* Top Section */}
      <div className="work-top">
        <div className="work-heading">
          <span className="work-head-anim">-SELECTED WORK</span>

          <h1 className="work-head-anim">
            Products we've taken from
            <br className="desktop-br" /> brief to production.
          </h1>
        </div>

        <p className="work-head-anim">
          A small sample of the websites, apps, and platforms currently running
          in the wild.
        </p>
      </div>

      {/* Project Cards */}
      <div className="work-grid">
        {projects.map((project) => (
          <div className="work-card" key={project.id}>
            <img src={project.image} alt={project.title} loading="lazy" />

            <div className="work-overlay">
              <span>{project.category}</span>
              <h2>{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;