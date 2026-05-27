export default function BlogPage() {
  return (
    <main className="hero-landing-page">
      <div className="hero-landing-overlay" aria-hidden="true" />
      <div className="hero-landing-circuit" aria-hidden="true" />
      
      <div className="hero-landing-container">
        <div className="hero-landing-badge">INSIGHTS & UPDATES</div>
        
        <h1 className="hero-landing-title">
          Our <span>Blog</span>
        </h1>
        
        <p className="hero-landing-desc">
          Read the latest articles on technology trends, education, and our students' success stories.
        </p>
        
        <div className="hero-landing-glass-card">
          <h2>Articles Coming Soon</h2>
          <p>We're writing some amazing content for you. Check back later!</p>
        </div>
      </div>
    </main>
  );
}
