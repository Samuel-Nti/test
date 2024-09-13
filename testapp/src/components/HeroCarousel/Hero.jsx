// src/components/Hero.js

import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  // Animations
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 200,
  });

  const subtitleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 400,
  });

  return (
    <section className="hero-section">
      <div className="content">
        <animated.div style={titleAnimation}>
          <h1 className="title">Accelerating E-payments in Africa</h1>
        </animated.div>
        <animated.div style={subtitleAnimation}>
          <h2 className="subtitle">Exceptional Service delivey, world class applications and ground breaking initiatives</h2>
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;
