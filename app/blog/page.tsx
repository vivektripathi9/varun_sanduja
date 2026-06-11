import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="hero-landing-page">
      <div className="hero-landing-overlay" aria-hidden="true" />
      <div className="hero-landing-circuit" aria-hidden="true" />
      
      <div className="hero-landing-container" style={{ paddingBottom: '60px' }}>
        <div className="hero-landing-badge">INSIGHTS & UPDATES</div>
        
        <h1 className="hero-landing-title">
          Our <span>Blog</span>
        </h1>
        
        <p className="hero-landing-desc">
          Read the latest articles on technology trends, education, and our students&apos; success stories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col bg-[#040f20]/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#0f8fff]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0f8fff]/20">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                {post.image ? (
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f8fff]/20 to-transparent" />
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f3b400] text-black text-xs font-bold px-3 py-1 rounded-full">{post.date}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#0f8fff] transition-colors">{post.title}</h2>
                <p className="text-white/70 text-sm line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>
                <div className="text-[#0f8fff] font-semibold text-sm flex items-center gap-2 mt-auto">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
