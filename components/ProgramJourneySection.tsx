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

        {/* SESSION CARD */}
        <div className="pj-session-card">
          <div className="pj-session-flex">
            {/* IMAGE */}
            <div className="pj-session-image">
              <Image 
                src="/hero.png" 
                alt="Parent Awareness Session" 
                width={500} 
                height={400} 
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>

            {/* CONTENT */}
            <div className="pj-session-content">
              <h2>
                PARENT AWARENESS SESSION
                <span>(OPTIONAL)</span>
              </h2>
              <p className="pj-session-subtext">
                Understand the real situation before we begin.
              </p>

              <div className="pj-session-details">
                {/* PRICE */}
                <div className="pj-price-box">
                  <h4>FEE:</h4>
                  <div className="pj-price">₹599/-</div>
                  <div className="pj-duration">DURATION: 1 HOUR</div>
                </div>

                {/* LIST */}
                <ul className="pj-session-list">
                  <li>
                    <span className="pj-check">✔</span>
                    Understand child’s screen habits & daily routine
                  </li>
                  <li>
                    <span className="pj-check">✔</span>
                    Type of content seen on mobile (games, videos, social media etc.)
                  </li>
                  <li>
                    <span className="pj-check">✔</span>
                    Screen-time behavior, attention & emotional patterns
                  </li>
                  <li>
                    <span className="pj-check">✔</span>
                    Guidance for healthy technology habits
                  </li>
                  <li>
                    <span className="pj-check">✔</span>
                    Program suitability assessment & recommendations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pj-bottom-note">
            This session helps us understand your child better and guide you
            on the right transformation journey.
          </div>
        </div>
      </div>
    </section>
  );
}
