import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bot,
  Box,
  Brain,
  Briefcase,
  Cpu,
  FileText,
  GraduationCap,
  MemoryStick,
  Presentation,
  School,
  Trophy,
  Users,
  Wifi,
} from "lucide-react";
import { Great_Vibes } from "next/font/google";
import { ProgramsShowcaseSection } from "../ProgramsShowcaseSection";
import "./AboutEducator.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const expertiseItems: { label: string; icon: LucideIcon }[] = [
  { label: "Embedded Systems", icon: Cpu },
  { label: "Communication Systems", icon: Activity },
  { label: "Electronics Design", icon: MemoryStick },
  { label: "Robotics & Automation", icon: Bot },
  { label: "IoT & Sensors", icon: Wifi },
  { label: "AI & Machine Learning", icon: Brain },
  { label: "3D Printing & Prototyping", icon: Box },
];

type StatRow = {
  icon: LucideIcon;
  headline: string;
  title: string;
  description: string;
};

const statsRows: StatRow[] = [
  {
    icon: FileText,
    headline: "40+",
    title: "Research Papers",
    description: "in Journals & Conferences",
  },
  {
    icon: Trophy,
    headline: "135+",
    title: "Achievements",
    description: "in Tech Fests & Competitions",
  },
  {
    icon: Users,
    headline: "10000+",
    title: "Students Mentored",
    description: "Academic & Projects",
  },
  {
    icon: Briefcase,
    headline: "1000+",
    title: "Professional Projects",
    description: "Worked On",
  },
  {
    icon: School,
    headline: "400+",
    title: "STEM Labs",
    description: "Schools & Colleges",
  },
  {
    icon: Presentation,
    headline: "Workshops",
    title: "Training Programs",
    description: "AI, Robotics & Coding",
  },
  {
    icon: GraduationCap,
    headline: "Educator",
    title: "Guide • Leader",
    description: "Future Innovators",
  },
];

const journeyItems = [
  {
    year: "2005 – 2008",
    title: "Diploma in Electronics",
    description: "Laid the technical foundation in Electronics and Communication Engineering.",
    icon: GraduationCap,
  },
  {
    year: "2008 – 2011",
    title: "B.Tech Degree",
    description: "Advanced into deeper concepts, working on practical circuits and microcontrollers.",
    icon: School,
  },
  {
    year: "2011 – 2012",
    title: "Master's Degree (M.Tech)",
    description: "Specialized in VLSI Design, Digital Image Processing, and Embedded Systems.",
    icon: GraduationCap,
  },
  {
    year: "2012 – 2015",
    title: "Research Papers",
    description: "Published 40+ research papers in reputed international journals and tech conferences.",
    icon: FileText,
  },
  {
    year: "2012 – 2017",
    title: "Assistant Professor",
    description: "Mentored students, guided tech projects, and led the ECE department.",
    icon: Users,
  },
  {
    year: "2017 – 2019",
    title: "Freelancing & Consulting",
    description: "Built commercial embedded systems and IoT projects for diverse clients.",
    icon: Briefcase,
  },
  {
    year: "2019 – Present",
    title: "My Own Startup - STEMOrbit",
    description: "Founded STEMOrbit, building 400+ STEM labs in schools and colleges, and training the next generation of innovators in AI, Robotics & Coding.",
    icon: Bot,
  },
];

export function AboutEducatorPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-section">
        {/* Background gradient from CSS is in .hero-section */}

        {/* Circuit grid */}
        <div className="circuit-lines" aria-hidden />

        {/* Left */}
        <div className="left-content">
          <h1 className="main-heading">
            Building India's Next
            <br />
            <span>STEM</span> Innovators
          </h1>

          <div className="tagline">
            <span>INSPIRING MINDS. BUILDING FUTURES.</span>
          </div>


          <div className="info-box">
            <div className="icon-box">
              <Briefcase strokeWidth={1.75} aria-hidden />
            </div>
            <div className="info-text">
              <h3>Founder &amp; CEO of STEMOrbit</h3>
              <p>2019 – Present</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon-box">
              <Users strokeWidth={1.75} aria-hidden />
            </div>
            <div className="info-text">
              <h3>Former Assistant Professor</h3>
              <p>2012 – 2018 (6 Years of Academic Mentorship)</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon-box">
              <GraduationCap strokeWidth={1.75} aria-hidden />
            </div>
            <div className="info-text">
              <h3>Electronics &amp; Communication Engineering</h3>
              <p>Diploma (2005–2008) | B.Tech – M.Tech (2008–2012)</p>
            </div>
          </div>

          <div className="signature-block">
            <img src="/sign.png" alt="Varun Sanduja Signature" className="left-signature-img" />
            <p className="signature-roles">STEM EXPERT | ENTREPRENEUR | INNOVATOR</p>
          </div>
        </div>

        {/* Right Content - Premium Features Stack */}
        <div className="right-content">
          <div className="features-wrapper">
            <div className="features-card">

              {/* Feature 1 */}
              <div className="feature-box">
                <div className="feature-icon">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="feature-text">
                  Live Classes &amp;<br />
                  Mentorship
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature-box">
                <div className="feature-icon">
                  <img src="/robot-arm.png" alt="Robotics" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="feature-text">
                  Robotics, Coding,<br />
                  AI, IoT &amp; More
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature-box">
                <div className="feature-icon">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
                  </svg>
                </div>
                <div className="feature-text">
                  STEM Lab Setup<br />
                  for Schools
                </div>
              </div>

              {/* Feature 4 */}
              <div className="feature-box">
                <div className="feature-icon">
                  <img src="/artificial-intelligence.png" alt="Projects & Competitions" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="feature-text">
                  Projects, Competitions<br />
                  &amp; TechFest
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Powered By Ribbon & Logo */}
        <div className="powered-by-ribbon">
          <span>POWERED BY</span>
        </div>
        <div className="powered-by-logo-corner">
          <img src="/steorbitlogo.png" alt="STEM Orbit" />
        </div>
      </section>

      {/* Expertise */}
      <section className="expertise-section">
        <div className="expertise-grid">
          {expertiseItems.map(({ label, icon: Icon }) => (
            <div key={label} className="expertise-item">
              <Icon strokeWidth={1.25} aria-hidden />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {statsRows.map((s, i) => (
            <div key={s.title} className="stat-card">
              <s.icon strokeWidth={1.25} aria-hidden />
              <h2>{s.headline}</h2>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="journey-section">
        <div className="journey-header">
          <h2>My Journey</h2>
          <p>A timeline of growth, learning, and innovation</p>
        </div>

        <div className="timeline-container">
          {journeyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="timeline-item">
                <div className="timeline-dot">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ProgramsShowcaseSection />

      {/* Footer strip */}
      <section className="footer-strip">
        <p>
          EMPOWERING STUDENTS. STRENGTHENING EDUCATION. SHAPING{" "}
          <span>TOMORROW.</span>
        </p>
      </section>
    </div>
  );
}
