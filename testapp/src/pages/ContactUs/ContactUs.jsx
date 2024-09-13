import React, { useState } from 'react';
import './ContactUs.css'; // Custom styling for the contact us page

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us-section">
      <h1 className="section-title">Contact Us</h1>
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2 className="form-title">Leave a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <h3 className="contact-heading">Address:</h3>
            <p>Ground Floor, Psycon HR Building,</p>
            <p>3rd Crescent Link, Afram Lane, Asylum Down</p>
            <p>Accra, Ghana</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-heading">Phone:</h3>
            <p>+233 307 000 125</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-heading">Work Hours:</h3>
            <p>Monday – Friday: 8 AM to 5 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
