import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "Live STEM Classes",
    description:
      "Robotics, coding, AI, IoT, Arduino and more for school to college students.",
    icon: "monitor",
  },
  {
    title: "1:1 Mentorship",
    description:
      "Personalized guidance for projects, careers, competitions and innovation.",
    icon: "chat",
  },
  {
    title: "School Solutions",
    description:
      "STEM lab setup, ATL setup, curriculum and teacher training programs.",
    icon: "school",
  },
  {
    title: "TechFest Conduct",
    description:
      "We organize robotics competitions, innovation fairs, hackathons and tech events.",
    icon: "stage",
  },
  {
    title: "Camps",
    description:
      "Summer and winter camps to learn, build and innovate with hands-on experiences.",
    icon: "robot",
  },
  {
    title: "STEMORBIT Store",
    description:
      "Electronics components, robotics kits, DIY kits and more for innovators.",
    icon: "cart",
  },
] as const;

const stats = [
  {
    icon: "cap",
    value: "10000+",
    label: "Students Mentored",
  },
  {
    icon: "schoolStat",
    value: "400+",
    label: "Schools Associated",
  },
  {
    icon: "trophy",
    value: "1000+",
    label: "Projects Completed",
  },
  {
    icon: "people",
    value: "14+",
    label: "Years of Impact",
  },
] as const;

