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
          <div className="consultation-badge">FREE CONSULTATION</div>
          
          <h1 className="consultation-title">
            Let's Discuss Your <span>STEM Journey</span>
          </h1>
          
          <p className="consultation-desc">
            Whether you're a student looking to build amazing projects, a parent seeking guidance, or a school wanting to set up a STEM lab, let's connect and map out the perfect plan.
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
          <div className="calendly-glass-card">
            {/* You can replace 'your-calendly-link' with the actual username */}
            <iframe 
              src="https://calendly.com/your-calendly-link"
              width="100%" 
              height="700" 
              frameBorder="0" 
              scrolling="no"
              className="calendly-iframe"
              title="Book a consultation on Calendly"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
