import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Trophy, ArrowRight, ShieldCheck, Award, Coins } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { achievements, stellarWaveSummary } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Verified Achievements",
  description:
    "Verifiable competition and engineering achievements of Abdulganiyyu Mustapha Muhammad: Stellar Drips Waves 9–11 (21,800 pts), DAGPulse Wave 3 Top 4, and BlockDAG IntentX Wave 1.",
};

export default function AchievementsPage() {
  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "Achievements", url: `${siteConfig.domain.current}/achievements` },
        ]}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VERIFIABLE MILESTONES"
          title="Engineering Achievements & Honors"
          description="A documented record of competition rankings, hackathon placements, and high-velocity open-source milestones. Zero fabricated claims or unverified awards."
        />

        {/* Stellar Drips All-Time Summary Banner */}
        <div className="mb-10 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#141B2B] via-[#101829] to-[#0D1321] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 shadow-md">
                <Image
                  src={stellarWaveSummary.logo}
                  alt="Stellar Drips Wave Program Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block">
                  Cumulative Open-Source Record
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                  {stellarWaveSummary.program}
                </h2>
              </div>
            </div>
            <Badge variant="emerald" size="md">
              100% Issue Resolution Rate
            </Badge>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
            <div className="rounded-xl bg-[#0A0E18]/80 border border-white/[0.06] p-4">
              <span className="text-[11px] uppercase tracking-wider text-[#9CA8BA] block">
                All-Time Points Earned
              </span>
              <span className="mt-1 text-2xl font-extrabold text-amber-400 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-400" />
                {stellarWaveSummary.allTimePoints}
              </span>
            </div>
            <div className="rounded-xl bg-[#0A0E18]/80 border border-white/[0.06] p-4">
              <span className="text-[11px] uppercase tracking-wider text-[#9CA8BA] block">
                Total Issues Resolved
              </span>
              <span className="mt-1 text-2xl font-extrabold text-cyan-300 block">
                {stellarWaveSummary.totalIssuesResolved}
              </span>
            </div>
            <div className="rounded-xl bg-[#0A0E18]/80 border border-white/[0.06] p-4">
              <span className="text-[11px] uppercase tracking-wider text-[#9CA8BA] block">
                Active Sprints
              </span>
              <span className="mt-1 text-lg sm:text-xl font-bold text-[#F5F7FA] block">
                {stellarWaveSummary.wavesCompleted}
              </span>
            </div>
          </div>
        </div>

        {/* Achievements List */}
        <div className="space-y-8">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="rounded-2xl border border-white/[0.08] bg-[#141B2B]/80 p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  {ach.logo && (
                    <div
                      className={`relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/[0.12] ${
                        ach.logoLightBg ? "bg-white p-1" : "bg-[#080B12]"
                      }`}
                    >
                      <Image
                        src={ach.logo}
                        alt={`${ach.context} logo`}
                        fill
                        sizes="36px"
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="cyan">{ach.category}</Badge>
                    <span className="text-xs font-mono text-[#9CA8BA]">
                      {ach.context}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono font-semibold text-emerald-400 border border-emerald-500/20">
                    <Trophy className="h-3.5 w-3.5" />
                    {ach.badge}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-8 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                    {ach.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#9CA8BA] leading-relaxed">
                    {ach.description}
                  </p>

                  <div className="pt-2 rounded-lg bg-[#0E1422] p-3 border border-white/[0.04]">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                      Verification Context:
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed font-mono">
                      {ach.verificationDetails}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-4 rounded-xl border border-white/[0.06] bg-[#101522] p-5 flex flex-col justify-between h-full space-y-4 font-mono text-xs">
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-500 block uppercase tracking-wider text-[11px]">
                        Measured Metric
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-cyan-300 mt-0.5 block">
                        {ach.metric}
                      </span>
                    </div>

                    {ach.pointsEarned && (
                      <div className="pt-2 border-t border-white/[0.05]">
                        <span className="text-gray-500 block uppercase tracking-wider text-[11px]">
                          Points Earned in Wave
                        </span>
                        <span className="text-base font-bold text-amber-400 mt-0.5 flex items-center gap-1.5">
                          <Award className="h-4 w-4 text-amber-400" />
                          {ach.pointsEarned}
                        </span>
                      </div>
                    )}

                    {ach.rewardGrant && (
                      <div className="pt-2 border-t border-white/[0.05]">
                        <span className="text-gray-500 block uppercase tracking-wider text-[11px]">
                          Wave Reward Grant
                        </span>
                        <span className="text-base font-bold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                          <Coins className="h-4 w-4 text-emerald-400" />
                          {ach.rewardGrant}
                        </span>
                      </div>
                    )}

                    <span className="text-gray-400 text-[11px] pt-1 block">
                      Timeline: {ach.dateOrWave}
                    </span>
                  </div>

                  {ach.relatedProjectSlug && (
                    <div className="pt-3 border-t border-white/[0.06]">
                      <Link
                        href={`/projects/${ach.relatedProjectSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      >
                        <span>View Project Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Standards Notice */}
        <div className="mt-16 rounded-xl border border-white/[0.08] bg-[#0E1422] p-6 text-xs font-mono text-[#9CA8BA] leading-relaxed flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-[#F5F7FA] font-bold block mb-1">
              Commitment to Truthful Engineering Records:
            </span>
            <span>
              Every item presented on this page corresponds strictly to verified, documented event outcomes. No positions, scores, points, or grants have been exaggerated, projected, or fabricated.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
