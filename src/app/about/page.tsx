import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Terminal,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Professional biography, academic background, industrial training, and engineering philosophy of Abdulganiyyu Mustapha Muhammad (Itz Software DevOps).",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "About", url: `${siteConfig.domain.current}/about` },
        ]}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="BIOGRAPHY & ENGINEERING PHILOSOPHY"
          title="About Abdulganiyyu Mustapha Muhammad"
          description="Software Engineer and Blockchain Developer focused on building scalable web applications, decentralized systems, blockchain-powered solutions, and smart contracts."
        />

        {/* Identity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          <div className="md:col-span-2 space-y-6 text-[#9CA8BA] leading-relaxed text-base sm:text-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
              Who I Am
            </h3>
            <p>
              I am an undergraduate Software Engineering student at <strong className="text-white">Federal University Dutse (FUD)</strong>, Nigeria, operating professionally under the brand <strong className="text-cyan-400">{siteConfig.brand}</strong>.
            </p>
            <p>
              My work focuses on the intersection of modern software engineering, Web3 infrastructure, distributed systems, developer tooling, and emerging technologies. I build software systems with a strong emphasis on determinism, cryptographic integrity, and reviewable architecture.
            </p>
            <p>
              Rather than merely experimenting with theoretical blockchain concepts, I focus on end-to-end execution: writing secure smart contracts in Solidity, establishing verifiable cryptographic hashes via canonical serialization, building full-stack web applications with React and Next.js, and implementing resilient backend architectures with Node.js and PostgreSQL.
            </p>
          </div>

          {/* Quick Facts Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#141B2B]/90 p-6 space-y-4 font-mono text-xs">
            <h4 className="text-sm font-bold text-[#F5F7FA] pb-2 border-b border-white/[0.06] flex items-center gap-2">
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span>Identity Snapshot</span>
            </h4>
            <div>
              <span className="text-gray-500 block">Full Name:</span>
              <span className="text-gray-200 font-semibold">{siteConfig.name}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Brand:</span>
              <span className="text-cyan-400 font-semibold">{siteConfig.brand}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Academic Status:</span>
              <span className="text-gray-200">B.Sc. Software Engineering (Undergraduate)</span>
            </div>
            <div>
              <span className="text-gray-500 block">Institution:</span>
              <span className="text-gray-200">Federal University Dutse (FUD), Nigeria</span>
            </div>
            <div>
              <span className="text-gray-500 block">Location:</span>
              <span className="text-gray-200">{siteConfig.location}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Primary Focus:</span>
              <span className="text-cyan-300">Full-Stack & Blockchain Engineering</span>
            </div>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-16">
          {/* Engineering Journey */}
          <section className="rounded-2xl border border-white/[0.08] bg-[#101522]/80 p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                My Software Engineering Journey
              </h3>
            </div>
            <p className="text-[#9CA8BA] leading-relaxed">
              My engineering journey began with the curiosity to understand how software systems communicate, store data, and enforce rules without human intervention. Starting with foundational computer science concepts, algorithms, and data structures at Federal University Dutse, I transitioned rapidly into hands-on web development.
            </p>
            <p className="text-[#9CA8BA] leading-relaxed">
              As I developed proficiency in JavaScript, TypeScript, and modern frontend frameworks like React, I realized that modern applications require more than appealing visual interfaces: they demand resilient architectures, clean separation of concerns, and robust error boundaries.
            </p>
          </section>

          {/* Academic Background & Industrial Training */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-white/[0.08] bg-[#141B2B]/70 p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                    Academic Background
                  </h4>
                  <p className="text-xs font-mono text-cyan-400">Federal University Dutse</p>
                </div>
              </div>
              <p className="text-sm text-[#9CA8BA] leading-relaxed">
                Enrolled in the B.Sc. Software Engineering degree program at Federal University Dutse (FUD), Nigeria. Coursework encompasses software engineering methodologies, data structures, algorithms, relational database design, operating systems, and computer network architecture.
              </p>
              <div className="pt-2">
                <Badge variant="neutral">Undergraduate Student</Badge>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#141B2B]/70 p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                    Industrial Training / SIWES
                  </h4>
                  <p className="text-xs font-mono text-emerald-400">CRAI LAB, FUD</p>
                </div>
              </div>
              <p className="text-sm text-[#9CA8BA] leading-relaxed">
                Underwent technical industrial training at the Compute Research Acceleration Initiative Artificial Intelligence Research Laboratory (CRAI LAB) from 1 June 2026 to 13 November 2026. Gained intensive practical exposure in responsive web development, advanced Python data structures, SQL database administration, and foundational machine learning techniques.
              </p>
              <div className="pt-2">
                <Badge variant="emerald">Completed Training (June–Nov 2026)</Badge>
              </div>
            </div>
          </section>

          {/* Interest in Blockchain & Decentralized Systems */}
          <section className="rounded-2xl border border-white/[0.08] bg-[#101522]/80 p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                Why Blockchain & Decentralized Systems?
              </h3>
            </div>
            <p className="text-[#9CA8BA] leading-relaxed">
              My interest in blockchain is rooted in computer science fundamentals: state machine replication, cryptographic hash functions, Byzantine fault tolerance, and unforgeable data provenance.
            </p>
            <p className="text-[#9CA8BA] leading-relaxed">
              In centralized systems, trust is assumed; in decentralized systems, trust is engineered. This paradigm led me to develop <strong className="text-white">VeriCred</strong>, an academic credential verification network that combines RFC 8785 canonical JSON with Ethereum Sepolia smart contracts, ensuring that academic certificates can be deterministically verified across independent parties without compromising student privacy.
            </p>
          </section>

          {/* Engineering Philosophy */}
          <section className="rounded-2xl border border-white/[0.08] bg-[#141B2B]/70 p-8 sm:p-10 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
              <span>Core Engineering Philosophy</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-[#F5F7FA] text-base font-[family-name:var(--font-space-grotesk)]">
                  1. Determinism Over Guesswork
                </h4>
                <p className="text-xs text-[#9CA8BA] leading-relaxed">
                  Cryptographic systems and smart contracts must execute deterministically across all clients and environments. Strict specifications (like RFC 8785) prevent silent failure modes.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#F5F7FA] text-base font-[family-name:var(--font-space-grotesk)]">
                  2. Surgical & Scoped PRs
                </h4>
                <p className="text-xs text-[#9CA8BA] leading-relaxed">
                  As proven during Drips Stellar Wave 10 (resolving 45/45 issues in 7 days), velocity comes from surgical precision, reproducible tests, and respect for maintainer time.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#F5F7FA] text-base font-[family-name:var(--font-space-grotesk)]">
                  3. Trustworthy Boundaries
                </h4>
                <p className="text-xs text-[#9CA8BA] leading-relaxed">
                  Keep heavy business logic and private PII off-chain; utilize smart contracts for tamper-evident proof anchoring, status state machines, and public verifiability.
                </p>
              </div>
            </div>
          </section>

          {/* What I am Currently Exploring */}
          <section className="rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] p-7 space-y-3">
            <h4 className="text-lg font-bold text-cyan-300 font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
              <Cpu className="h-5 w-5 text-cyan-400" />
              <span>What I Am Currently Exploring</span>
            </h4>
            <p className="text-sm text-[#9CA8BA] leading-relaxed">
              I am actively researching intent-based architectures, zero-knowledge verification primitives, modular rollup design, and enterprise-grade TypeScript microservices with NestJS. Through <strong className="text-white">Byzantine Nexus NG</strong>, I collaborate on fault-tolerant smart contract patterns and protocol design.
            </p>
          </section>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08]">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Explore My Featured Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-xs font-mono font-semibold text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-cyan-400 transition-all"
            >
              <span>Initiate Conversation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
