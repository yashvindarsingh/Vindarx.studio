import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './HeroTerminal.css';

const HeroTerminal = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Subtle Floating Animation for Terminal Box
      gsap.to(cardRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // 2. Code Lines Stagger Fade In
      gsap.from('.code-line', {
        opacity: 0,
        x: -10,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.5,
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-card-holder">
      <div className="terminal-card" ref={cardRef}>
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="terminal-title">vindarx.studio system // engine.ts</span>
        </div>

        {/* Terminal Body with Code */}
        <div className="terminal-body">
          <pre>
            <code>
              <div className="code-line">
                <span className="c-keyword">import</span> {'{ '}
                <span className="c-variable">Studio</span>
                {' }'} <span className="c-keyword">from</span>{' '}
                <span className="c-string">'@vindarx/core'</span>;
              </div>
              <br />
              <div className="code-line">
                <span className="c-keyword">const</span>{' '}
                <span className="c-variable">project</span> ={' '}
                <span className="c-keyword">new</span>{' '}
                <span className="c-class">Studio</span>({'{'}
              </div>
              <div className="code-line">
                {'  '}<span className="c-property">client</span>:{' '}
                <span className="c-string">'Ambitious Team'</span>,
              </div>
              <div className="code-line">
                {'  '}<span className="c-property">stack</span>: [
                <span className="c-string">'Full-Stack'</span>,{' '}
                <span className="c-string">'Cloud Architecture'</span>],
              </div>
              <div className="code-line">
                {'  '}<span className="c-property">status</span>:{' '}
                <span className="c-string">'Building Future...'</span>
              </div>
              <div className="code-line">{'}'});</div>
              <br />
              <div className="code-line">
                <span className="c-keyword">async function</span>{' '}
                <span className="c-function">deploySystem</span>() {'{'}
              </div>
              <div className="code-line">
                {'  '}<span className="c-keyword">await</span> project.
                <span className="c-method">buildWebsites</span>();
              </div>
              <div className="code-line">
                {'  '}<span className="c-keyword">await</span> project.
                <span className="c-method">scaleInfrastructure</span>();
              </div>
              <div className="code-line">
                {'  '}<span className="c-keyword">return</span>{' '}
                <span className="c-string">'Production Ready 🚀'</span>;
              </div>
              <div className="code-line">{'}'}</div>
              <br />
              <div className="code-line">
                <span className="c-comment">// Status: System Running smoothly</span>
              </div>
              <div className="code-line">
                <span className="c-function">deploySystem</span>();
              </div>
            </code>
          </pre>
        </div>

        {/* Terminal Footer */}
        <div className="terminal-footer">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">
              System Operational <span className="dot-sep">•</span> Latency: 12ms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTerminal;