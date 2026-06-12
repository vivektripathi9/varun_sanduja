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
                  STEMOrbit Tech LLP<br />
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
                <a href="mailto:info@varunsanduja.com">info@varunsanduja.com</a>
              </div>
            </div>
          </div>

          {/* RIGHT: Booking Button */}
          <div className="contact-form-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '350px', textAlign: 'center', padding: '2rem', background: '#0f172a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Schedule a Meeting</h2>
            <p style={{ marginBottom: '2rem', color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '350px' }}>
              Find a time that works best for you on our booking page.
            </p>
            <a
              href="/book-demo-session"
              className="primary-btn"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2rem', fontSize: '1.1rem', background: '#f3b400', color: '#000', borderRadius: '8px', fontWeight: 'bold' }}
            >
              Book Your Slot →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
