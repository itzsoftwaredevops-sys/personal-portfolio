import React from "react";
import type { Metadata } from "next";
import {
  GraduationCap,
  Briefcase,
  GitPullRequest,
  Users,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Experience & Timeline",
  description:
    "Chronological engineering and educational timeline for Abdulganiyyu Mustapha Muhammad: Federal University Dutse, CRAI LAB Industrial Training, Stellar open source, and Byzantine Nexus NG.",
};

export default function ExperiencePage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Education":
        return <GraduationCap className="h-5 w-5 text-cyan-400" />;
      case "Industrial Training":
        return <Briefcase className="h-5 w-5 text-emerald-400" />;
      case "Open Source":
        return <GitPullRequest className="h-5 w-5 text-blue-400" />;
      case "Team Initiative":
        return <Users className="h-5 w-5 text-purple-400" />;
      default:
        return <CheckCircle2 className="h-5 w-5 text-gray-400" />;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "Education":
        return "cyan";
      case "Industrial Training":
        return "emerald";
      case "Open Source":
        return "blue";
      case "Team Initiative":
        return "neutral";
      default:
        return "neutral";
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "Experience", url: `${siteConfig.domain.current}/experience` },
        ]}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CHRONOLOGICAL TRAJECTORY"
          title="Technical Experience & Education"
          description="A verifiable record of academic training, industrial internship, competitive open-source delivery, and collaborative blockchain initiatives."
        />

        {/* Experience Timeline */}
        <div className="relative border-l border-white/[0.1] pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/[0.15] bg-[#0E1422] shadow-sm group-hover:border-cyan-400 group-hover:scale-110 transition-all">
                {getIcon(exp.type)}
              </div>

              {/* Card Container */}
              <div className="rounded-xl border border-white/[0.08] bg-[#141B2B]/75 p-6 sm:p-8 backdrop-blur-sm transition-all duration-200 hover:border-cyan-500/30 hover:bg-[#182236]">
                {/* Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={getTypeBadgeVariant(exp.type)}>
                      {exp.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#9CA8BA]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-gray-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                  {exp.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-cyan-300 font-mono">
                  {exp.organization}
                </p>

                {/* Summary */}
                <p className="mt-4 text-sm sm:text-base text-[#9CA8BA] leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="mt-5 space-y-2.5">
                  {exp.bulletPoints.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA8BA]">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/[0.04] px-2.5 py-0.5 text-xs font-mono text-gray-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Provenance note */}
        <div className="mt-16 rounded-xl border border-white/[0.08] bg-[#0E1422] p-6 text-xs font-mono text-[#9CA8BA] leading-relaxed flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-[#F5F7FA] font-bold block mb-1">
              Ethical Disclosure & Experience Classification:
            </span>
            <span>
              All experiences are labeled with absolute precision. Academic enrollment is presented as undergraduate studies; CRAI LAB is documented as industrial training (SIWES); Stellar contributions are documented as assigned open-source challenge tasks; and Byzantine Nexus NG represents a collaborative research group.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
