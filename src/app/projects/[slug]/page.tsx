import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  Cpu,
  FileCode2,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} — Architecture & Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.domain.current}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "Projects", url: `${siteConfig.domain.current}/projects` },
          { name: project.name, url: `${siteConfig.domain.current}/projects/${project.slug}` },
        ]}
      />

      <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#9CA8BA] hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="border-b border-white/[0.08] pb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="cyan">{project.category}</Badge>
            <Badge variant="blue">{project.subCategory}</Badge>
            <Badge
              variant={
                project.status === "Live & Deployed"
                  ? "emerald"
                  : project.status === "Open Source Contributions"
                  ? "amber"
                  : "neutral"
              }
            >
              {project.status}
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            {project.logo && (
              <div
                className={`relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl border border-white/[0.12] ${
                  project.logoLightBg ? "bg-white p-1" : "bg-[#080B12]"
                }`}
              >
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>
            )}
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] tracking-tight">
                {project.name}
              </h1>

              {project.tagline && (
                <p className="mt-1.5 text-base sm:text-lg font-mono text-cyan-400">
                  {project.tagline}
                </p>
              )}
            </div>
          </div>

          {project.image && (
            <div className="mt-8 relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#080B12] shadow-2xl">
              <Image
                src={project.image}
                alt={`${project.name} showcase banner`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/70 via-transparent to-transparent" />
            </div>
          )}

          <p className="mt-4 text-base sm:text-lg text-[#9CA8BA] leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Action Links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-xs font-mono font-semibold text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-cyan-400 transition-all"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-4 py-2.5 text-xs font-mono font-semibold text-gray-200 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <Github className="h-4 w-4 text-blue-400" />
                <span>Source Repository</span>
              </a>
            )}
          </div>

          {/* Metrics Panel */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#141B2B]/70 border border-white/[0.08]">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xs font-mono text-[#9CA8BA]">{m.label}</span>
                  <span className="text-sm sm:text-base font-bold text-[#F5F7FA] mt-1 font-mono">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Repository Links for Multi-Repo Contributions (e.g. Stellar) */}
          {project.repoLinks && project.repoLinks.length > 0 && (
            <div className="mt-6 p-4 rounded-xl bg-[#0E1422] border border-white/[0.08]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <Github className="h-3.5 w-3.5" />
                <span>Verified Contribution Repositories (Drips Stellar Waves 9, 10 &amp; 11)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.repoLinks.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded bg-white/[0.02] hover:bg-white/[0.06] text-xs font-mono text-gray-300 hover:text-cyan-300 border border-white/[0.04] transition-colors"
                  >
                    <span className="truncate">{repo.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 ml-1 text-cyan-400" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Disclaimer if present */}
          {project.disclaimer && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4 text-xs text-amber-200/90 leading-relaxed font-mono">
              <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{project.disclaimer}</span>
            </div>
          )}
        </header>

        {/* Technical Stack Section */}
        <section className="py-10 border-b border-white/[0.08]">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
            <Cpu className="h-4 w-4" />
            <span>Technologies & Engineering Tooling</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-mono text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Architecture Details */}
        <section className="py-10 space-y-12">
          {/* Problem Statement */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
              Problem Statement
            </h2>
            <p className="text-base text-[#9CA8BA] leading-relaxed">
              {project.architectureDetails.problemStatement}
            </p>
          </div>

          {/* Architecture Overview */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
              Architectural Overview
            </h2>
            <p className="text-base text-[#9CA8BA] leading-relaxed">
              {project.architectureDetails.architectureOverview}
            </p>
          </div>

          {/* Verification Model if available (e.g. VeriCred) */}
          {project.architectureDetails.verificationModel && (
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] p-6 space-y-4">
              <h3 className="text-lg font-bold text-cyan-300 font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
                <FileCode2 className="h-5 w-5 text-cyan-400" />
                <span>Deterministic 4-Stage Verification Process</span>
              </h3>
              <p className="text-xs text-[#9CA8BA]">
                VeriCred explicitly distinguishes between record existence, cryptographic digest integrity, Ethereum Sepolia blockchain anchor, and current lifecycle validity.
              </p>
              <div className="space-y-2.5 font-mono text-xs">
                {project.architectureDetails.verificationModel.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#0E1422] border border-white/[0.06] text-gray-200"
                  >
                    {stage}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
              Key Capabilities & Features
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {project.architectureDetails.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-[#141B2B]/60 p-3.5 text-sm text-[#9CA8BA]"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Decisions */}
          {project.architectureDetails.technicalDecisions.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                Key Technical & Architectural Decisions
              </h2>
              <div className="space-y-4">
                {project.architectureDetails.technicalDecisions.map((dec, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/[0.08] bg-[#101522] p-5 space-y-1.5"
                  >
                    <h3 className="text-base font-bold text-cyan-300 font-[family-name:var(--font-space-grotesk)]">
                      {dec.title}
                    </h3>
                    <p className="text-sm text-[#9CA8BA] leading-relaxed">
                      {dec.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Challenges */}
          {project.architectureDetails.engineeringChallenges.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                Engineering Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {project.architectureDetails.engineeringChallenges.map((ec, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/[0.08] bg-[#141B2B]/80 p-5 space-y-3"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                        Challenge:
                      </span>
                      <p className="text-sm font-medium text-gray-200">
                        {ec.challenge}
                      </p>
                    </div>
                    <div className="space-y-1 pt-2 border-t border-white/[0.04]">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                        Engineered Solution:
                      </span>
                      <p className="text-sm text-[#9CA8BA] leading-relaxed">
                        {ec.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All Projects</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-xs font-mono font-semibold text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-cyan-400 transition-all"
          >
            <span>Inquire About This Architecture</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </article>
    </div>
  );
}
