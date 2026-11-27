import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} — Engineering Case Study`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      url: `${siteConfig.domain.current}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${siteConfig.domain.current}/blog/${post.slug}`;

  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "Blog", url: `${siteConfig.domain.current}/blog` },
          { name: post.title, url: postUrl },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={postUrl}
        datePublished={post.publishedAt}
        tags={post.tags}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#9CA8BA] hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Engineering Insights</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="border-b border-white/[0.08] pb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="cyan">{post.category}</Badge>
            <span className="text-xs font-mono text-[#9CA8BA] flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-cyan-400" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg font-mono text-cyan-400">
            {post.tagline}
          </p>

          {/* Author & Meta bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs font-mono text-[#9CA8BA]">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-amber-400/30 bg-[#080B12]">
                <Image
                  src="/images/brand/software-devops-logo.jpg"
                  alt={post.author.brand}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[#F5F7FA] font-bold block">
                  {post.author.name}
                </span>
                <span className="text-gray-400 block">
                  {post.author.role} • {post.author.brand}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-blue-400" />
                {post.publishedAt}
              </span>
            </div>
          </div>

          {post.coverImage && (
            <div className="mt-8 relative h-60 sm:h-80 w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#080B12]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <nav aria-label="Table of Contents" className="my-10 rounded-xl border border-white/[0.08] bg-[#141B2B]/70 p-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Table of Contents</span>
            </h2>
            <ul className="space-y-2 text-sm font-mono">
              {post.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="text-[#9CA8BA] hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <span className="text-cyan-500/50">›</span>
                    <span>{toc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Content Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-[#9CA8BA] leading-relaxed text-base sm:text-lg">
          {post.content.split("\n\n").map((block, idx) => {
            if (block.startsWith("## ")) {
              const text = block.replace("## ", "").trim();
              const id = text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              return (
                <h2
                  key={idx}
                  id={id}
                  className="pt-6 text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] border-t border-white/[0.06] mt-8"
                >
                  {text}
                </h2>
              );
            }
            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const code = lines.slice(1, -1).join("\n");
              return (
                <pre
                  key={idx}
                  className="rounded-xl border border-white/[0.1] bg-[#0E1422] p-4 text-xs sm:text-sm font-mono text-cyan-300 overflow-x-auto my-4"
                >
                  <code>{code}</code>
                </pre>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={idx} className="list-disc list-inside space-y-2 pl-2">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-[#9CA8BA]">
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.startsWith("1. ")) {
              const items = block.split("\n").filter((l) => /^\d+\.\s/.test(l));
              return (
                <ol key={idx} className="list-decimal list-inside space-y-2 pl-2">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-[#9CA8BA]">
                      {item.replace(/^\d+\.\s/, "")}
                    </li>
                  ))}
                </ol>
              );
            }
            if (block === "---") {
              return <hr key={idx} className="border-white/[0.08] my-8" />;
            }
            return (
              <p key={idx} className="text-[#9CA8BA] leading-relaxed">
                {block}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-gray-500 mr-2">Tagged:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-cyan-300 border border-white/[0.06]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>More Articles</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#F5F7FA] hover:text-cyan-400 transition-colors"
          >
            <span>Discuss this topic</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
