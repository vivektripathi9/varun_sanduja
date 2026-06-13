"use client";

import React, { useState } from 'react';
import Script from 'next/script';
import { CheckCircle2, Clock, Users, Globe, Lightbulb, Presentation, ChevronDown, ChevronUp } from 'lucide-react';
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
    title: "Global Foundations",
    modules: "Modules 1–4",
    goal: "Introduction to international innovation frameworks and foundational coding.",
    items: [
      {
        num: "Module 1",
        title: "Global Problems, Tech Solutions",
        projects: ["UN SDG Research Project", "Tech Impact Presentation"],
        skills: ["Problem Solving", "Global Awareness", "Presentation"],
        showcase: "Student presented a global problem to solve."
      },
      {
        num: "Module 2",
        title: "Design Thinking Basics",
        projects: ["Empathy Mapping", "Ideation Board"],
        skills: ["Brainstorming", "User Centric Design"],
        showcase: "Design Thinking Portfolio"
      },
      {
        num: "Module 3",
        title: "Foundations of Code",
        projects: ["Interactive Story", "Basic Algorithm"],
        skills: ["Logic", "Variables", "Loops"],
        showcase: "First functional program"
      },
      {
        num: "Module 4",
        title: "Prototyping Tools",
        projects: ["Digital Mockup", "UI/UX Draft"],
        skills: ["Wireframing", "Digital Design"],
        showcase: "App Prototype Design"
      }
    ],
    miniProject: {
      title: "Mini Project 1: Idea Pitch",
      combines: ["Research", "Problem Definition", "Basic Prototyping"],
      functions: ["Pitching a solution to a global issue."],
      monthShowcase: "Month 1 Showcase: Tech Pitch"
    }
  },
  {
    id: 2,
    title: "Advanced AI Integration",
    modules: "Modules 5–10",
    goal: "Build intelligent systems with artificial intelligence integration.",
    items: [
      {
        num: "Module 5",
        title: "Machine Learning Basics",
        projects: ["Image Recognition App"],
        skills: ["AI Concepts", "Python Basics"],
        showcase: "Student built a working AI bot."
      },
      {
        num: "Module 6",
        title: "Conversational AI",
        projects: ["Custom Chatbot", "Voice Assistant"],
        skills: ["NLP", "API Integration"],
        showcase: "Interactive Assistant Prototype"
      },
      {
        num: "Module 7",
        title: "Data & Prediction",
        projects: ["Weather Predictor Model"],
        skills: ["Data Sets", "Training Models"],
        showcase: "Data Prediction App"
      },
      {
        num: "Module 8",
        title: "Ethics in AI",
        projects: ["Bias Analysis Report"],
        skills: ["Critical Thinking", "AI Ethics"],
        showcase: "AI Ethics Presentation"
      },
      {
        num: "Module 9",
        title: "Computer Vision",
        projects: ["Object Tracker", "Face Filter"],
        skills: ["Camera Inputs", "Real-time processing"],
        showcase: "Live Vision App"
      },
      {
        num: "Module 10",
        title: "AI Synthesis",
        projects: ["Smart Diagnostic Tool"],
        skills: ["Model Integration", "Deployment"],
        showcase: "Complete AI Tool"
      }
    ],
    miniProject: {
      title: "Mini Project 2: AI Assistant",
      combines: ["AI Models", "User Interface", "Data Logic"],
      functions: ["A personalized AI to solve a specific problem."],
      monthShowcase: "Month 2 Showcase: AI Prototype"
    }
  },
  {
    id: 3,
    title: "Internet of Things (IoT)",
    modules: "Modules 11–15",
    goal: "Connect the physical world to the internet and cloud data.",
    items: [
      {
        num: "Module 11",
        title: "Smart Sensors",
        projects: ["Cloud Data Logger", "Remote Monitor"],
        skills: ["WiFi Modules", "Cloud APIs"],
        showcase: "IoT Cloud Dashboard."
      },
      {
        num: "Module 12",
        title: "Wireless Communication",
        projects: ["Bluetooth Controller", "Remote Switch"],
        skills: ["BLE", "Network Protocols"],
        showcase: "Remote Control App"
      },
      {
        num: "Module 13",
        title: "Smart Environment",
        projects: ["Automated Climate Control"],
        skills: ["Feedback Loops", "Sensor Fusion"],
        showcase: "Climate System Model"
      },
      {
        num: "Module 14",
        title: "IoT Security",
        projects: ["Secure Data Transmission"],
        skills: ["Encryption", "Cybersecurity Basics"],
        showcase: "Secure Comms Network"
      },
      {
        num: "Module 15",
        title: "Global Cloud Platforms",
        projects: ["AWS/Firebase Integration"],
        skills: ["Serverless", "Database Management"],
        showcase: "Live Database Tracker"
      }
    ],
    miniProject: {
      title: "Mini Project 3: Smart System",
      combines: ["Hardware", "Cloud Database", "Web Dashboard"],
      functions: ["Live monitoring of environmental data."],
      monthShowcase: "Month 3 Showcase: IoT Dashboard"
    }
  },
  {
    id: 4,
    title: "Global Innovator Capstone",
    modules: "Modules 16–20",
    goal: "Develop a patent-worthy, globally scalable technological product.",
    items: [
      {
        num: "Module 16",
        title: "Product Design & CAD",
        projects: ["3D Modeling", "Enclosure Design"],
        skills: ["CAD", "Engineering Design"],
        showcase: "3D Printed Prototype Parts"
      },
      {
        num: "Module 17",
        title: "PCB & Circuitry",
        projects: ["Custom Circuit Board"],
        skills: ["Electronics", "Soldering"],
        showcase: "Custom Hardware"
      },
      {
        num: "Module 18",
        title: "Business & Feasibility",
        projects: ["Business Plan", "Cost Analysis"],
        skills: ["Entrepreneurship", "Finance Basics"],
        showcase: "Product Business Plan"
      },
      {
        num: "Module 19",
        title: "Final Integration",
        projects: ["System Assembly", "Testing"],
        skills: ["QA", "Debugging"],
        showcase: "Working Prototype"
      },
      {
        num: "Module 20",
        title: "Global Launch",
        projects: ["Investor Pitch", "Demo Video"],
        skills: ["Public Speaking", "Marketing"],
        showcase: "Grand Finale Pitch."
      }
    ],
    miniProject: {
      title: "Pre-Finale Checkpoint",
      combines: ["Finalizing Prototypes", "Design Polish"],
      functions: ["Preparing for the Global Innovation Expo"],
      monthShowcase: "Month 4 Showcase: Capstone Pitch"
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

export function GlobalStemInnovators({ planType = 'standard' }: { planType?: 'standard' | 'premium' }) {
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
        description: `Global Innovators (${planType === 'premium' ? 'Premium' : 'Standard'})`,
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
          color: '#0f8fff'
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

  const baseCoursePrice = planType === 'standard' ? 14999 : 19999;
  const kitPrice = includeKit ? 3999 : 0;
  const subtotal = baseCoursePrice + kitPrice;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  return (
    <div className="curriculum-page">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* VISION HERO */}
      <section className="vision-hero" style={{ background: 'linear-gradient(135deg, #010a1f 0%, #051a3d 100%)' }}>
        <div className="vision-content">
          <span className="vision-subtitle" style={{ color: '#0f8fff' }}>Become a Global Tech Leader</span>
          <h1>Global STEM Innovators Program {planType === 'premium' && <span style={{ color: '#f3b400' }}>(Premium)</span>}</h1>
          <p>
            An elite, comprehensive journey combining Advanced AI, Internet of Things (IoT), and Global Problem Solving. Equip your child with the skills to build solutions that scale worldwide.
          </p>
          <div className="curriculum-stats">
            <div className="stat-pill" style={{ borderColor: 'rgba(15, 143, 255, 0.4)' }}>
              <Users color="#0f8fff" />
              <span><strong>10–18</strong> Years Old</span>
            </div>
            <div className="stat-pill" style={{ borderColor: 'rgba(15, 143, 255, 0.4)' }}>
              <Globe color="#0f8fff" />
              <span><strong>International</strong> Projects</span>
            </div>
            <div className="stat-pill" style={{ borderColor: 'rgba(15, 143, 255, 0.4)' }}>
              <Lightbulb color="#0f8fff" />
              <span><strong>100%</strong> Innovation Focus</span>
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
                background: 'linear-gradient(to right, #0f8fff, #0a6bbf)',
                paddingLeft: '2.5rem',
                paddingRight: '2.5rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 25px rgba(15, 143, 255, 0.4)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.025em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(15, 143, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(15, 143, 255, 0.4)';
              }}
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <div className="timeline-wrapper">
        <section className="level-section">
          <div className="level-indicator" style={{ background: '#0a2f77', borderColor: '#0f8fff' }}>⭐</div>
          <div className="level-header">
            <h2>Orientation & Global Mindset</h2>
            <p className="level-goal">Pre-Course Foundation • <strong>Goal:</strong> Introduction to Global Impact</p>
          </div>
          
          <div className="modules-grid">
            <div className="module-card" style={{ borderColor: 'rgba(15, 143, 255, 0.4)' }}>
              <span className="module-number">Session 0</span>
              <h3>Welcome to Global Innovators</h3>
              <div className="module-content-section">
                <h4>What we will cover:</h4>
                <ul>
                  <li><CheckCircle2 color="#0f8fff" /> Tech solving Global Challenges (SDGs)</li>
                  <li><CheckCircle2 color="#0f8fff" /> Introduction to the Prototyping Kit</li>
                  <li><CheckCircle2 color="#0f8fff" /> Setting up the Software Environment</li>
                  <li><CheckCircle2 color="#0f8fff" /> Innovation Mindset & Ethics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {levels.map((level, i) => (
          <LevelAccordion key={level.id} level={level} defaultOpen={i === 0} />
        ))}

        {/* GRAND FINALE */}
        <section className="finale-section" style={{ borderColor: '#0f8fff' }}>
          <div className="level-indicator" style={{ background: '#0f8fff', color: '#fff', borderColor: '#0f8fff' }}>20</div>
          <div className="finale-card" style={{ background: 'linear-gradient(180deg, rgba(15, 143, 255, 0.1) 0%, transparent 100%)' }}>
            <h2>Module 20: Global Innovation Expo</h2>
            <p>Students present a fully functional product targeting an international problem.</p>

            <div className="finale-options">
              <div className="finale-option" style={{ borderColor: 'rgba(15, 143, 255, 0.3)' }}>
                <h4 style={{ color: '#0f8fff' }}>AI Health Assistant</h4>
                <ul>
                  <li>Symptom Checking AI</li>
                  <li>Data Dashboards</li>
                  <li>Secure Cloud Logging</li>
                </ul>
              </div>
              <div className="finale-option" style={{ borderColor: 'rgba(15, 143, 255, 0.3)' }}>
                <h4 style={{ color: '#0f8fff' }}>Smart Grid Energy</h4>
                <ul>
                  <li>Energy Optimization</li>
                  <li>IoT Usage Monitors</li>
                  <li>Automated Control</li>
                </ul>
              </div>
              <div className="finale-option" style={{ borderColor: 'rgba(15, 143, 255, 0.3)' }}>
                <h4 style={{ color: '#0f8fff' }}>Global Supply Chain Tracker</h4>
                <ul>
                  <li>GPS Integration</li>
                  <li>Logistics Algorithms</li>
                  <li>Predictive Delays AI</li>
                </ul>
              </div>
              <div className="finale-option" style={{ borderColor: 'rgba(15, 143, 255, 0.3)' }}>
                <h4 style={{ color: '#0f8fff' }}>Disaster Relief Bot</h4>
                <ul>
                  <li>Autonomous Navigation</li>
                  <li>Sensor Fusion Maps</li>
                  <li>Real-time Alerts</li>
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
            background: 'linear-gradient(to right, #0f8fff, #0a6bbf)',
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
            fontSize: '1.125rem',
            fontWeight: 'bold',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 25px rgba(15, 143, 255, 0.4)',
            transition: 'all 0.3s ease',
            letterSpacing: '0.025em'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 35px rgba(15, 143, 255, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(15, 143, 255, 0.4)';
          }}
        >
          Apply Now
        </button>
      </div>

      {/* POPUP MODAL */}
      {(showForm || success) && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '1rem' }}>
          {success ? (
            <div style={{ background: '#010a1f', padding: '3rem', borderRadius: '1rem', border: '1px solid rgba(15, 143, 255, 0.3)', maxWidth: '500px', width: '100%', textAlign: 'center', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
               <button onClick={() => {setShowForm(false); setSuccess(false);}} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'transparent', color: '#fff', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
               <h3 style={{ fontSize: '2rem', color: '#0f8fff', marginBottom: '1rem' }}>🎉 Application Successful!</h3>
               <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Welcome to the Global STEM Innovators Program. We will contact you shortly with the next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#010a1f', padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(15, 143, 255, 0.3)', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', maxHeight: '90vh', overflowY: 'auto' }}>
               <button type="button" onClick={() => setShowForm(false)} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'transparent', color: 'rgba(255,255,255,0.5)', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
               <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>Program Application</h3>
               
               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name of Student</label>
                 <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Grade of Student</label>
                 <input required type="text" value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})} placeholder="e.g. 9th Grade" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
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
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>City / Country</label>
                 <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1.5rem' }}>
                 <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', background: 'rgba(15,143,255,0.1)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(15,143,255,0.3)' }}>
                   <input type="checkbox" checked={includeKit} onChange={e => setIncludeKit(e.target.checked)} style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', accentColor: '#0f8fff' }} />
                   <div>
                     <span style={{ display: 'block', color: '#fff', fontWeight: 'bold' }}>Include Advanced Prototyping Kit (+ ₹3,999)</span>
                     <span style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Required for hardware-based modules</span>
                   </div>
                 </label>
               </div>

               <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                   <span>Program Fee</span>
                   <span>₹{baseCoursePrice.toLocaleString()}</span>
                 </div>
                 {includeKit && (
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                     <span>Prototyping Kit</span>
                     <span>₹{kitPrice.toLocaleString()}</span>
                   </div>
                 )}
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                   <span>GST (18%)</span>
                   <span>₹{gst.toLocaleString()}</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1.1rem', fontWeight: 'bold' }}>
                   <span>Total Payable</span>
                   <span style={{ color: '#0f8fff' }}>₹{total.toLocaleString()}</span>
                 </div>
               </div>

               <div style={{ display: 'flex', gap: '1rem' }}>
                 <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
                 <button type="submit" disabled={loading} style={{ flex: 2, padding: '0.75rem', borderRadius: '0.5rem', background: 'linear-gradient(to right, #0f8fff, #0a6bbf)', color: '#fff', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold', opacity: loading ? 0.7 : 1 }}>
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
