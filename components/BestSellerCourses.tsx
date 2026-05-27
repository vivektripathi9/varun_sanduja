import Link from "next/link";

const courses = [
  {
    id: 1,
    tag: "BESTSELLER",
    title: "Robotics & IoT Masterclass",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    sessions: "36 Live Sessions",
    price: "₹8,999",
    originalPrice: "₹14,999",
    featured: false,
  },
  {
    id: 2,
    tag: "MOST POPULAR",
    title: "Python & AI for Students",
    level: "Intermediate",
    duration: "10 Weeks",
    sessions: "30 Live Sessions",
    price: "₹7,499",
    originalPrice: "₹12,999",
    featured: true,
  },
  {
    id: 3,
    tag: "NEW BATCH",
    title: "Arduino & Embedded Systems",
    level: "Beginner Friendly",
    duration: "8 Weeks",
    sessions: "24 Live Sessions",
    price: "₹5,999",
    originalPrice: "₹9,999",
    featured: false,
  },
] as const;

export function BestSellerCourses() {
  return (
    <section className="bsc-section">
      <div className="bsc-inner">
        {/* Left — Big image + heading overlay */}
        <div className="bsc-left">
          <img
            src="/secondsection.png"
            alt="Varun Sanduja"
            className="bsc-photo"
            loading="lazy"
          />
          <div className="bsc-left-overlay">
            <span className="bsc-eyebrow">Featured Programs</span>
            <h2 className="bsc-heading">
              Best Seller
              <span>Courses</span>
            </h2>
          </div>
        </div>

        {/* Right — 3 course cards, middle one biggest */}
        <div className="bsc-cards">
          {courses.map((c) => (
            <article
              key={c.id}
              className={`bsc-card ${c.featured ? "bsc-card--featured" : ""}`}
            >
              {c.featured && (
                <div className="bsc-card-glow" aria-hidden="true" />
              )}
              <div className="bsc-card-tag">{c.tag}</div>
              <h3 className="bsc-card-title">{c.title}</h3>

              <ul className="bsc-card-meta">
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  {c.level}
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {c.duration}
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  {c.sessions}
                </li>
              </ul>

              <div className="bsc-card-divider" />

              <div className="bsc-card-footer">
                <div className="bsc-card-price">
                  <span className="bsc-price-current">{c.price}</span>
                  <span className="bsc-price-original">{c.originalPrice}</span>
                </div>
                <Link href="/live-classes" className="bsc-card-btn">
                  Enroll Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
