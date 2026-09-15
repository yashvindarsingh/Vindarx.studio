import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Service.css';

gsap.registerPlugin(ScrollTrigger);

function Service() {
  const sectionRef = useRef(null);

  const services = [
    {
      number: "01",
      category: "Web",
      title: "Website Development",
      description:
        "Marketing sites, e-commerce, and web platforms built on fast, maintainable code — designed to convert and built to scale traffic.",
    },
    {
      number: "02",
      category: "Mobile",
      title: "App Development",
      description:
        "Native iOS/Android and cross-platform apps, from first prototype to App Store launch and long-term release management.",
    },
    {
      number: "03",
      category: "Cloud",
      title: "IT Infrastructure",
      description:
        "Cloud architecture, DevOps pipelines, and system administration that keep products fast, secure, and online.",
    },
    {
      number: "04",
      category: "Product",
      title: "UI/UX Design",
      description:
        "Interfaces grounded in research and tested with real users — designed to be as clear on day one as it is at scale.",
    },
    {
      number: "05",
      category: "Data",
      title: "Systems Integration",
      description:
        "APIs, databases, and internal tools that connect your existing stack instead of forcing you to replace it.",
    },
    {
      number: "06",
      category: "Support",
      title: "Managed IT Support",
      description:
        "Ongoing monitoring, maintenance, and technical support so your team can rely on the systems we build together.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.service-anim-head', {
        scrollTrigger: {
          trigger: '.service',
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Service Cards Stagger Animation
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="service" id="services" ref={sectionRef}>
      <div className="service-container">
        <div className="left-side">
          <span className="service-anim-head">-What we build</span>
          <h1 className="service-anim-head">
            Full-stack capability,<br className="desktop-br" />
            applied where it moves the <br className="desktop-br" />
            business.
          </h1>
        </div>
        <div className="right-side service-anim-head">
          <p>
            Four disciplines, one team — so your website,<br className="desktop-br" />
            app, and infrastructure are designed to work as a <br className="desktop-br" />
            single system, not separate vendors.
          </p>
        </div>
      </div>

      <div className="services-card">
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <span className="service-number">
                {service.number} / {service.category}
              </span>

              <div className="service-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;