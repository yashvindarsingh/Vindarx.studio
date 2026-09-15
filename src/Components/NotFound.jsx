import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Smooth entrance staggered animation
    gsap.from('.nf-anim', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power4.out',
    });

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <section className="nf-section">
      {/* Visual Ambient Glows */}
      <div className="glow-orb orb-primary"></div>
      <div className="glow-orb orb-secondary"></div>
      
      {/* Visual Background Cyber Lines */}
      <div className="cyber-grid"></div>

      <div className="nf-container">
        {/* Top Header Label */}
        <div className="nf-brand nf-anim">
          VINDAR<span className="brand-accent">X</span>.STUDIO
        </div>

        {/* Visual Hero 404 Display */}
        <div className="nf-hero-display nf-anim">
          <span className="nf-digit">4</span>
          <div className="nf-zero-portal">
            <div className="portal-ring"></div>
            <div className="portal-core"></div>
          </div>
          <span className="nf-digit">4</span>
        </div>

        {/* Dynamic Status Indicator Pill */}
        <div className="nf-badge nf-anim">
          <span className={`status-pulse ${isOnline ? 'online' : 'offline'}`}></span>
          <span>{isOnline ? 'SYSTEM ERROR : 404 PAGE NOT FOUND' : 'CONNECTION LOST : OFFLINE'}</span>
        </div>

        {/* Headline */}
        <h1 className="nf-title nf-anim">
          {isOnline ? (
            <>
              You've ventured into <br />
              <span className="gradient-text">uncharted territory.</span>
            </>
          ) : (
            <>
              Connection interrupted. <br />
              <span className="gradient-text">Check your internet.</span>
            </>
          )}
        </h1>

        {/* Description */}
        <p className="nf-subtext nf-anim">
          {isOnline
            ? "The page you are looking for doesn't exist, was renamed, or has slipped into a parallel dimension."
            : "Your connection went dark. Reconnect to the network to restore the interface or navigate back home."}
        </p>

        {/* Interactive Action Buttons */}
        <div className="nf-actions nf-anim">
          <button className="nf-btn primary-btn" onClick={() => navigate('/')}>
            <span className="btn-icon">&larr;</span>
            <span>Back to Main Studio</span>
          </button>

          {!isOnline && (
            <button className="nf-btn secondary-btn" onClick={() => window.location.reload()}>
              <span className="btn-icon">&#x21bb;</span>
              <span>Retry Connection</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default NotFound;