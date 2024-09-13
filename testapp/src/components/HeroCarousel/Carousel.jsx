// src/components/Carousel.js

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';

const slides = [
  {
    image: '/path-to-image1.jpg',
    title: 'Welcome to FinTech Solutions',
    subtitle: 'Empowering Financial Innovation',
  },
  {
    image: '/path-to-image2.jpg',
    title: 'Seamless Financial Transactions',
    subtitle: 'A Future-Ready Payment Platform',
  },
  {
    image: '/path-to-image3.jpg',
    title: 'Secure and Reliable',
    subtitle: 'Advanced Security for Peace of Mind',
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => changeSlide(1),
    onSwipedRight: () => changeSlide(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Function to change slides
  const changeSlide = (direction) => {
    setIndex((prev) => (prev + direction + slides.length) % slides.length);
  };

  // Animation for the slide
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    delay: 200,
  });

  return (
    <div {...handlers} className="carousel-container">
      <animated.div className="carousel-slide" style={animation}>
        <section
          className="carousel-hero"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div className="carousel-content">
            <h1 className="carousel-title">{slides[index].title}</h1>
            <h2 className="carousel-subtitle">{slides[index].subtitle}</h2>
          </div>
        </section>
      </animated.div>

      <div className="carousel-controls">
        <button onClick={() => changeSlide(-1)}>&lt;</button>
        <button onClick={() => changeSlide(1)}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
