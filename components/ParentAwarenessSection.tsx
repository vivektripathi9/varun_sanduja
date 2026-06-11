import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import "./ParentAwarenessSection.css";

export function ParentAwarenessSection() {
  return (
    <section className="pas-new-section">
      <div className="pas-new-container">
        <div className="pas-new-top-row">
          {/* Left: Image & Features */}
          <div className="pas-new-image-col">
            <Image
              src="/parents-awerness.png"
              alt="Parent Awareness Session"
              width={600}
              height={400}
              className="pas-new-image"
            />
          </div>

          {/* Right: Content */}
          <div className="pas-new-content-col">
            <div className="pas-new-header">
              <h2>PARENT AWARENESS SESSION <span>(OPTIONAL)</span></h2>
              <p>Understand the real situation before we begin.</p>
            </div>

            <div className="pas-new-details-row">
              {/* Fee Card */}
              <div className="pas-new-fee-card">
                <span className="pas-new-fee-label">FEE:</span>
                <span className="pas-new-fee-amount">₹999/-</span>
                <span className="pas-new-duration">DURATION: 1 HOUR | MODE: ONLINE</span>
              </div>

              {/* Checkmarks */}
              <ul className="pas-new-checklist">
                <li>
                  <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" className="pas-check-icon" />
                  Understand child&apos;s screen habits & daily routine
                </li>
                <li>
                  <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" className="pas-check-icon" />
                  Type of content seen on mobile (games, videos, social media etc.)
                </li>
                <li>
                  <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" className="pas-check-icon" />
                  Screen-time behavior, attention & emotional patterns
                </li>
                <li>
                  <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" className="pas-check-icon" />
                  Guidance for healthy technology habits
                </li>
                <li>
                  <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" className="pas-check-icon" />
                  Program suitability assessment & recommendations
                </li>
              </ul>
            </div>

            {/* 4 Floating Cards */}
            <div className="pas-new-feature-grid">
              <div className="pas-new-feature-card">
                <div className="pas-feature-icon-wrapper blue-glow">💡</div>
                <h4>Understand The Program</h4>
              </div>
              <div className="pas-new-feature-card">
                <div className="pas-feature-icon-wrapper orange-glow">👨‍👩‍👧</div>
                <h4>Benefits For Your Child</h4>
              </div>
              <div className="pas-new-feature-card">
                <div className="pas-feature-icon-wrapper green-glow">💻</div>
                <h4>Hands-On Learning</h4>
              </div>
              <div className="pas-new-feature-card">
                <div className="pas-feature-icon-wrapper red-glow">🛡️</div>
                <h4>Safe Environment</h4>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="pas-new-bottom-text">
              This session helps us understand your child better and guide you on the right transformation journey.
            </div>

            {/* Registration CTA */}
            <div className="pas-new-cta-row">
              <a href="/book-demo-session" className="pas-new-register-btn">Book consultation</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
