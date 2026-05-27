import Link from "next/link";

export default function LiveClassesPage() {
  return (
    <main className="hero-landing-page">
      <div className="hero-landing-overlay" aria-hidden="true" />
      <div className="hero-landing-circuit" aria-hidden="true" />
      
      <div className="hero-landing-container">
        <div className="hero-landing-badge">ONLINE LEARNING</div>
        
        <h1 className="hero-landing-title">
          Live STEM <span>Classes</span>
        </h1>
        
        <p className="hero-landing-desc">
          Interactive, expert-led sessions in Robotics, AI, Coding, and IoT designed to build real-world skills.
        </p>
        
        <div className="hero-landing-glass-card">
          <h2>Content Coming Soon</h2>
          <p>We are currently updating our course catalog. Check back soon for exciting new classes!</p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/live-classes/schedule" className="nav-cta" style={{ textDecoration: 'none' }}>
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
