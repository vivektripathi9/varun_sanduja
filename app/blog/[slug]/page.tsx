import { blogPosts } from "@/data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

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
    <main className="min-h-screen w-full bg-[#021a4a] relative flex flex-col items-center">
      {/* Decorative elements matching site design */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(15,143,255,0.08),transparent_55%),radial-gradient(ellipse_50%_40%_at_80%_100%,rgba(243,180,0,0.06),transparent_50%)] z-0 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[600px] h-full opacity-5 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px] z-1 pointer-events-none" aria-hidden="true" />

      <article className="relative z-10 w-full max-w-[900px] px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">

        <Link href="/blog" className="inline-flex items-center text-[#0f8fff] hover:text-white transition-colors mb-12 group font-medium">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transition-transform group-hover:-translate-x-1"><path d="m15 18-6-6 6-6"/></svg>
          Back to Blog
        </Link>
        
        <header className="mb-16 text-center">
          <div className="inline-block bg-[#f3b400]/10 border border-[#f3b400]/30 text-[#f3b400] text-sm font-bold px-4 py-1.5 rounded-full tracking-wider mb-6">
            {post.date}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
            {post.title}
          </h1>
          {post.image && (
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-white/10 mt-12">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021a4a] to-transparent opacity-60" />
            </div>
          )}
        </header>

        <div className="max-w-none text-white/80
          [&_h2]:text-3xl md:[&_h2]:text-4xl [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:text-[#0f8fff] [&_h2]:font-bold
          [&_h3]:text-2xl md:[&_h3]:text-3xl [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-[#f3b400] [&_h3]:font-bold
          [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg
          [&_strong]:text-white [&_strong]:font-bold
          [&_ul]:list-[disc] [&_ul]:pl-8 [&_ul]:mb-6 [&_ul_li]:mb-3 [&_ul_li]:text-lg [&_ul_li]:pl-2
          [&_p>strong]:text-white [&_p>strong]:font-bold
          [&_a]:text-[#0f8fff] hover:[&_a]:text-white [&_a]:transition-colors">
          {post.content}
        </div>
      </article>
    </main>
  );
}
