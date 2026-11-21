"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const categories = [
  "All",
  "Blockchain / Web3",
  "Smart Contracts",
  "Open Source",
  "Developer Tools",
] as const;

type CategoryFilter = (typeof categories)[number];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "Projects", url: `${siteConfig.domain.current}/projects` },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ENGINEERING PORTFOLIO"
          title="Projects & Technical Architecture"
          description="Explore production-grade decentralized applications, cryptographic verification networks, protocol research, and verified open-source contributions."
        />

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm"
                  : "bg-white/[0.03] text-[#9CA8BA] hover:text-[#F5F7FA] hover:bg-white/[0.06] border border-white/[0.06]"
              }`}
            >
              {cat}
              <span className="ml-2 text-[10px] text-gray-500">
                {cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Architectural Disclaimer Notice */}
        <div className="mt-16 rounded-xl border border-white/[0.08] bg-[#141B2B]/60 p-6 text-xs text-[#9CA8BA] leading-relaxed font-mono">
          <p className="text-[#F5F7FA] font-bold mb-1">
            Engineering Provenance & Attribution Integrity:
          </p>
          <p>
            All projects listed are documented strictly according to verifiable engineering facts. VeriCred is a self-directed engineering build; Stellar contributions reflect assigned issues during Drips Stellar Wave 10; Byzantine Nexus NG represents a collaborative team initiative with Muhammad Mukhtar Balogun; and BlockDAG / DAGPulse metrics reflect verified hackathon and protocol leaderboard records.
          </p>
        </div>
      </div>
    </div>
  );
}
