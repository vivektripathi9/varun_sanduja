import React from 'react';
import { Users, ClipboardList, Cpu, Wrench, Lightbulb, Trophy, ArrowRight } from 'lucide-react';
import './ProgramJourneySection.css';

const steps = [
  {
    icon: Users,
    color: '#2fa742', // green
    title: "Parent Discovery Session",
    desc: "We understand your child's interests, learning style & goals."
  },
  {
    icon: ClipboardList,
    color: '#153a84', // dark blue
    title: "Student Skill Assessment",
    desc: "One-on-one interaction with expert mentor."
  },
  {
    icon: Cpu,
    color: '#6b21a8', // purple
    title: "STEM Foundation Learning",
    desc: "Basics of Electronics, Coding, Robotics & Design."
  },
  {
    icon: Wrench,
    color: '#ea580c', // orange/red
    title: "Hands-On Project Building",
    desc: "Build real projects & gain confidence."
  },
  {
    icon: Lightbulb,
    color: '#eab308', // yellow
    title: "Innovation Challenges",
    desc: "Solve real-world problems & think like innovators."
  },
  {
    icon: Trophy,
    color: '#2fa742', // green
    title: "Global Project Showcase",
    desc: "Present your projects & earn certificates & recognition."
  }
];

export function ProgramJourneySection() {
  return (
    <section className="pj-new-section">
      <div className="pj-new-container">
        <h2 className="pj-new-title">THE GLOBAL STEM JOURNEY</h2>
        
        <div className="pj-new-steps-wrapper">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="pj-new-step">
                <div className="pj-new-step-circle" style={{ backgroundColor: step.color }}>
                  <step.icon size={36} color="white" strokeWidth={1.5} />
                </div>
                <div className="pj-new-step-number">{index + 1}</div>
                <h3 className="pj-new-step-title">{step.title}</h3>
                <p className="pj-new-step-desc">{step.desc}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="pj-new-step-arrow">
                  <ArrowRight size={24} color="#153a84" strokeWidth={2.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
