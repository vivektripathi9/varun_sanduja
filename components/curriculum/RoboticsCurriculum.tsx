"use client";

import React, { useState } from 'react';
import { CheckCircle2, Clock, Users, Wrench, Lightbulb, Presentation, ChevronDown, ChevronUp } from 'lucide-react';
import './RoboticsCurriculum.css';

const levels = [
  {
    id: 1,
    title: "Level 1 – Technology Explorer",
    modules: "Modules 1–5",
    goal: "Understand basic electronics and gain confidence with Arduino.",
    items: [
      {
        num: "Module 1",
        title: "Meet Your Arduino",
        projects: ["Blinking LED", "Traffic Signal"],
        skills: ["What is Arduino?", "Input vs Output", "Uploading code"],
        showcase: "My child programmed a real electronic circuit."
      },
      {
        num: "Module 2",
        title: "Light Artist",
        projects: ["Police Light", "RGB Mood Lamp"],
        skills: ["Digital Outputs", "Timing", "LED patterns"],
        showcase: "Color-changing lamp"
      },
      {
        num: "Module 3",
        title: "Smart Switches",
        projects: ["Push Button LED", "Quiz Buzzer"],
        skills: ["Inputs", "Decision Making", "If Statements"],
        showcase: "Interactive game"
      },
      {
        num: "Module 4",
        title: "Sound & Music",
        projects: ["Electronic Doorbell", "Musical Piano"],
        skills: ["Buzzer", "Notes", "Frequency"],
        showcase: "Mini piano"
      },
      {
        num: "Module 5",
        title: "Sensor Explorer",
        projects: ["Automatic Night Lamp", "Light Detector"],
        skills: ["Analog Inputs", "LDR Sensor"],
        showcase: "Smart light system"
      }
    ],
    miniProject: {
      title: "Mini Project 1: Smart Study Desk",
      combines: ["LEDs", "Button", "LDR"],
      functions: ["Study lamp", "Desk notification light"],
      monthShowcase: "Month 1 Showcase: Smart Desk"
    }
  },
  {
    id: 2,
    title: "Level 2 – Young Engineer",
    modules: "Modules 6–10",
    goal: "Interact with the environment using sensors.",
    items: [
      {
        num: "Module 6",
        title: "Distance Detection",
        projects: ["Distance Meter", "Parking Sensor"],
        skills: ["Ultrasonic Sensor"],
        showcase: "Digital distance detector"
      },
      {
        num: "Module 7",
        title: "Motion & Security",
        projects: ["Motion Alarm", "Security Alert"],
        skills: ["PIR Sensor"],
        showcase: "Home security prototype"
      },
      {
        num: "Module 8",
        title: "Temperature Scientist",
        projects: ["Digital Thermometer", "Heat Warning System"],
        skills: [],
        showcase: "Weather monitor"
      },
      {
        num: "Module 9",
        title: "Servo Machines",
        projects: ["Smart Gate", "Automatic Barrier"],
        skills: [],
        showcase: "Mini smart gate"
      },
      {
        num: "Module 10",
        title: "Smart Dustbin",
        projects: ["Touchless Dustbin"],
        skills: ["Sensors", "Servo", "Automation"],
        showcase: "Automatic dustbin"
      }
    ],
    miniProject: {
      title: "Mini Project 2: Smart Home Prototype",
      combines: ["Automatic Light", "Motion Alarm", "Smart Door"],
      functions: ["Parents can clearly see practical applications."],
      monthShowcase: "Month 2 Showcase: Smart Home"
    }
  },
  {
    id: 3,
    title: "Level 3 – Robotics Builder",
    modules: "Modules 11–15",
    goal: "Build moving intelligent machines.",
    items: [
      {
        num: "Module 11",
        title: "Motor Fundamentals",
        projects: ["Fan Controller", "Conveyor Model"],
        skills: ["DC Motor", "Motor Driver"],
        showcase: ""
      },
      {
        num: "Module 12",
        title: "Robot Movement",
        projects: ["Basic Robot Car"],
        skills: ["Motor Control", "Navigation"],
        showcase: ""
      },
      {
        num: "Module 13",
        title: "Obstacle Avoiding Robot",
        projects: ["Autonomous Robot"],
        skills: [],
        showcase: "Robot avoids obstacles independently."
      },
      {
        num: "Module 14",
        title: "Line Following Robot",
        projects: ["Smart Delivery Robot"],
        skills: ["IR Sensors", "Logic Building"],
        showcase: ""
      },
      {
        num: "Module 15",
        title: "Bluetooth Control",
        projects: ["Mobile Controlled Robot"],
        skills: ["Wireless Communication"],
        showcase: "Control robot using phone."
      }
    ],
    miniProject: {
      title: "Mini Project 3: Rescue Robot Challenge",
      combines: ["Obstacle Avoidance", "Manual Control", "LED Indicators"],
      functions: ["Students demonstrate navigation tasks."],
      monthShowcase: "Month 3 Showcase: Robot Challenge"
    }
  },
  {
    id: 4,
    title: "Level 4 – Innovator & Problem Solver",
    modules: "Modules 16–19",
    goal: "Create real-world technology solutions.",
    items: [
      {
        num: "Module 16",
        title: "Smart Agriculture",
        projects: ["Soil Moisture Monitoring", "Smart Irrigation Demo"],
        skills: [],
        showcase: ""
      },
      {
        num: "Module 17",
        title: "Smart City Systems",
        projects: ["Automatic Street Light", "Smart Parking Model"],
        skills: [],
        showcase: ""
      },
      {
        num: "Module 18",
        title: "Health & Safety Technology",
        projects: ["Air Quality Monitor", "Gas Leak Detector"],
        skills: [],
        showcase: ""
      },
      {
        num: "Module 19",
        title: "Innovation Lab",
        projects: ["Design and prototype solution."],
        skills: ["Choose: Smart Home, Farming, Safety, Transport"],
        showcase: ""
      }
    ],
    miniProject: {
      title: "Pre-Finale Checkpoint",
      combines: ["Finalizing Prototypes", "Design Polish"],
      functions: ["Preparing for the Grand Innovation Expo"],
      monthShowcase: "Month 4 Showcase: Innovation Project"
    }
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LevelAccordion({ level, defaultOpen = false }: { level: any, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="level-section">
      <div className="level-indicator">{level.id}</div>
      <div 
        className={`level-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="level-header-content">
          <h2>{level.title}</h2>
          <p className="level-goal">{level.modules} • <strong>Goal:</strong> {level.goal}</p>
        </div>
        <div className="level-header-icon">
          {isOpen ? <ChevronUp size={28} color="#f3b400" /> : <ChevronDown size={28} color="#f3b400" />}
        </div>
      </div>

      {isOpen && (
        <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
          <div className="modules-grid">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {level.items.map((mod: any, idx: number) => (
              <div key={idx} className="module-card">
                <span className="module-number">{mod.num}</span>
                <h3>{mod.title}</h3>

                {mod.projects.length > 0 && (
                  <div className="module-content-section">
                    <h4>Projects</h4>
                    <ul>
                      {mod.projects.map((p: string, i: number) => (
                        <li key={i}><CheckCircle2 /> {p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {mod.skills.length > 0 && (
                  <div className="module-content-section">
                    <h4>Skills</h4>
                    <ul>
                      {mod.skills.map((s: string, i: number) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {mod.showcase && (
                  <div className="parent-showcase">
                    <strong>Parent Showcase:</strong>
                    <p>{mod.showcase}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MINI PROJECT MILESTONE */}
          {level.miniProject && (
            <div className="mini-project-checkpoint">
              <h3>{level.miniProject.title}</h3>
              <div className="mini-project-grid">
                <div>
                  <h4>Includes / Combines:</h4>
                  <ul>
                    {level.miniProject.combines.map((c: string, i: number) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
                <div>
                  <h4>Features / Functions:</h4>
                  <ul>
                    {level.miniProject.functions.map((f: string, i: number) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="parent-showcase" style={{ marginTop: '20px', background: 'rgba(0,0,0,0.2)' }}>
                <strong style={{ color: '#fff' }}><Presentation size={18} style={{ display: 'inline', marginBottom: '-4px', marginRight: '6px' }} /> {level.miniProject.monthShowcase}</strong>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export function RoboticsCurriculum({ planType = 'standard' }: { planType?: 'standard' | 'premium' }) {
  return (
    <div className="curriculum-page">
      {/* VISION HERO */}
      <section className="vision-hero">
        <div className="vision-content">
          <span className="vision-subtitle">From Screen Time to Creation Time</span>
          <h1>STEM Robotics & Arduino Innovators Program {planType === 'premium' && <span style={{ color: '#f3b400' }}>(Premium)</span>}</h1>
          <p>
            Today&apos;s students spend significant time on screens. Instead of eliminating it, this program transforms
            screen time into productive learning by introducing students to robotics, electronics, coding, and engineering design.
          </p>
          <div className="curriculum-stats">
            <div className="stat-pill">
              <Users />
              <span><strong>8–16</strong> Years Old</span>
            </div>
            <div className="stat-pill">
              <Clock />
              <span><strong>20</strong> {planType === 'premium' ? '1-on-1 Sessions' : 'Live Sessions'}</span>
            </div>
            <div className="stat-pill">
              <Wrench />
              <span><strong>80%</strong> Hands-On Building</span>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <div className="timeline-wrapper">
        {/* ORIENTATION SESSION */}
        <section className="level-section">
          <div className="level-indicator" style={{ background: '#0a2f77', borderColor: '#f3b400' }}>⭐</div>
          <div className="level-header">
            <h2>Orientation Session</h2>
            <p className="level-goal">Pre-Course Foundation • <strong>Goal:</strong> Introduction to STEM and Course Outcomes</p>
          </div>
          
          <div className="modules-grid">
            <div className="module-card" style={{ borderColor: 'rgba(243, 180, 0, 0.4)' }}>
              <span className="module-number">Session 0</span>
              <h3>Welcome to STEMORBIT</h3>
              <div className="module-content-section">
                <h4>What we will cover:</h4>
                <ul>
                  <li><CheckCircle2 /> What is STEM and why is it important?</li>
                  <li><CheckCircle2 /> Course Outcomes & Learning Path</li>
                  <li><CheckCircle2 /> Introduction to your STEM Kit components</li>
                  <li><CheckCircle2 /> Setting up your learning environment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {levels.map((level, i) => (
          <LevelAccordion key={level.id} level={level} defaultOpen={i === 0} />
        ))}

        {/* GRAND FINALE */}
        <section className="finale-section">
          <div className="level-indicator" style={{ background: '#f3b400', color: '#000', borderColor: '#f3b400' }}>20</div>
          <div className="finale-card">
            <h2>Module 20: Innovation Expo Project</h2>
            <p>Students build a major grand finale project by combining everything learned.</p>

            <div className="finale-options">
              <div className="finale-option">
                <h4>Smart Home System</h4>
                <ul>
                  <li>Motion Detection</li>
                  <li>Automatic Lights</li>
                  <li>Smart Door & Alarm</li>
                </ul>
              </div>
              <div className="finale-option">
                <h4>Smart Farming System</h4>
                <ul>
                  <li>Soil Monitoring</li>
                  <li>Auto Irrigation</li>
                  <li>Water Saving</li>
                </ul>
              </div>
              <div className="finale-option">
                <h4>Smart Security Robot</h4>
                <ul>
                  <li>Obstacle Avoidance</li>
                  <li>Motion Detection</li>
                  <li>Alarm System</li>
                </ul>
              </div>
              <div className="finale-option">
                <h4>Smart School Prototype</h4>
                <ul>
                  <li>Attendance System</li>
                  <li>Smart Lighting</li>
                  <li>Safety Alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SKILLS SUMMARY */}
      <section className="skills-summary">
        <h2>Skills Developed</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3><Wrench /> Technical Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Arduino Programming</span>
              <span className="skill-tag">Electronics</span>
              <span className="skill-tag">Sensors</span>
              <span className="skill-tag">Robotics</span>
              <span className="skill-tag">Automation</span>
              <span className="skill-tag">Engineering Design</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><Lightbulb /> Future Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Critical Thinking</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Creativity</span>
              <span className="skill-tag">Teamwork</span>
              <span className="skill-tag">Presentation Skills</span>
              <span className="skill-tag">Innovation Mindset</span>
            </div>
          </div>
        </div>

        <div className="outcome-box">
          <h3>The Final Outcome</h3>
          <p>
            By the end of 20 modules, students will not just know coding—they will have built <strong>15–20 working projects</strong>,
            showcased multiple prototypes to parents, and completed a major innovation project that demonstrates beginner-to-advanced STEM and robotics skills.
          </p>
        </div>
      </section>

    </div>
  );
}
