import Link from "next/link";

const features = [
  {
    icon: "🎓",
    title: "Live Classes &",
    subtitle: "Mentorship",
  },
  {
    icon: "🤖",
    title: "Robotics, Coding",
    subtitle: "AI, IoT & More",
  },
  {
    icon: "🏫",
    title: "STEM Lab Setup",
    subtitle: "for Schools",
  },
  {
    icon: "🏆",
    title: "Projects, Competitions",
    subtitle: "& TechFest",
  },
] as const;

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="overlay" aria-hidden="true" />
      <div className="circuit-lines-hero" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-left">
          <div className="top-tag">FROM DIPLOMA TO M.TECH</div>

          <h1>
            Building India&apos;s Next
            <span>STEM Innovators</span>
          </h1>

          <p className="hero-description">
            Empowering students from schools to colleges with practical STEM
            education, live mentorship, and real-world innovation.
          </p>

          <div className="features-grid">
            {features.map((item) => (
              <div key={item.title} className="feature-item">
                <div className="feature-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <Link href="/live-classes" className="primary-btn">
              Join Live Classes →
            </Link>
            <Link href="/school-solutions" className="secondary-btn">
              Setup STEM Lab →
            </Link>
            <Link href="https://wa.me/919592406555" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
