import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

function Process() {
  const sectionRef = useRef(null);

  const stages = [
    {
      number: "01",
      title: "Discover",
      description:
        "We study your users, constraints, and the real problem before touching a design tool.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Wireframes and prototypes, tested with real stakeholders before a line of code is written.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Engineers build in short cycles, with working software you can review every week.",
    },
    {
      number: "04",
      title: "Deploy",
      description:
        "Staged rollouts, load-tested infrastructure, and a launch plan with a rollback ready.",
    },
    {
      number: "05",
      title: "Support",
      description:
        "Monitoring and maintenance continue after launch — your product stays our responsibility.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Text Animation
      gsap.from('.process-header-anim', {
        scrollTrigger: {
          trigger: '.process',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Track Line Animation
      gsap.from('.process-track-line', {
        scrollTrigger: {
          trigger: '.process-track',
          start: 'top 75%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        ease: 'power3.out',
      });

      // Stages Stagger Animation
      gsap.from('.process-item', {
        scrollTrigger: {
          trigger: '.process-track',
          start: 'top 75%',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process" id="process" ref={sectionRef}>
      <div className="top-side">
        <div className="left-side">
          <span className="process-header-anim">-How we work</span>
          <h1 className="process-header-anim">
            Five stages, in this exact <br className="desktop-br" />
            order, every time.
          </h1>
        </div>
        <div className="right-side process-header-anim">
          <p>
            Not a formality — a sequence that catches <br className="desktop-br" />
            problems while they're still cheap to fix.
          </p>
        </div>
      </div>

      <div className="bottom-side">
        <div className="process-track">
          <div className="process-track-line"></div>
          {stages.map((stage) => (
            <div className="process-item" key={stage.number}>
              <div className="process-number">
                <span className="circle"></span>
                <span>{stage.number}</span>
              </div>
              <div className="process-content">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;