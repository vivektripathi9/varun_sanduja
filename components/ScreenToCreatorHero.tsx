import Link from "next/link";

const benefitAccent = "#f97316";
/** Line icon color on dark hero */
const benefitInk = "#e2e8f0";

function IconReduceScreen() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className="stc-benefit-svg">
      <rect
        x="14"
        y="10"
        width="20"
        height="32"
        rx="3"
        stroke={benefitInk}
        strokeWidth="2"
      />
      <line x1="18" y1="16" x2="30" y2="16" stroke={benefitInk} strokeWidth="1.5" />
      <circle cx="24" cy="28" r="9" stroke="#ef4444" strokeWidth="2" />
      <line x1="18" y1="22" x2="30" y2="34" stroke="#ef4444" strokeWidth="2" />
    </svg>
  );
}

function IconBrainFocus() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className="stc-benefit-svg">
      <path
        d="M24 12c-4 0-7 2.5-8 6-.8-1-2.2-1.6-3.8-1.6C8.5 16.4 7 18.8 7 21.5c0 1.2.4 2.3 1 3.2C6.4 25.8 6 27.3 6 29c0 4.4 3.6 8 8 8h1.5c1.1 2.2 3.4 3.8 6.1 3.8h4.8c2.7 0 5-1.6 6.1-3.8H34c4.4 0 8-3.6 8-8 0-1.7-.4-3.2-1-4.3.6-.9 1-2 1-3.2 0-2.7-1.5-5.1-3.7-6.1-1-3.5-4-6-8-6Z"
        stroke={benefitInk}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M8 10l4 4M40 10l-4 4M6 26h4M38 26h4" stroke={benefitAccent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconRobotStem() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className="stc-benefit-svg">
      <path d="M24 6v4" stroke={benefitInk} strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="5" r="2" fill={benefitAccent} />
      <rect x="12" y="14" width="24" height="22" rx="5" stroke={benefitInk} strokeWidth="2" />
      <circle cx="19" cy="24" r="2.5" fill={benefitInk} />
      <circle cx="29" cy="24" r="2.5" fill={benefitInk} />
      <path d="M18 32h12" stroke={benefitInk} strokeWidth="2" strokeLinecap="round" />
      <path d="M10 22H8M40 22h-2" stroke={benefitAccent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className="stc-benefit-svg">
      <path
        d="M28 8c6 4 10 12 10 20 0 6-2 11-5 14l-3-8-8-3c8-3 14-10 16-18"
        stroke={benefitInk}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 38l-4-10 10-4-4 10-2 4Z" stroke={benefitInk} strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 28c-4 2-6 6-6 10" stroke={benefitInk} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 36c-2 4-6 6-10 6" stroke={benefitInk} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 34l6 8" stroke={benefitAccent} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className="stc-benefit-svg">
      <circle cx="24" cy="22" r="16" fill="rgba(255, 255, 255, 0.1)" />
      <path d="M16 14h16v4c0 4-2.5 7-6 8v2H22v-2c-3.5-1-6-4-6-8v-4Z" stroke={benefitInk} strokeWidth="2" />
      <path d="M14 14H10v2c0 2 1.5 3.5 3.5 3.5H16M34 14h4v2c0 2-1.5 3.5-3.5 3.5H32" stroke={benefitInk} strokeWidth="1.5" />
      <path d="M20 34h8v4H20v-4Z" stroke={benefitInk} strokeWidth="2" />
      <path d="M18 38h12" stroke={benefitInk} strokeWidth="2" strokeLinecap="round" />
      <path d="M24 18l1.5 3 3.5.5-2.5 2.5.6 3.5L24 26l-3.1 1.5.6-3.5-2.5-2.5 3.5-.5L24 18Z" fill={benefitAccent} />
    </svg>
  );
}

const BENEFITS = [
  { Icon: IconReduceScreen, line1: "Reduce", line2: "Screen Time" },
  { Icon: IconBrainFocus, line1: "Improve Focus", line2: "& Creativity" },
  { Icon: IconRobotStem, line1: "Hands-On", line2: "STEM Learning" },
  { Icon: IconRocket, line1: "Build Innovation", line2: "Mindset" },
  { Icon: IconTrophy, line1: "Confidence &", line2: "Future Skills" },
] as const;

export function ScreenToCreatorHero() {
  return (
    <section className="stc-section">
      <div className="stc-container">
        {/* LEFT */}
        <div className="stc-left">
          <div className="stc-badge">TURN SCREEN TIME INTO FUTURE SKILLS</div>
          
          <div className="stc-heading-wrap">
            <h1>
              Screen To <br />
              <span className="stc-accent-text">Creator</span>
            </h1>
            <div className="stc-subtitle">
              Hands-On Robotics, Coding & Electronics for Ages 8–16
            </div>
          </div>

          <p className="stc-description">
            A unique STEM transformation program that helps children move
            from passive mobile usage to creative technology building.
          </p>

        </div>

        {/* RIGHT CARD */}
        <div className="stc-card">
          <h3>What Your Child Will Build</h3>

          <ul>
            <li><span className="check-icon">✓</span> Robot Cars</li>
            <li><span className="check-icon">✓</span> Coding Projects</li>
            <li><span className="check-icon">✓</span> Smart Electronics</li>
            <li><span className="check-icon">✓</span> AI & Automation Basics</li>
            <li><span className="check-icon">✓</span> STEM Challenges</li>
          </ul>

          <div className="stc-card-actions">
            <Link href="/curriculum/robotics/standard" className="stc-outline-btn">
              View Curriculum
            </Link>
            <div className="stc-urgency-text">
              <span className="pulse-dot"></span> Limited Seats Per Batch
            </div>
          </div>
        </div>

      </div>

      <div className="stc-benefits-strip" role="list">
        {BENEFITS.map(({ Icon, line1, line2 }) => (
          <div className="stc-benefit" role="listitem" key={line1 + line2}>
            <div className="stc-benefit-icon-wrap" aria-hidden>
              <Icon />
            </div>
            <p className="stc-benefit-label">
              <span className="stc-benefit-line">{line1}</span>
              <span className="stc-benefit-line">{line2}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
