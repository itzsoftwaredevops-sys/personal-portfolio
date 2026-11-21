import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteConfig";
import { blogPosts } from "@/data/blog";

export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} - Engineering Insights</title>
    <link>${siteConfig.domain.current}/blog</link>
    <description>${siteConfig.seo.defaultDescription}</description>
    <language>en-US</language>
    <atom:link href="${siteConfig.domain.current}/feed.xml" rel="self" type="application/rss+xml"/>
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteConfig.domain.current}/blog/${post.slug}</link>
      <guid>${siteConfig.domain.current}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
