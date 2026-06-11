import "./BookConsultation.css";
import { Calendar, Clock, Video } from "lucide-react";

export default function BookConsultationPage() {
  return (
    <main className="consultation-page">
      {/* Background elements */}
      <div className="consultation-overlay" aria-hidden="true" />
      <div className="consultation-circuit" aria-hidden="true" />

      <div className="consultation-container">
        {/* Left Side: Copy and Information */}
        <div className="consultation-info">
          <div className="consultation-badge">BOOK CONSULTATION</div>
          
          <h1 className="consultation-title">
            Let&apos;s Discuss Your <span>STEM Journey</span>
          </h1>
          
          <p className="consultation-desc">
            Whether you&apos;re a student looking to build amazing projects, a parent seeking guidance, or a school wanting to set up a STEM lab, let&apos;s connect and map out the perfect plan.
          </p>

          <div className="consultation-features">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Video className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3>1-on-1 Video Call</h3>
                <p>Personalized discussion via Google Meet or Zoom.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3>30 Minutes</h3>
                <p>Focused time to understand your goals and requirements.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3>Flexible Timing</h3>
                <p>Pick a slot that works best for your schedule.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Calendly Embed */}
        <div className="consultation-calendly-wrapper">
          <div className="calendly-glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', textAlign: 'center', padding: '2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Ready to Start?</h2>
            <p style={{ marginBottom: '2rem', color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '400px' }}>
              Choose a time that works best for you and let&apos;s discuss your STEM journey.
            </p>
            <a 
              href="/book-demo-session"
              className="primary-btn"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', fontSize: '1.1rem' }}
            >
              Book Consultation Now →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
