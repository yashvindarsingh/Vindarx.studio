import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Team.css';

import Ceo from '../assets/ceo.jpeg';
import Senior from '../assets/senior.jpeg';
import Junior from '../assets/junior.jpeg';
import Developer from '../assets/developer.jpg';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    image: Ceo,
    name: 'Yashvindar Singh',
    role: 'FOUNDER & CEO',
    description: "Sets the studio's direction and stays hands-on with every client engagement.",
  },
  {
    image: Senior,
    name: 'Sukhvindar Singh',
    role: 'SENIOR DEVELOPER',
    description: 'Leads architecture and code quality across web and app projects.',
    imgPosition: 'top center',
  },
  {
    image: Junior,
    name: 'Drishti Gohel',
    role: 'SENIOR DEVELOPER',
    description: 'Builds and ships features under senior review, learning the stack end to end.',
  },
  {
    image: Developer,
    name: 'Yash Singh',
    role: 'FULL-STACK DEVELOPER',
    description: 'Works across backend and frontend to keep every layer of the product connected.',
  },
];

function Team() {
  const teamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Entrance Animation (Fixed trigger to #team-section)
      gsap.from('.team-header-anim', {
        scrollTrigger: {
          trigger: '#team-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // 2. Team Cards Stagger Fade-Up Animation
      gsap.from('.team-card', {
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'transform', // Animation complete hone ke baad CSS hover translateY ko smooth rakhega
      });
    }, teamRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team-section" ref={teamRef}>
      <div className="team-container">
        {/* Header */}
        <div className="team-header">
          <div className="team-title-block">
            <span className="team-eyebrow team-header-anim">—THE TEAM</span>
            <h2 className="team-header-anim">The people behind  <span className='logo'>Vindarx.studio</span></h2>
          </div>
          <p className="team-subtext team-header-anim">
            A small, senior team — every project touched by <br className="desktop-br" />
            the same people from kickoff to launch.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="avatar-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="avatar-img"
                  style={{ objectPosition: member.imgPosition || 'center center' }}
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <span className="member-role">{member.role}</span>
              <p className="member-desc">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;