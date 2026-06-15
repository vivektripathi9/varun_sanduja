import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import './MeetYourMentor.css';

export function MeetYourMentor() {
  const achievements = [
    "M.Tech (Electronics & Communication Engineering)",
    "400+ STEM Labs Established",
    "Mentored 10,000+ Students",
    "40+ Research Publications",
    "STEM Educator, Mentor & Innovator"
  ];

  return (
    <section className="mym-section">
      <div className="mym-container">
        <div className="mym-banner">
          
          {/* Left: Mentor Image */}
          <div className="mym-image-wrapper">
            <Image 
              src="/mentorGSI.png" 
              alt="Varun Sanduja" 
              fill 
              className="mym-image" 
            />
          </div>

          {/* Middle: Details */}
          <div className="mym-content">
            <h4 className="mym-subtitle">MEET YOUR MENTOR</h4>
            <h2 className="mym-title">VARUN SANDUJA</h2>
            <p className="mym-role">Founder & CEO – STEMOrbit</p>
            
            <ul className="mym-list">
              {achievements.map((item, index) => (
                <li key={index}>
                  <CheckCircle2 size={20} className="mym-check" color="#ffc107" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Quote Box */}
          <div className="mym-quote-box-wrapper">
            <div className="mym-quote-box">
              <span className="mym-quote-mark">“</span>
              <p className="mym-quote-text">
                My mission is to help NRI students connect with their roots while building the skills and mindset to lead the future."
              </p>
              <div className="mym-signature">
                - Varun Sanduja
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
