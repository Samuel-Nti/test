import React from 'react';
import './Partners.css';  // For styling
import gtb from '../../assets/gtb.jpg';
import pbl from '../../assets/pbl.png';
import zenith from '../../assets/zenith.png';
import fidelity from '../../assets/fidelity.png';
import boa from '../../assets/boa.png';
import bloombank from '../../assets/bloombank.jpg';
import omnbsics from '../../assets/omnbsics.png';
import gct from '../../assets/gct.jpg';
import mtn from '../../assets/mtn.png';
import nexgo from '../../assets/nexgo.png';
import ghipps from '../../assets/ghipps.jpg';
import nia from '../../assets/nia.jpg';
import telecel from '../../assets/telecel.png';

const Partners = () => {
  return (
    <div className="partners-container">
      <h1>Our Partners</h1>
      
      <div className="partners-section">
        {/* Bank Partners Section */}
        <div className="partner-category">
          <h2>Bank Partners</h2>
          <p>We work with commercial banks, vendors, and regulatory bodies to develop our extraordinary services, so that e-payment needs of our end-users are met.
          </p>
          <div className="logo-grid">
            <img src={gtb} alt="Bank Partner GTB" className="logo-img" />
            <img src={pbl} alt="Bank Partner PBL" className="logo-img" />
            <img src={zenith} alt="Bank Partner Zenith" className="logo-img" />
            <img src={fidelity} alt="Bank Partner Fidelity" className="logo-img" />
            <img src={bloombank} alt="Bank Partner BloomBank" className="logo-img" />
            <img src={omnbsics} alt="Bank Partner Omnbsics" className="logo-img" />
            <img src={boa} alt="Bank Partner BOA" className="logo-img" />
           
            {/* Add more logos as needed */}
          </div>
        </div>

        {/* Technology Partners Section */}
        <div className="partner-category">
          <h2>Technology Partners</h2>
          <p>We surround ourselves with the best technologically innovative companies to deliver secure, efficient, and fast services.</p>
          <div className="logo-grid">
            <img src= {nexgo} alt="Tech Partner 1" className="logo-img" />
            <img src={mtn} alt="Tech Partner 2" className="logo-img" />
            <img src={ghipps} alt="Tech Partner 3" className="logo-img" />
            <img src={gct} alt="Tech Partner 4" className="logo-img" />
            <img src={nia} alt="Tech Partner 5" className="logo-img" />
            <img src={telecel} alt="Tech Partner 6" className="logo-img" />
            {/* Add more logos as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
