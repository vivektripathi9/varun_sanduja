import React from 'react';
import Image from 'next/image';
import { Bot, Target, Cpu, Lightbulb, Code, Presentation } from 'lucide-react';
import './CurriculumOverview.css';

export function CurriculumOverview() {
  return (
    <section className="co-section">
      <div className="co-container">
        
        {/* Left Column */}
        <div className="co-left">
          <h2 className="co-title">WHAT STUDENTS WILL LEARN</h2>
          <div className="co-learn-grid">
            
            <div className="co-learn-item">
              <div className="co-learn-icon" style={{ color: '#2fa742' }}>
                <Bot size={48} strokeWidth={1.5} />
              </div>
              <div className="co-learn-text">
                <h3>Robotics</h3>
                <p>Motors, Sensors<br/>&amp; Robots</p>
              </div>
            </div>

            <div className="co-learn-item">
              <div className="co-learn-icon" style={{ color: '#153a84' }}>
                <Target size={48} strokeWidth={1.5} />
              </div>
              <div className="co-learn-text">
                <h3>AI &amp; Innovation</h3>
                <p>Future Technologies<br/>&amp; Smart Solutions</p>
              </div>
            </div>

            <div className="co-learn-item">
              <div className="co-learn-icon" style={{ color: '#153a84' }}>
                <Cpu size={48} strokeWidth={1.5} />
              </div>
              <div className="co-learn-text">
                <h3>Electronics</h3>
                <p>Circuits &amp;<br/>Engineering Concepts</p>
              </div>
            </div>

            <div className="co-learn-item">
              <div className="co-learn-icon" style={{ color: '#ea580c' }}>
                <Lightbulb size={48} strokeWidth={1.5} />
              </div>
              <div className="co-learn-text">
                <h3>Design Thinking</h3>
                <p>Problem Solving<br/>&amp; Creativity</p>
              </div>
            </div>

            <div className="co-learn-item">
              <div className="co-learn-icon" style={{ color: '#153a84' }}>
                <Code size={48} strokeWidth={1.5} />
              </div>
              <div className="co-learn-text">
                <h3>Coding</h3>
                <p>Block Coding &amp;<br/>Arduino Programming</p>
              </div>
            </div>

            <div className="co-learn-item">
              <div className="co-learn-icon" style={{ color: '#6b21a8' }}>
                <Presentation size={48} strokeWidth={1.5} />
              </div>
              <div className="co-learn-text">
                <h3>Presentation Skills</h3>
                <p>Confidence &amp;<br/>Communication</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="co-right">
          <h2 className="co-title">PROGRAM TRACKS</h2>
          
          <div className="co-tracks-grid">
            {/* Track 1 */}
            <div className="co-track-card">
              <div className="co-track-header co-header-green">
                <h3>Junior Innovators</h3>
                <p>(6-9 Years)</p>
              </div>
              <div className="co-track-image-wrapper">
                 <Image src="/placeholder-junior.png" alt="Junior Innovators" width={300} height={200} className="co-track-image" />
              </div>
              <ul className="co-track-list">
                <li>Basic Robotics</li>
                <li>Creative Engineering</li>
                <li>STEM Experiments</li>
                <li>Logical Thinking</li>
              </ul>
            </div>

            {/* Track 2 */}
            <div className="co-track-card">
              <div className="co-track-header co-header-blue">
                <h3>Young Engineers</h3>
                <p>(10-13 Years)</p>
              </div>
              <div className="co-track-image-wrapper">
                 <Image src="/placeholder-young.png" alt="Young Engineers" width={300} height={200} className="co-track-image" />
              </div>
              <ul className="co-track-list">
                <li>Electronics</li>
                <li>Arduino Projects</li>
                <li>Robotics</li>
                <li>Design Challenges</li>
              </ul>
            </div>

            {/* Track 3 */}
            <div className="co-track-card">
              <div className="co-track-header co-header-purple">
                <h3>Future Technologists</h3>
                <p>(14-16 Years)</p>
              </div>
              <div className="co-track-image-wrapper">
                 <Image src="/placeholder-future.png" alt="Future Technologists" width={300} height={200} className="co-track-image" />
              </div>
              <ul className="co-track-list">
                <li>Robotics &amp; AI</li>
                <li>IoT &amp; Automation</li>
                <li>Advanced Coding</li>
                <li>Innovation Portfolio</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
