import Image from "next/image";

export function StemKitTrackingSection() {
  return (
    <section className="sk-section">
      <div className="sk-container">
        {/* ================================= */}
        {/* STEM KIT */}
        {/* ================================= */}
        <div className="sk-card">
          <div className="sk-top">
            {/* LEFT */}
            <div className="sk-left">
              <h2>STEM KIT (₹2,999/-)</h2>
              <p>
                All the essential components to build,
                experiment & innovate.
              </p>

              {/* COMPONENTS */}
              <div className="sk-grid">
                <div className="sk-item">
                  <div className="sk-icon">🔌</div>
                  <h4>Arduino UNO</h4>
                </div>
                <div className="sk-item">
                  <div className="sk-icon">📟</div>
                  <h4>Breadboard</h4>
                </div>
                <div className="sk-item">
                  <div className="sk-icon">📡</div>
                  <h4>Sensors</h4>
                </div>
                <div className="sk-item">
                  <div className="sk-icon">⚙️</div>
                  <h4>Motors</h4>
                </div>
                <div className="sk-item">
                  <div className="sk-icon">💡</div>
                  <h4>LEDs & Resistors</h4>
                </div>
                <div className="sk-item">
                  <div className="sk-icon">🧵</div>
                  <h4>Jumper Wires</h4>
                </div>
                <div className="sk-item">
                  <div className="sk-icon">🔘</div>
                  <h4>Buzzer & Buttons</h4>
                </div>
                <div className="sk-item">
                  <div className="sk-icon">➕</div>
                  <h4>And Many More!</h4>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="sk-right">
              <Image 
                src="/hero.png" 
                alt="STEM Kit" 
                width={420} 
                height={420} 
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
              <div className="sk-quality-badge">
                HIGH QUALITY<br />
                COMPONENTS
              </div>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* PERFORMANCE TRACKING */}
        {/* ================================= */}
        <div className="sk-card sk-tracking-card">
          <div className="sk-tracking-top">
            <h2>CHILD PERFORMANCE TRACKING</h2>
            <p>Parents monitor. We guide. Child improves.</p>
          </div>

          <div className="sk-tracking-flex">
            {/* SHEET */}
            <div className="sk-sheet-box">
              <Image 
                src="/hero.png" 
                alt="Performance Sheet" 
                width={600} 
                height={400}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '20px' }}
              />
            </div>

            {/* LIST */}
            <ul className="sk-tracking-list">
              <li>
                <span className="sk-check">✔</span>
                Daily screen-time monitoring
              </li>
              <li>
                <span className="sk-check">✔</span>
                Learning engagement tracking
              </li>
              <li>
                <span className="sk-check">✔</span>
                Activity completion
              </li>
              <li>
                <span className="sk-check">✔</span>
                Focus, behavior & participation notes
              </li>
              <li>
                <span className="sk-check">✔</span>
                Weekly improvement updates
              </li>
              <li>
                <span className="sk-check">✔</span>
                Parents must update regularly
              </li>
            </ul>

            {/* PARENT ROLE */}
            <div className="sk-parent-role">
              <div className="sk-role-icon">👥</div>
              <h3>PARENT ROLE</h3>
              <p>
                Monitor daily screen time and mobile
                usage patterns and update the performance
                sheet regularly.
              </p>
              <div className="sk-role-bottom">
                TOGETHER WE CAN BUILD<br />
                A BETTER DIGITAL FUTURE<br />
                FOR OUR CHILDREN.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
