import React, { useState } from 'react';
import './HeroCarousel.css'; // Custom styling for the hero component
import Pos from '../../assets/pos2.jpg';
import Pos2 from '../../assets/pos.jpg';
import Heo from '../../assets/heo.png.webp';



const carouselData = [
  {
    id: 1,
    title: 'Innovative Financial Solutions',
    subtitle: 'Transforming the future of fintech with cutting-edge technology.',
    image: Heo, // Placeholder image, replace with your actual image
  },
  {
    id: 2,
    title: 'Seamless Payment Systems',
    subtitle: 'Building secure, reliable, and user-friendly payment gateways.',
    image: Pos2,
  },
  {
    id: 3,
    title: 'Expanding Financial Access',
    subtitle: 'Bringing financial services to underserved markets.',
    image: 'https://via.placeholder.com/1600x600',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  return (
    <div className="hero-section">
      <div className="carousel">
        {carouselData.map((slide, index) => (
          <div
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            key={slide.id}
            style={{
              backgroundImage: `url(${slide.image})`,
              display: index === currentSlide ? 'block' : 'none',
            }}
          >
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Hero;
