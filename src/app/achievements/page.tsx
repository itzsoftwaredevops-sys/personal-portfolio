import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Verified Achievements",
  description:
    "Verifiable competition and engineering achievements of Abdulganiyyu Mustapha Muhammad: Stellar Drips Wave 10, DAGPulse Wave 3 Top 4, and BlockDAG IntentX Wave 1.",
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

        {/* Achievements List */}
        <div className="space-y-8">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="rounded-2xl border border-white/[0.08] bg-[#141B2B]/80 p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="cyan">{ach.category}</Badge>
                  <span className="text-xs font-mono text-[#9CA8BA]">
                    {ach.context}
                  </span>
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
                  <div>
                    <span className="text-gray-500 block uppercase tracking-wider text-[11px]">
                      Measured Metric
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-cyan-300 mt-0.5 block">
                      {ach.metric}
                    </span>
                    <span className="text-gray-400 text-[11px] mt-1 block">
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
              Every item presented on this page corresponds strictly to verified, documented event outcomes. No positions, scores, or achievements have been exaggerated, projected, or fabricated.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
