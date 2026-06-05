import Image from "next/image";

export function ProgramJourneySection() {
  return (
    <section className="pj-section">
      <div className="pj-container">
        {/* HEADING */}
        <div className="pj-heading">
          <h2>PROGRAM JOURNEY</h2>
          <p>A transformation from screen overuse to skill creation.</p>
        </div>

        {/* STEPS */}
        <div className="pj-steps">
          <div className="pj-step">
            <div className="pj-step-circle pj-step-purple">👥</div>
            <div className="pj-arrow">→</div>
            <h3>1. PARENT AWARENESS</h3>
            <p>Understand the real situation and challenges</p>
          </div>

          <div className="pj-step">
            <div className="pj-step-circle pj-step-yellow">👦</div>
            <div className="pj-arrow">→</div>
            <h3>2. CHILD INTERACTION</h3>
            <p>Know the child’s habits, interests & behavior</p>
          </div>

          <div className="pj-step">
            <div className="pj-step-circle pj-step-blue">💡</div>
            <div className="pj-arrow">→</div>
            <h3>3. STEM ENGAGEMENT</h3>
            <p>Fun & interactive STEM activities</p>
          </div>

          <div className="pj-step">
            <div className="pj-step-circle pj-step-green">🤖</div>
            <div className="pj-arrow">→</div>
            <h3>4. HANDS-ON LEARNING</h3>
            <p>Robotics, coding & electronics</p>
          </div>

          <div className="pj-step">
            <div className="pj-step-circle pj-step-orange">🛠</div>
            <div className="pj-arrow">→</div>
            <h3>5. BUILD & INNOVATE</h3>
            <p>Mini projects & creative challenges</p>
          </div>

          <div className="pj-step">
            <div className="pj-step-circle pj-step-dark-purple">🏆</div>
            <h3>6. SHOWCASE & GROW</h3>
            <p>Build confidence & future-ready skills</p>
          </div>
        </div>

      </div>
    </section>
  );
}
