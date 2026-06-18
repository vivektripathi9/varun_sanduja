import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Globe } from 'lucide-react';
import './StemKitAndDashboard.css';

export function StemKitAndDashboard() {
  const kitItems = [
    "Arduino UNO",
    "Breadboard",
    "Sensors",
    "Motors",
    "LEDs & Resistors",
    "Jumper Wires",
    "Robotics Components",
    "Project Guidebook"
  ];

  const dashboardItems = [
    "Monthly Progress Report",
    "Project Completion",
    "Creativity Score",
    "Innovation Score",
    "Mentor Feedback",
    "Achievement Certificates"
  ];

  return (
    <section className="skd-section">
      <div className="skd-container">
        
        {/* Left Box: STEM Kit */}
        <div className="skd-box">
          <div className="skd-content">
            <h2 className="skd-title">STEM INNOVATION KIT</h2>
            <p className="skd-subtitle">Delivered to Your Doorstep</p>
            
            <ul className="skd-list">
              {kitItems.map((item, index) => (
                <li key={index}>
                  <CheckCircle2 size={24} className="skd-check" fill="#2fa742" color="white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="skd-shipping">
              <Globe size={24} color="#153a84" />
              <span>International Shipping Available</span>
            </div>
          </div>
          <div className="skd-image-wrapper">
            <Image src="/STEMKIT.png" alt="STEM Innovation Kit" fill className="skd-image" />
          </div>
        </div>

        {/* Right Box: Dashboard */}
        <div className="skd-box skd-dashboard-box">
          <div className="skd-content skd-dashboard-content">
            <h2 className="skd-title skd-dashboard-title">PARENT PROGRESS DASHBOARD</h2>
            <p className="skd-subtitle skd-dashboard-subtitle">Stay informed. See your child grow.</p>
            
            <ul className="skd-list skd-dashboard-list">
              {dashboardItems.map((item, index) => (
                <li key={index}>
                  <CheckCircle2 size={28} className="skd-check" fill="#2fa742" color="white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="skd-image-wrapper skd-dashboard-image-wrapper">
            <Image src="/Performancetracking.png" alt="Parent Progress Dashboard" fill className="skd-image skd-dashboard-image" />
          </div>
        </div>

      </div>
    </section>
  );
}
