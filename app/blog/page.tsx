import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import Image from "next/image";
import "./blog.css";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#021a4a] relative">
      <div className="hero-landing-page flex flex-col items-center justify-center pt-24 md:pt-20 pb-4 md:pb-2" style={{ minHeight: 'auto' }}>
        <div className="hero-landing-overlay" aria-hidden="true" />
        <div className="hero-landing-circuit" aria-hidden="true" />
        
        <div className="hero-landing-container" style={{ paddingTop: '0' }}>
          <div className="hero-landing-badge">INSIGHTS & UPDATES</div>
          
          <h1 className="hero-landing-title flex flex-wrap items-center justify-center gap-2 md:gap-4">
            Our <span>Blog</span>
          </h1>
          
          <p className="hero-landing-desc mt-4">
            Read the latest articles on technology trends, education, and our students&apos; success stories.
          </p>
        </div>
      </div>

      <section className="blog-grid-section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card">
              <div className="blog-card-image-wrapper">
                {post.image ? (
                  <Image src={post.image} alt={post.title} fill className="blog-card-image" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0f8fff]/20 to-transparent" />
                )}
              </div>
              <div className="blog-card-content">
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-readmore">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
