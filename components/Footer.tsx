import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-circuit" aria-hidden="true" />
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h2>VARUN SANDUJA</h2>
            <p>
              Empowering the next generation of innovators with practical STEM education, live mentorship, and hands-on learning experiences.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Image 
                src="/sign.png" 
                alt="Varun Sanduja Signature" 
                width={200} 
                height={70} 
                style={{ objectFit: 'contain', opacity: 0.9 }} 
              />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/live-classes">Live Classes</Link></li>
              <li><Link href="/school-solutions">School Solutions</Link></li>
              <li><Link href="/camps">Camps</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-links">
            <h3>Connect</h3>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/book-consultation">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p>Have questions? Reach out directly:</p>
            <div className="footer-phone">
              <a href="tel:+919592406555">
                <span className="phone-icon">📞</span>
                +91 9592406555
              </a>
            </div>
            <a href="https://wa.me/919592406555" target="_blank" rel="noopener noreferrer" className="footer-wa-btn">
              Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Varun Sanduja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
