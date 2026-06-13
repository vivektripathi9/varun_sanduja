import Link from "next/link";
import { MonitorPlay, Bot, UserCheck, Globe, Medal, Building2, Users, BookOpen, GraduationCap } from "lucide-react";
import "./GlobalStemHero.css";

export function GlobalStemHero() {
  return (
    <section className="stem-hero">
      <div className="stem-hero-container">
        <div className="stem-hero-top-badge">
          <Globe className="stem-hero-top-badge-icon" />
          <div className="stem-hero-top-badge-text">
            <span className="stem-hero-top-badge-title">Students Across</span>
            <span className="stem-hero-top-badge-countries">
              USA &bull; Canada &bull; UK &bull; Australia<br/>
              UAE &bull; Singapore &amp; More
            </span>
          </div>
        </div>

        <div className="stem-hero-content">
          <div className="stem-hero-tag">
            For NRI Students (Age 6-16 Years)
          </div>

          <h1>
            <span className="stem-hero-blue">GLOBAL STEM</span>
            <span className="stem-hero-green">INNOVATORS</span>
            <span className="stem-hero-blue">PROGRAM</span>
          </h1>

          <div className="stem-hero-subtext">
            <h2 className="stem-hero-subtext-title">Future Skills Beyond Borders</h2>
            <p className="stem-hero-subtext-desc">
              Empowering NRI students with Robotics, AI, Coding &amp;<br className="stem-hero-subtext-br" />
              Innovation through live mentorship from India.
            </p>
          </div>

          <div className="stem-hero-features">
            <div className="stem-hero-feature">
              <MonitorPlay className="stem-hero-feature-icon" />
              <span>Live<br/>Online Classes</span>
            </div>
            <div className="stem-hero-feature-divider" />
            <div className="stem-hero-feature">
              <Bot className="stem-hero-feature-icon" />
              <span>Hands-On<br/>STEM Projects</span>
            </div>
            <div className="stem-hero-feature-divider" />
            <div className="stem-hero-feature">
              <UserCheck className="stem-hero-feature-icon" />
              <span>Expert<br/>Indian Mentors</span>
            </div>
            <div className="stem-hero-feature-divider" />
            <div className="stem-hero-feature">
              <Globe className="stem-hero-feature-icon" />
              <span>International<br/>STEM Community</span>
            </div>
            <div className="stem-hero-feature-divider" />
            <div className="stem-hero-feature">
              <Medal className="stem-hero-feature-icon" />
              <span>Innovation<br/>Challenges</span>
            </div>
          </div>

          <div className="stem-hero-buttons">
            <Link href="/book-consultation" className="stem-btn-primary">
              BOOK FREE CONSULTATION
            </Link>

            <a href="#curriculum" className="stem-btn-secondary">
              VIEW PROGRAM
            </a>
          </div>
        </div>
        <div className="stem-hero-stats">
          <div className="stem-hero-stat">
            <Building2 className="stem-hero-stat-icon stem-hero-stat-green" />
            <div className="stem-hero-stat-text">
              <span className="stem-hero-stat-num">400+</span>
              <span className="stem-hero-stat-desc">STEM Labs<br/>Established</span>
            </div>
          </div>
          <div className="stem-hero-stat-divider" />
          <div className="stem-hero-stat">
            <Users className="stem-hero-stat-icon stem-hero-stat-blue" />
            <div className="stem-hero-stat-text">
              <span className="stem-hero-stat-num">10,000+</span>
              <span className="stem-hero-stat-desc">Students<br/>Mentored</span>
            </div>
          </div>
          <div className="stem-hero-stat-divider" />
          <div className="stem-hero-stat">
            <BookOpen className="stem-hero-stat-icon stem-hero-stat-blue" />
          </div>
          <div className="stem-hero-stat-divider" />
          <div className="stem-hero-stat">
            <GraduationCap className="stem-hero-stat-icon stem-hero-stat-orange" />
            <div className="stem-hero-stat-text">
              <span className="stem-hero-stat-desc">Founder Led by</span>
              <span className="stem-hero-stat-num" style={{ color: '#153a84' }}>Varun Sanduja<br/>(M.Tech)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
