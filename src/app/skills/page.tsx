"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Layers,
  Code2,
  Database,
  Terminal,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { skillCategories, ProficiencyLevel } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export default function SkillsPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const getLevelBadge = (level: ProficiencyLevel) => {
    switch (level) {
      case "Experienced With":
        return <Badge variant="cyan">Experienced With</Badge>;
      case "Working Knowledge":
        return <Badge variant="blue">Working Knowledge</Badge>;
      case "Currently Exploring":
        return <Badge variant="amber">Currently Exploring</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Blockchain & Web3":
        return <Layers className="h-5 w-5 text-cyan-400" />;
      case "Frontend Engineering":
        return <Code2 className="h-5 w-5 text-blue-400" />;
      case "Backend & Systems":
        return <Database className="h-5 w-5 text-purple-400" />;
      case "Programming Languages":
        return <Terminal className="h-5 w-5 text-emerald-400" />;
      case "Tools & Engineering Practices":
        return <Cpu className="h-5 w-5 text-amber-400" />;
      default:
        return <Sparkles className="h-5 w-5 text-cyan-400" />;
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "Skills", url: `${siteConfig.domain.current}/skills` },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TECHNICAL CAPABILITIES"
          title="Skills & Technology Matrix"
          description="A disciplined, evidence-based inventory of programming languages, protocols, database systems, and development frameworks. No arbitrary percentage bars."
        />

        {/* Filter bar for proficiency levels */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Experienced With", "Working Knowledge", "Currently Exploring"].map(
              (lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-mono font-medium transition-all ${
                    selectedLevel === lvl
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm"
                      : "bg-white/[0.03] text-[#9CA8BA] hover:text-[#F5F7FA] hover:bg-white/[0.06] border border-white/[0.06]"
                  }`}
                >
                  {lvl}
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#9CA8BA]">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Honest, Evidence-Based Tiering</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((cat) => {
            const visibleSkills =
              selectedLevel === "All"
                ? cat.skills
                : cat.skills.filter((s) => s.level === selectedLevel);

            if (visibleSkills.length === 0) return null;

            return (
              <div
                key={cat.category}
                className="rounded-2xl border border-white/[0.08] bg-[#141B2B]/70 p-6 sm:p-8 backdrop-blur-sm"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08]">
                      {getCategoryIcon(cat.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-[#9CA8BA] mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#9CA8BA]/70">
                    {visibleSkills.length} competencies listed
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {visibleSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`rounded-xl border p-4 transition-all ${
                        skill.highlight
                          ? "border-cyan-500/30 bg-[#0E1422]/90 shadow-sm"
                          : "border-white/[0.06] bg-[#101522]/80 hover:border-white/[0.12]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-[#F5F7FA]">
                          {skill.name}
                        </span>
                        {getLevelBadge(skill.level)}
                      </div>

                      {skill.notes ? (
                        <p className="text-xs font-mono text-[#9CA8BA] leading-relaxed">
                          {skill.notes}
                        </p>
                      ) : (
                        <p className="text-xs font-mono text-gray-500">
                          Applied across engineering projects & contributions.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Callout */}
        <div className="mt-16 rounded-xl border border-white/[0.08] bg-[#0E1422] p-8 space-y-4">
          <h4 className="text-base font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span>Why No Arbitrary Percentage Bars?</span>
          </h4>
          <p className="text-sm text-[#9CA8BA] leading-relaxed max-w-3xl">
            Software engineering is multi-dimensional. Claiming &quot;90% in Solidity&quot; or &quot;85% in TypeScript&quot; is arbitrary and provides no meaningful signal to senior engineering leaders. Instead, this matrix categorizes tools into verifiable tiers: technologies actively deployed in production (Experienced With), technologies thoroughly practiced in labs and projects (Working Knowledge), and emerging technologies under active research (Currently Exploring).
          </p>
          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>See these technologies applied in real projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
