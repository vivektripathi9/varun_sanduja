"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2.5 3.75L5 6.25L7.5 3.75"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
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

const dropdownChevronClass = "nav-dropdown-chevron";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="nav-brand" onClick={() => setMobileOpen(false)}>
          <span className="nav-brand-name">VARUN SANDUJA</span>
          <span className="nav-brand-tagline">Mentor. Innovator. Educator.</span>
        </Link>

        <button
          type="button"
          className="nav-mobile-toggle"
          aria-expanded={mobileOpen}
          aria-controls="site-nav-menu"
          onClick={() => setMobileOpen((o) => !o)}
          onTouchEnd={(e) => {
            e.preventDefault();
            setMobileOpen((o) => !o);
          }}
        >
          <span className="nav-mobile-toggle-bars" aria-hidden />
          <span className="sr-only">Toggle menu</span>
        </button>

        <nav
          id="site-nav-menu"
          className={`nav-center ${mobileOpen ? "nav-center--open" : ""}`}
          aria-label="Main"
        >
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "nav-link--active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <Link href="/screen-to-creator" className="nav-link" onClick={() => setMobileOpen(false)}>
            Screen to Creator Course
          </Link>

          <Link href="/blog" className="nav-link" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <Link href="/gallery" className="nav-link" onClick={() => setMobileOpen(false)}>
            Gallery
          </Link>
          <Link
            href="/contact"
            className="nav-cta nav-cta-mobile"
            onClick={() => setMobileOpen(false)}
          >
            <CalendarIcon className="nav-cta-icon" />
            Book Consultation
          </Link>
        </nav>

        <Link
          href="/contact"
          className="nav-cta nav-cta-desktop"
          onClick={() => setMobileOpen(false)}
        >
          <CalendarIcon className="nav-cta-icon" />
          Book Consultation
        </Link>
      </div>
    </header>
  );
}
