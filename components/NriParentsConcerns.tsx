import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import './NriParentsConcerns.css';

const concerns = [
  {
    imageSrc: "/placeholder-culture.png", // Replace with your image
    title: "Children are disconnected from Indian culture and roots.",
    solution: "We bring India closer through mentorship, values & connection."
  },
  {
    imageSrc: "/placeholder-screen.png", // Replace with your image
    title: "Too much passive screen consumption.",
    solution: "We turn screen time into creation time with purpose."
  },
  {
    imageSrc: "/placeholder-stem.png", // Replace with your image
    title: "Lack of hands-on STEM exposure despite access to technology.",
    solution: "We provide real hands-on projects & STEM kits."
  },
  {
    imageSrc: "/placeholder-mentor.png", // Replace with your image
    title: "Limited opportunities to interact with Indian STEM mentors.",
    solution: "We connect them with India's top STEM educators."
  },
  {
    imageSrc: "/placeholder-skills.png", // Replace with your image
    title: "Need for future-ready skills (AI, Robotics, Coding, Innovation).",
    solution: "We build future skills for tomorrow's opportunities."
  },
  {
    imageSrc: "/placeholder-enrichment.png", // Replace with your image
    title: "Parents want structured enrichment beyond school.",
    solution: "We offer a structured, mentored & results-driven program."
  }
];

export function NriParentsConcerns() {
  return (
    <section className="nri-concerns-section">
      <div className="nri-concerns-container">
        <h2 className="nri-concerns-title">WE UNDERSTAND NRI PARENTS&apos; UNIQUE CONCERNS</h2>
        
        <div className="nri-concerns-grid">
          {concerns.map((item, index) => (
            <div key={index} className="nri-concern-card">
              <div className="nri-concern-image-wrapper">
                {/* Image component. Will show alt text until the files are placed in /public */}
                <Image src={item.imageSrc} alt={item.title} width={120} height={100} className="nri-concern-image" />
              </div>
              <p className="nri-concern-title">{item.title}</p>
              <div className="nri-concern-chevron">
                <ChevronDown size={24} color="#cbd5e1" />
              </div>
              <p className="nri-concern-solution">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
