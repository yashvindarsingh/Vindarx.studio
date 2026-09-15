import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Stats.css';

gsap.registerPlugin(ScrollTrigger);

function Stats() {
  const statsRef = useRef(null);

  const statsData = [
    { count: 120, suffix: '+', label: 'PRODUCTS SHIPPED' },
    { count: 98, suffix: '%', label: 'CLIENT RETENTION' },
    { count: 40, suffix: '+', label: 'ENGINEERS & DESIGNERS' },
    { count: 9, suffix: '+', label: 'YEARS BUILDING' },
  ];

  useGSAP(
    () => {
      // 1. Fade-up animation for stats blocks
      gsap.from('.stat', {
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // 2. Smooth Number Counter Animation
      const countElements = statsRef.current.querySelectorAll('.stat-number');

      countElements.forEach((el) => {
        const target = +el.getAttribute('data-count');

        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            const counterObj = { val: 0 };
            gsap.to(counterObj, {
              val: target,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => {
                el.innerText = Math.floor(counterObj.val);
              },
            });
          },
        });
      });
    },
    { scope: statsRef }
  );

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats-container">
        <div className="wrap">
          {statsData.map((item, index) => (
            <div className="stat" key={index}>
              <div className="stat-value">
                <b className="stat-number" data-count={item.count}>
                  0
                </b>
                <span className="stat-suffix">{item.suffix}</span>
              </div>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;