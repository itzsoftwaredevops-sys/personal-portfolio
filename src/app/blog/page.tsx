import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { blogPosts } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Engineering Insights & Articles",
  description:
    "Technical articles, architectural deep dives, and engineering case studies by Abdulganiyyu Mustapha Muhammad (Itz Software DevOps).",
};

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "Blog", url: `${siteConfig.domain.current}/blog` },
        ]}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TECHNICAL WRITING & ARCHITECTURE"
          title="Engineering Insights & Case Studies"
          description="In-depth explorations of cryptographic verification, RFC 8785 canonical hashing, smart contract security, and high-velocity open-source development."
        />

        {/* Featured First Article */}
        {blogPosts.length > 0 && (
          <div className="mb-12">
            <article className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#141B2B] to-[#101522] p-6 sm:p-10 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
              {blogPosts[0].coverImage && (
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="block relative h-52 sm:h-64 w-full overflow-hidden rounded-xl mb-6 border border-white/[0.08] bg-[#080B12]"
                >
                  <Image
                    src={blogPosts[0].coverImage}
                    alt={blogPosts[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141B2B]/80 via-transparent to-transparent" />
                </Link>
              )}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="cyan">{blogPosts[0].category}</Badge>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  Featured Article
                </span>
                <span className="text-xs font-mono text-[#9CA8BA] ml-auto flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {blogPosts[0].readingTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] group-hover:text-cyan-400 transition-colors">
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  {blogPosts[0].title}
                </Link>
              </h2>

              <p className="mt-2 text-sm font-mono text-cyan-400/90">
                {blogPosts[0].tagline}
              </p>

              <p className="mt-4 text-base text-[#9CA8BA] leading-relaxed">
                {blogPosts[0].excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-4 text-xs font-mono text-[#9CA8BA]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-blue-400" />
                    {blogPosts[0].publishedAt}
                  </span>
                  <span>By {blogPosts[0].author.name}</span>
                </div>

                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span>Read Technical Deep Dive</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          </div>
        )}

        {/* Additional Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#141B2B]/75 p-6 sm:p-7 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-[#182236] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="blue">{post.category}</Badge>
                  <span className="text-xs font-mono text-[#9CA8BA] flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] group-hover:text-cyan-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="mt-3 text-sm text-[#9CA8BA] leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/[0.04] px-2 py-0.5 text-[11px] font-mono text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">
                  {post.publishedAt}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
