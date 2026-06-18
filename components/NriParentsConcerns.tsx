import React from 'react';
import { ChevronDown, MapPin, MonitorOff, Bot, Users, Cpu, BookOpen } from 'lucide-react';
import './NriParentsConcerns.css';

const concerns = [
  {
    icon: MapPin,
    title: "Children are disconnected from Indian culture and roots.",
    solution: "We bring India closer through mentorship, values & connection.",
    iconColor: "#e11d48"
  },
  {
    icon: MonitorOff,
    title: "Too much passive screen consumption.",
    solution: "We turn screen time into creation time with purpose.",
    iconColor: "#64748b"
  },
  {
    icon: Bot,
    title: "Lack of hands-on STEM exposure despite access to technology.",
    solution: "We provide real hands-on projects & STEM kits.",
    iconColor: "#0f8fff"
  },
  {
    icon: Users,
    title: "Limited opportunities to interact with Indian STEM mentors.",
    solution: "We connect them with India's top STEM educators.",
    iconColor: "#2fa742"
  },
  {
    icon: Cpu,
    title: "Need for future-ready skills (AI, Robotics, Coding, Innovation).",
    solution: "We build future skills for tomorrow's opportunities.",
    iconColor: "#8b5cf6"
  },
  {
    icon: BookOpen,
    title: "Parents want structured enrichment beyond school.",
    solution: "We offer a structured, mentored & results-driven program.",
    iconColor: "#f59e0b"
  }
];

export function NriParentsConcerns() {
  return (
    <section className="nri-concerns-section">
      <div className="nri-concerns-container">
        <h2 className="nri-concerns-title">WE UNDERSTAND NRI PARENTS&apos; UNIQUE CONCERNS</h2>
        
        <div className="nri-concerns-grid">
          {concerns.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="nri-concern-card">
                <div className="nri-concern-image-wrapper">
                  <Icon size={40} color={item.iconColor} strokeWidth={1.5} />
                </div>
                <p className="nri-concern-title">{item.title}</p>
                <div className="nri-concern-chevron">
                  <ChevronDown size={24} color="#cbd5e1" />
                </div>
                <p className="nri-concern-solution">{item.solution}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
