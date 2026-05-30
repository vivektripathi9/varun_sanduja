import React from "react";

export function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">
          BENEFITS FOR YOUR CHILD
        </h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">📱</div>
            <h3>Reduces screen dependency</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🎯</div>
            <h3>Improves focus & concentration</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">💡</div>
            <h3>Enhances creativity & imagination</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🧩</div>
            <h3>Builds problem solving skills</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🙌</div>
            <h3>Boosts confidence & communication</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🚀</div>
            <h3>Prepares for future careers</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
