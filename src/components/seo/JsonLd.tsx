import React from "react";
import { siteConfig } from "@/data/siteConfig";

interface PersonJsonLdProps {
  url?: string;
}

export function PersonJsonLd({ url = siteConfig.domain.current }: PersonJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}/#person`,
    name: siteConfig.name,
    alternateName: siteConfig.brand,
    url: url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: siteConfig.headline,
    description: siteConfig.bio,
    nationality: {
      "@type": "Country",
      name: siteConfig.location,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Federal University Dutse (FUD)",
    },
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.twitter,
      siteConfig.socials.telegram,
      siteConfig.socials.whatsappLink,
    ].filter(Boolean),
    knowsAbout: [
      "Software Engineering",
      "Blockchain Development",
      "Smart Contracts",
      "Solidity",
      "Ethereum",
      "Full-Stack Web Development",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "RFC 8785 Canonical JSON",
      "Distributed Systems",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebSiteJsonLdProps {
  url?: string;
}

export function WebSiteJsonLd({ url = siteConfig.domain.current }: WebSiteJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url: url,
    name: `${siteConfig.name} | ${siteConfig.brand}`,
    description: siteConfig.seo.defaultDescription,
    publisher: {
      "@id": `${url}/#person`,
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProfilePageJsonLdProps {
  url?: string;
}

export function ProfilePageJsonLd({ url = siteConfig.domain.current }: ProfilePageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}/#profilepage`,
    url: url,
    name: `${siteConfig.name} - Professional Digital Headquarters`,
    mainEntity: {
      "@id": `${url}/#person`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  tags: string[];
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  tags,
}: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.domain.current,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
    keywords: tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
