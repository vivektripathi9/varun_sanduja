export default function ContactPage() {
  return (
    <main className="hero-landing-page">
      <div className="hero-landing-overlay" aria-hidden="true" />
      <div className="hero-landing-circuit" aria-hidden="true" />
      
      <div className="hero-landing-container">
        <div className="hero-landing-badge">GET IN TOUCH</div>
        
        <h1 className="hero-landing-title">
          Contact <span>Us</span>
        </h1>
        
        <p className="hero-landing-desc">
          Have a question or want to collaborate? We'd love to hear from you.
        </p>
        
        <div className="hero-landing-glass-card">
          <h2>Contact Form Coming Soon</h2>
          <p>You can reach out to us directly via WhatsApp or phone at <a href="tel:+919592406555" style={{ color: '#f3b400' }}>+91 9592406555</a> or email for now.</p>
        </div>
      </div>
    </main>
  );
}
