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
    headline: "35+",
    title: "Achievements",
    description: "in Tech Fests & Competitions",
  },
  {
    icon: Users,
    headline: "1000+",
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
    year: "2008 – 2010",
    title: "B.Tech Degree",
    description: "Advanced into deeper concepts, working on practical circuits and microcontrollers.",
    icon: School,
  },
  {
    year: "2010 – 2012",
    title: "Master's Degree (M.Tech)",
    description: "Specialized in advanced communication systems and cutting-edge technology.",
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
    year: "2017 – 2020",
    title: "Freelancing & Consulting",
    description: "Built commercial embedded systems and IoT projects for diverse clients.",
    icon: Briefcase,
  },
  {
    year: "2020 – Present",
    title: "My Own Startup",
    description: "Founded STEM initiatives, building labs and training the next generation of innovators.",
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
            EDUCATOR.
            <br />
            INNOVATOR.
            <br />
            <span>MENTOR.</span>
          </h1>

          <div className="tagline">
            <span>INSPIRING MINDS. BUILDING FUTURES.</span>
          </div>

          <h2 className={`name ${greatVibes.className}`}>
            Varun Sanduja
          </h2>

          <p className="roles">
            Educator | Innovator | Mentor | Entrepreneur
          </p>

          <div className="info-box">
            <div className="icon-box">
              <GraduationCap strokeWidth={1.75} aria-hidden />
            </div>
            <div className="info-text">
              <h3>
                Electronics &amp; Communication Engineering
              </h3>
              <p>
                Diploma (2005–2008) | B.Tech – M.Tech (2008–2012)
              </p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon-box">
              <Users strokeWidth={1.75} aria-hidden />
            </div>
            <div className="info-text">
              <h3>Assistant Professor</h3>
              <p>
                Department of Electronics &amp; Communication
              </p>
              <span>2012 – 2017</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="right-content">
          <div className="quote-wrapper">
            <div className="quote-card">
              <div className="quote-icon" aria-hidden>
                “
              </div>
              <h2>
                The best way to predict the future is to{" "}
                <span>create it.</span>
              </h2>
              <div className="line" aria-hidden />
              <p>— Peter Drucker</p>
            </div>
          </div>
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
