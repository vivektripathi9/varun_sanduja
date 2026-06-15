import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Star } from 'lucide-react';
import './GlobalProgramPlans.css';

export function GlobalProgramPlans() {
  const groupLearningFeatures = [
    "8 Live Group Sessions (Online)",
    "Small Batch Learning",
    "STEM Challenges",
    "Community Access",
    "Monthly Progress Reports"
  ];

  const premiumMentorshipFeatures = [
    "One-on-One Live Sessions (Online)",
    "Personalized Learning Path",
    "Advanced Projects",
    "Parent Review Session",
    "Priority Support"
  ];

  const reviews = [
    {
      text: "“My son used to spend hours on games. Now he builds robots and loves STEM! Highly recommended.”",
      author: "- Parent from USA",
      image: "/parents-awerness.png" // Placeholder
    },
    {
      text: "“The Indian mentors bring a personal touch and strong values. My daughter has become more confident.”",
      author: "- Parent from Canada",
      image: "/parents-awerness.png" // Placeholder
    },
    {
      text: "“Excellent program with structure, creativity and real learning. Worth every penny.”",
      author: "- Parent from UK",
      image: "/parents-awerness.png" // Placeholder
    }
  ];

  return (
    <section className="gpp-section">
      <div className="gpp-container">
        
        {/* PROGRAM PLANS */}
        <h2 className="gpp-title">PROGRAM PLANS</h2>
        <div className="gpp-plans-grid">
          
          {/* Group Learning Card */}
          <div className="gpp-plan-card">
            <div className="gpp-plan-content">
              <h3 className="gpp-plan-name">GLOBAL GROUP LEARNING</h3>
              <div className="gpp-plan-price">
                <span className="gpp-price-green">USD 149</span> /Month
              </div>
              <ul className="gpp-plan-list">
                {groupLearningFeatures.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} fill="#2fa742" color="white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gpp-plan-image-wrapper">
              <Image 
                src="/GlobalGroupLearnig.png" 
                alt="Global Group Learning" 
                fill 
                className="gpp-plan-image"
              />
            </div>
          </div>

          {/* Premium Mentorship Card */}
          <div className="gpp-plan-card">
            <div className="gpp-plan-content">
              <h3 className="gpp-plan-name">
                PREMIUM <span style={{ color: '#4338ca' }}>1:1</span> MENTORSHIP
              </h3>
              <div className="gpp-plan-price">
                <span className="gpp-price-purple">USD 249</span> /Month
              </div>
              <ul className="gpp-plan-list">
                {premiumMentorshipFeatures.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} fill="#2fa742" color="white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gpp-plan-image-wrapper">
              <Image 
                src="/premium1-1.png" 
                alt="Premium 1:1 Mentorship" 
                fill 
                className="gpp-plan-image"
              />
            </div>
          </div>
          
        </div>

        {/* WHAT PARENTS SAY */}
        <h2 className="gpp-title" style={{ marginTop: '40px' }}>WHAT PARENTS SAY</h2>
        <div className="gpp-reviews-grid">
          {reviews.map((review, index) => (
            <div className="gpp-review-card" key={index}>
              <div className="gpp-review-image-wrapper">
                <Image src={review.image} alt="Parent Review" width={90} height={90} className="gpp-review-image" />
              </div>
              <div className="gpp-review-content">
                <div className="gpp-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="gpp-star" />
                  ))}
                </div>
                <p className="gpp-review-text">{review.text}</p>
                <span className="gpp-review-author">{review.author}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
