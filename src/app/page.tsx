import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Send,
  MessageSquare,
  ShieldCheck,
  Cpu,
  Layers,
  Code2,
  Sparkles,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { achievements } from "@/data/achievements";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span>SOFTWARE ENGINEER / BLOCKCHAIN DEVELOPER</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] leading-[1.12]">
                Building Software. <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Engineering Trust.
                </span>{" "}
                <br />
                Exploring Decentralized Systems.
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-xl text-[#9CA8BA] leading-relaxed max-w-2xl">
                I&apos;m{" "}
                <strong className="text-[#F5F7FA] font-semibold">{siteConfig.name}</strong>, a Software Engineer and Blockchain Developer focused on building scalable web applications, decentralized systems, smart contracts, and technology-driven solutions.
              </p>

              {/* Availability pill */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#141B2B]/70 border border-white/[0.08] text-xs sm:text-sm font-mono text-gray-300 max-w-xl">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{siteConfig.status.label}</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-mono font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-400 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-mono font-semibold text-gray-200 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.2] transition-all"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                </Link>
              </div>

              {/* Social Channels Quick Row */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#9CA8BA]">
                <span className="text-gray-500 uppercase tracking-wider">Connect:</span>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Github className="h-3.5 w-3.5 text-blue-400" />
                  <span>GitHub</span>
                </a>
                <span>•</span>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                >
                  <span className="font-bold text-cyan-400">𝕏</span>
                  <span>Twitter</span>
                </a>
                <span>•</span>
                <a
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Send className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Telegram</span>
                </a>
                <span>•</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-amber-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Right Card / Avatar & Architecture Snapshot */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#101522]/90 p-6 sm:p-7 shadow-2xl backdrop-blur-md">
                {/* Visual Avatar / Identity Badge */}
                <div className="flex items-center gap-4 pb-6 border-b border-white/[0.08]">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-amber-400/40 bg-[#080B12] shadow-lg shadow-amber-500/15">
                    <Image
                      src="/images/brand/software-devops-logo.jpg"
                      alt="Itz Software DevOps — Abdulganiyyu Mustapha Muhammad"
                      fill
                      sizes="64px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#F5F7FA]">
                      {siteConfig.name}
                    </h2>
                    <p className="text-xs font-mono text-cyan-400">
                      {siteConfig.brand}
                    </p>
                    <p className="text-xs text-[#9CA8BA] mt-0.5">
                      FUD Software Engineering
                    </p>
                  </div>
                </div>

                {/* Identity Highlights */}
                <div className="mt-5 space-y-3.5 font-mono text-xs">
                  <div className="flex items-start gap-2.5">
                    <Code2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-400">Core Stack: </span>
                      <span className="text-gray-200">Solidity, TypeScript, React, Next.js, Node.js</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Cpu className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-400">Focus Areas: </span>
                      <span className="text-gray-200">Cryptographic Integrity, Smart Contracts, Relayers</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Layers className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-400">Featured System: </span>
                      <span className="text-gray-200">VeriCred (Academic Verification on Ethereum)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Sparkles className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-400">Open Source: </span>
                      <span className="text-gray-200">45/45 Issues Resolved (Drips Stellar Wave 10)</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <a
                    href="https://vericred.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between rounded-lg bg-blue-500/10 px-3.5 py-2 text-xs font-mono text-cyan-300 hover:bg-blue-500/20 border border-blue-500/30 transition-colors"
                  >
                    <span>Launch VeriCred Demo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED ACHIEVEMENTS SNAPSHOT */}
      <section className="py-12 border-b border-white/[0.06] bg-[#0B0F19]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="rounded-xl border border-white/[0.08] bg-[#141B2B]/60 p-5 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="cyan">{ach.dateOrWave}</Badge>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {ach.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                  {ach.metric}
                </h3>
                <p className="mt-1 text-xs font-mono text-blue-400">
                  {ach.title}
                </p>
                <p className="mt-2 text-xs text-[#9CA8BA] leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <SectionHeading
              eyebrow="ENGINEERING WORK"
              title="Featured Systems & Projects"
              description="A curated selection of real-world blockchain protocols, cryptographic verification systems, and open-source contributions."
              className="mb-0"
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
            >
              <span>View All 6 Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIALIZATIONS OVERVIEW */}
      <section className="py-20 border-b border-white/[0.06] bg-[#0A0E18]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TECHNICAL DOMAINS"
            title="Disciplined Engineering Across the Stack"
            description="Clear architectural boundaries with honest proficiency indicators — no arbitrary percentage bars."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.slice(0, 3).map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl border border-white/[0.08] bg-[#141B2B]/70 p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                    {cat.category}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#9CA8BA] leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs font-mono px-2.5 py-1 rounded border ${skill.highlight
                          ? "bg-blue-500/10 text-cyan-300 border-blue-500/30"
                          : "bg-white/[0.03] text-gray-300 border-white/[0.06]"
                          }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <Link
                    href="/skills"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    <span>Inspect complete skill matrix</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-b from-[#141B2B] to-[#0E1422] p-8 sm:p-14 shadow-2xl relative">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
              Ready to engineer reliable systems together?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9CA8BA] max-w-2xl mx-auto">
              Whether you need smart contract development, cryptographic verification pipelines, high-velocity open-source triage, or full-stack web applications, I am available for opportunities and technical collaboration.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-mono font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-400 transition-all"
              >
                <span>Initiate Engineering Inquiry</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.socials.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-mono font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
