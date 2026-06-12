"use client";

import React, { useState } from 'react';
import Script from 'next/script';
import { CheckCircle2, Clock, Users, Wrench, Lightbulb, Presentation, ChevronDown, ChevronUp } from 'lucide-react';
import './RoboticsCurriculum.css';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

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
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [includeKit, setIncludeKit] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    email: "",
    mobile: "",
    city: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, planType, includeKit })
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Something went wrong');
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'STEMORBIT',
        description: `${planType === 'premium' ? 'Premium' : 'Standard'} Plan Enrollment`,
        order_id: data.id,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler: async function (response: any) {
          try {
             const verifyRes = await fetch('/api/enroll/verify', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                 razorpay_order_id: response.razorpay_order_id,
                 razorpay_payment_id: response.razorpay_payment_id,
                 razorpay_signature: response.razorpay_signature,
               })
             });
             if (verifyRes.ok) {
               setSuccess(true);
             } else {
               alert("Payment verification failed. Please contact support.");
             }
          } catch (err) {
             console.error(err);
             alert("Verification error.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile
        },
        theme: {
          color: '#f3b400'
        }
      };
      const rzp = new window.Razorpay(options);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rzp.on('payment.failed', function (response: any) {
        alert('Payment Failed: ' + response.error.description);
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const baseCoursePrice = planType === 'standard' ? 9999 : 12999;
  const kitPrice = includeKit ? 2999 : 0;
  const subtotal = baseCoursePrice + kitPrice;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  return (
    <div className="curriculum-page">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
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

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
            <button 
              onClick={() => setShowForm(true)}
              style={{
                display: 'inline-flex',
                height: '3.5rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                background: 'linear-gradient(to right, #f3b400, #e0a600)',
                paddingLeft: '2.5rem',
                paddingRight: '2.5rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#000',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 25px rgba(243, 180, 0, 0.4)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.025em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(243, 180, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(243, 180, 0, 0.4)';
              }}
            >
              Enroll Now
            </button>
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


      {/* ENROLL BUTTON */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <button 
          onClick={() => setShowForm(true)}
          style={{
            display: 'inline-flex',
            height: '3.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            background: 'linear-gradient(to right, #f3b400, #e0a600)',
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
            fontSize: '1.125rem',
            fontWeight: 'bold',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 25px rgba(243, 180, 0, 0.4)',
            transition: 'all 0.3s ease',
            letterSpacing: '0.025em'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 35px rgba(243, 180, 0, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(243, 180, 0, 0.4)';
          }}
        >
          Enroll Now
        </button>
      </div>

      {/* POPUP MODAL */}
      {(showForm || success) && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '1rem' }}>
          {success ? (
            <div style={{ background: '#010a1f', padding: '3rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '500px', width: '100%', textAlign: 'center', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
               <button onClick={() => {setShowForm(false); setSuccess(false);}} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'transparent', color: '#fff', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
               <h3 style={{ fontSize: '2rem', color: '#4ade80', marginBottom: '1rem' }}>🎉 Enrollment Successful!</h3>
               <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Welcome to STEMORBIT. We have received your enrollment and will contact you shortly with the next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#010a1f', padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', maxHeight: '90vh', overflowY: 'auto' }}>
               <button type="button" onClick={() => setShowForm(false)} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'transparent', color: 'rgba(255,255,255,0.5)', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
               <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>Student Enrollment</h3>
               
               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name of Student</label>
                 <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Grade of Student</label>
                 <input required type="text" value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})} placeholder="e.g. 5th Grade" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email (Parent or Student)</label>
                 <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Mobile (Parent or Student)</label>
                 <input required type="tel" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1.5rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>City</label>
                 <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1.5rem' }}>
                 <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', background: 'rgba(243,180,0,0.1)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(243,180,0,0.3)' }}>
                   <input type="checkbox" checked={includeKit} onChange={e => setIncludeKit(e.target.checked)} style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', accentColor: '#f3b400' }} />
                   <div>
                     <span style={{ display: 'block', color: '#fff', fontWeight: 'bold' }}>Include STEM Kit (+ ₹2,999)</span>
                     <span style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Highly recommended for hands-on projects</span>
                   </div>
                 </label>
               </div>

               <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                   <span>Course Fee</span>
                   <span>₹{baseCoursePrice.toLocaleString()}</span>
                 </div>
                 {includeKit && (
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                     <span>STEM Kit</span>
                     <span>₹{kitPrice.toLocaleString()}</span>
                   </div>
                 )}
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                   <span>GST (18%)</span>
                   <span>₹{gst.toLocaleString()}</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1.1rem', fontWeight: 'bold' }}>
                   <span>Total Payable</span>
                   <span style={{ color: '#f3b400' }}>₹{total.toLocaleString()}</span>
                 </div>
               </div>

               <div style={{ display: 'flex', gap: '1rem' }}>
                 <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
                 <button type="submit" disabled={loading} style={{ flex: 2, padding: '0.75rem', borderRadius: '0.5rem', background: 'linear-gradient(to right, #f3b400, #e0a600)', color: '#000', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold', opacity: loading ? 0.7 : 1 }}>
                   {loading ? 'Processing...' : `Pay ₹${total.toLocaleString()}`}
                 </button>
               </div>
            </form>
          )}
        </div>
      )}


    </div>
  );
}
