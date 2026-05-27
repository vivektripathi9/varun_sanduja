import Link from "next/link";

export default function SchoolSolutionsPage() {
  return (
    <main className="hero-landing-page">
      <div className="hero-landing-overlay" aria-hidden="true" />
      <div className="hero-landing-circuit" aria-hidden="true" />
      
      <div className="hero-landing-container">
        <div className="hero-landing-badge">B2B EMPOWERMENT</div>
        
        <h1 className="hero-landing-title">
          School <span>Solutions</span>
        </h1>
        
        <p className="hero-landing-desc">
          Empowering schools with cutting-edge STEM lab setups, comprehensive curriculum, and expert teacher training.
        </p>
        
        <div className="hero-landing-glass-card">
          <h2>Transform Your Campus</h2>
          <p>Details about our STEM Lab setup packages and curricula are coming soon.</p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/contact" className="nav-cta" style={{ textDecoration: 'none' }}>
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