function ProgramIcon({ name }: { name: (typeof programs)[number]["icon"] }) {
  const stroke = "#0f8fff";
  const common = {
    fill: "none" as const,
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "monitor":
      return (
        <img src="/robot-arm.png" alt="Robotics Icon" style={{ width: 56, height: 56, objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.85)' }} aria-hidden />
      );
    case "chat":
      return (
        <svg viewBox="0 0 40 40" width="56" height="56" aria-hidden>
          <circle cx="16" cy="16" r="6" {...common} />
          <path d="M22 18h6l4 4v-4h2a2 2 0 012 2v6l-4-3h-8" {...common} />
          <path d="M10 26c-2 0-3-1-3-3v-4" {...common} />
        </svg>
      );
    case "school":
      return (
        <svg viewBox="0 0 40 40" width="56" height="56" aria-hidden>
          <path d="M8 28V16l12-6 12 6v12" {...common} />
          <path d="M12 28v-8l8-4 8 4v8" {...common} />
          <path d="M18 28v-4h4v4" {...common} />
        </svg>
      );
    case "stage":
      return (
        <svg viewBox="0 0 40 40" width="56" height="56" aria-hidden>
          <path d="M6 30h28" {...common} />
          <path d="M10 30V18h20v12" {...common} />
          <path d="M6 14l14-6 14 6" {...common} />
          <circle cx="20" cy="10" r="2" fill={stroke} />
        </svg>
      );
    case "robot":
      return (
        <svg viewBox="0 0 40 40" width="56" height="56" aria-hidden>
          <rect x="12" y="14" width="16" height="14" rx="3" {...common} />
          <circle cx="17" cy="20" r="1.5" fill={stroke} />
          <circle cx="23" cy="20" r="1.5" fill={stroke} />
          <path d="M20 8v4M14 10h12" {...common} />
          <path d="M10 24H8M32 24h-2M16 30l-2 4M24 30l2 4" {...common} />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 40 40" width="56" height="56" aria-hidden>
          <circle cx="16" cy="30" r="2" {...common} />
          <circle cx="28" cy="30" r="2" {...common} />
          <path d="M6 10h4l4 16h16l4-12H12" {...common} />
        </svg>
      );
    default:
      return null;
  }
}

function StatIcon({ name }: { name: (typeof stats)[number]["icon"] }) {
  const s = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "cap":
      return (
        <svg viewBox="0 0 36 36" width="48" height="48" aria-hidden>
          <path d="M6 14l12-5 12 5-12 5-12-5z" {...s} />
          <path d="M18 19v10M8 16v8c0 2 4 4 10 4s10-2 10-4v-8" {...s} />
        </svg>
      );
    case "schoolStat":
      return (
        <svg viewBox="0 0 36 36" width="48" height="48" aria-hidden>
          <path d="M6 26V12l12-6 12 6v14" {...s} />
          <path d="M10 26v-9l8-4 8 4v9" {...s} />
          <path d="M15 26v-3h6v3" {...s} />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 36 36" width="48" height="48" aria-hidden>
          <path d="M10 8h16v4c0 4-2 7-5 8l1 6H14l1-6c-3-1-5-4-5-8V8z" {...s} />
          <path d="M8 10H6a2 2 0 00-2 2v2c0 2 2 3 4 3M28 10h2a2 2 0 012 2v2c0 2-2 3-4 3" {...s} />
          <path d="M12 30h12" {...s} />
        </svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 36 36" width="48" height="48" aria-hidden>
          <circle cx="12" cy="14" r="4" {...s} />
          <circle cx="24" cy="14" r="4" {...s} />
          <path d="M6 28c0-4 3-7 7-7h4c4 0 7 3 7 7M18 28c0-4 2.5-7 6-7" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

function StairsIllustration() {
  return (
    <svg
      className="programs-cta-art-svg"
      viewBox="0 0 200 140"
      width="200"
      height="140"
      aria-hidden
    >
      <defs>
        <linearGradient id="rocketBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f2744" />
          <stop offset="100%" stopColor="#1e3a5f" />
        </linearGradient>
      </defs>
      {/* Stairs */}
      <path
        d="M20 120 L20 100 L45 100 L45 85 L70 85 L70 70 L95 70 L95 55 L120 55 L120 40 L145 40 L145 28"
        fill="none"
        stroke="#0f2744"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
      {/* Step labels */}
      <text
        x="22"
        y="117"
        fontSize="7"
        fill="#64748b"
        fontWeight="600"
        style={{ fontFamily: "inherit" }}
      >
        CREATE
      </text>
      <text
        x="48"
        y="102"
        fontSize="7"
        fill="#64748b"
        fontWeight="600"
        style={{ fontFamily: "inherit" }}
      >
        LEARN
      </text>
      <text
        x="73"
        y="87"
        fontSize="7"
        fill="#64748b"
        fontWeight="600"
        style={{ fontFamily: "inherit" }}
      >
        PLAN
      </text>
      <text
        x="98"
        y="72"
        fontSize="7"
        fill="#64748b"
        fontWeight="600"
        style={{ fontFamily: "inherit" }}
      >
        SUCCEED
      </text>
      {/* Rocket */}
      <path
        d="M138 12 L152 8 L166 12 L160 32 L144 32 Z"
        fill="url(#rocketBody)"
        stroke="#0f2744"
        strokeWidth="1.2"
      />
      <path d="M150 32v8M144 40h12" stroke="#0f2744" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="152" cy="20" r="3" fill="#e8f4ff" stroke="#0f2744" strokeWidth="1" />
      {/* Person */}
      <circle cx="128" cy="108" r="5" fill="none" stroke="#0f2744" strokeWidth="1.4" />
      <path
        d="M128 113v12M120 125h16M124 118l-6-6M132 118l6-6"
        fill="none"
        stroke="#0f2744"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect
        x="2.5"
        y="3.5"
        width="13"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M2.5 7.5H15.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6 2V5M12 2V5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProgramsShowcaseSection() {
  return (
    <section className="programs-showcase" aria-labelledby="programs-showcase-heading">
      <div className="programs-showcase-inner">
        <div className="programs-showcase-main">
          <h2 id="programs-showcase-heading" className="programs-showcase-title">
            Explore <span className="programs-showcase-title-accent">Our Programs</span>
          </h2>

          <ul className="programs-cards">
            {programs.map((p) => (
              <li key={p.title} className="programs-card">
                <div className="programs-card-icon" aria-hidden>
                  <ProgramIcon name={p.icon} />
                </div>
                <h3 className="programs-card-title">{p.title}</h3>
                <p className="programs-card-desc">{p.description}</p>
              </li>
            ))}
          </ul>

          <div className="programs-stats" role="region" aria-label="STEMORBIT impact">
            {stats.map((item) => (
              <div key={item.label} className="programs-stat">
                <span className="programs-stat-icon" aria-hidden>
                  <StatIcon name={item.icon} />
                </span>
                <div className="programs-stat-text">
                  <span className="programs-stat-value">{item.value}</span>
                  <span className="programs-stat-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="programs-showcase-sidebar">
          <div className="programs-cta-box">
            <div className="programs-cta-copy">
              <h3 className="programs-cta-heading">Screen to Creator Course</h3>
              <p className="programs-cta-text">
                Transform from a passive screen consumer into an active creator. Learn robotics, coding, and innovation in our flagship program.
              </p>
              <Link href="/screen-to-creator" className="programs-cta-btn">
                Explore Course <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="programs-cta-art">
              <StairsIllustration />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
