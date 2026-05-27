import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="hero-landing-page">
      <div className="hero-landing-overlay" aria-hidden="true" />
      <div className="hero-landing-circuit" aria-hidden="true" />
      
      <div className="hero-landing-container">
        <div className="hero-landing-badge">KNOWLEDGE BASE</div>
        
        <h1 className="hero-landing-title">
          Free <span>Resources</span>
        </h1>
        
        <p className="hero-landing-desc">
          Access a wealth of knowledge including tutorials, open-source code, and guides to accelerate your STEM journey.
        </p>
        
        <div className="hero-landing-glass-card">
          <h2>Library Coming Soon</h2>
          <p>We are organizing our free resource library for you.</p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/resources/downloads" className="nav-cta" style={{ textDecoration: 'none' }}>
              View Downloads
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
