import { blogPosts } from "@/data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import "../blog.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | STEMORBIT Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-[#021a4a] relative pb-24">
      {/* 1. Hero Image */}
      {post.image && (
        <div className="w-full h-[50vh] md:h-[60vh] relative">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021a4a] via-[#021a4a]/40 to-transparent opacity-90" />
        </div>
      )}

      {/* 2. Title and Content */}
      <article className="relative z-10 w-full max-w-7xl mx-auto px-6 -mt-32 md:-mt-48">
        <header className="mb-12 text-center flex flex-col items-center">
          <Link href="/blog" className="inline-flex items-center text-[#0f8fff] hover:text-white transition-colors mb-8 group font-medium bg-[#021a4a]/80 backdrop-blur-md px-5 py-2 rounded-full border border-[#0f8fff]/20 shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transition-transform group-hover:-translate-x-1">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Blog
          </Link>
          
          <div className="bg-[#040f20]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl w-full">
            <div className="inline-block bg-[#f3b400]/10 border border-[#f3b400]/30 text-[#f3b400] text-xs md:text-sm font-bold px-4 py-1.5 rounded-full tracking-wider mb-6">
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg mb-12">
              {post.title}
            </h1>
            
            <div className="article-prose text-left">
              {post.content}
            </div>
          </div>
        </header>
      </article>
    </main>
  );
}
