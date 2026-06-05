"use client";

import React from 'react';
import './ContactSection.css';

export function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Have questions about our programs, STEM kits, or need a consultation? Our team is here to help you build a better digital future for your child.</p>
        </div>

        <div className="contact-grid">
          {/* LEFT: Contact Info */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h4>Address</h4>
                <p>
                  STEMOrbit Technologies<br />
                  SCO-04, 1st Floor, Mehma Singh Complex<br />
                  Opposite Jal Vayu Towers, Gate 3<br />
                  New Sunny Enclave, Kharar, Sector-125<br />
                  Mohali, Punjab – 140301
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h4>Phone</h4>
                <a href="tel:+919592406555">+91 95924 06555</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-details">
                <h4>Email</h4>
                <a href="mailto:varun.stemorbit@gmail.com">varun.stemorbit@gmail.com</a>
              </div>
            </div>
          </div>

          {/* RIGHT: Calendly Embed */}
          <div className="contact-form-card">
            <iframe 
              src="https://calendly.com/your-calendly-link"
              width="100%" 
              height="500" 
              frameBorder="0" 
              scrolling="no"
              className="calendly-iframe"
              style={{ borderRadius: '16px', background: '#ffffff' }}
              title="Book a consultation on Calendly"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
