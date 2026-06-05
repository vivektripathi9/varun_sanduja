import Image from "next/image";

export function ProgramPlansSection() {
  return (
    <section className="pp-section">
      <div className="pp-container">
        {/* HEADING */}
        <div className="pp-heading">
          <h2>PROGRAM PLANS</h2>
          <p>Choose the plan that fits your child’s learning needs.</p>
        </div>

        {/* PLAN WRAPPER */}
        <div className="pp-wrapper">
          {/* STANDARD PLAN */}
          <div className="pp-card">
            <div className="pp-image">
              <Image 
                src="/basic-course.png" 
                alt="Standard Plan" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="pp-content">
              <div className="pp-badge pp-standard-badge">
                STANDARD PLAN
              </div>

              <div className="pp-price pp-green-price">
                ₹9,999/-
                <span className="pp-kit-text">+ ₹2,999/- STEM KIT</span>
              </div>

              <div className="pp-batch-tag">
                BATCH SIZE: 5 - 7 KIDS
              </div>

              <ul className="pp-features">
                <li>
                  <span className="pp-check-green">✔</span>
                  20 Live Sessions (1 Hour Each)
                </li>
                <li>
                  <span className="pp-check-green">✔</span>
                  Small Group Learning
                </li>
                <li>
                  <span className="pp-check-green">✔</span>
                  Robotics, Coding & Electronics
                </li>
                <li>
                  <span className="pp-check-green">✔</span>
                  Creativity & Innovation Challenges
                </li>
                <li>
                  <span className="pp-check-green">✔</span>
                  Performance Tracking Sheet
                </li>
                <li>
                  <span className="pp-check-green">✔</span>
                  Certificate & Project Showcase
                </li>
              </ul>

              <div className="pp-total-box pp-total-green">
                TOTAL: ₹12,998/-
              </div>
            </div>
          </div>

          {/* PREMIUM PLAN */}
          <div className="pp-card">
            <div className="pp-image">
              <Image 
                src="/1-1course.png" 
                alt="Premium Plan" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="pp-content">
              <div className="pp-badge pp-premium-badge">
                PREMIUM PLAN
              </div>

              <div className="pp-price pp-blue-price">
                ₹12,999/-
                <span className="pp-kit-text">+ ₹2,999/- STEM KIT</span>
              </div>

              <div className="pp-batch-tag">
                ONE-ON-ONE SESSIONS
              </div>

              <ul className="pp-features">
                <li>
                  <span className="pp-check-blue">✔</span>
                  20 One-on-One Sessions (1 Hour Each)
                </li>
                <li>
                  <span className="pp-check-blue">✔</span>
                  Personalized Learning Path
                </li>
                <li>
                  <span className="pp-check-blue">✔</span>
                  One-on-One Mentorship
                </li>
                <li>
                  <span className="pp-check-blue">✔</span>
                  Advanced Project Guidance
                </li>
                <li>
                  <span className="pp-check-blue">✔</span>
                  Performance Tracking Sheet
                </li>
                <li>
                  <span className="pp-check-blue">✔</span>
                  Parent Progress Updates
                </li>
              </ul>

              <div className="pp-total-box pp-total-blue">
                TOTAL: ₹15,998/-
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
