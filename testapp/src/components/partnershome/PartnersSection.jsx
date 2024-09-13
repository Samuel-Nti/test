import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './PartnersSection.css'; // Make sure to add your CSS styles
import gtb from '../../assets/gtb.jpg';
import pbl from '../../assets/pbl.png';
import zenith from '../../assets/zenith.png';
import fidelity from '../../assets/fidelity.png';
import boa from '../../assets/boa.png';
import bloombank from '../../assets/bloombank.jpg';

const PartnersSection = () => {
  return (
    <>
    <section className="partners-section">
      <h2 className="partners-title">Exceptional partnership for Service</h2>
      <h3 className="partners-subtitle">We surround ourselves with both technologically innovative companies as well as banks in order to deliver secure, efficient and fast electronic payment services.</h3>
      
      <div className="partners-logos">
        <img src={gtb} alt="Partner 1" className="partner-logo" />
        <img src={pbl} alt="Partner 2" className="partner-logo" />
        <img src={boa} alt="Partner 3" className="partner-logo" />
        <img src={bloombank} alt="Partner 4" className="partner-logo" />
        <img src={fidelity} alt="Partner 5" className="partner-logo" />
        <img src={zenith} alt="Partner 6" className="partner-logo" />
      </div>
      </section>
      <Link to="/partners" className="about-us-button">

        Our partners
      </Link>
   </>
  );
};

export default PartnersSection;
