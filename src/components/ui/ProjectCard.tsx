import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, ShieldCheck } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export function ProjectCard({ project, featuredLayout = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-xl bg-[#141B2B]/80 p-6 sm:p-7 border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-[#182236] hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] ${
        featuredLayout ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        {/* Project Visual Cover Banner (when available) */}
        {project.image && (
          <Link
            href={`/projects/${project.slug}`}
            className="block relative h-48 sm:h-52 w-full overflow-hidden rounded-lg mb-5 border border-white/[0.08] bg-[#080B12]"
          >
            <Image
              src={project.image}
              alt={`${project.name} visual preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141B2B]/80 via-transparent to-transparent" />
          </Link>
        )}

        {/* Top Header: Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan">{project.category}</Badge>
            <span className="text-xs font-mono text-[#9CA8BA]/80 hidden sm:inline">
              {project.subCategory}
            </span>
          </div>
          <Badge
            variant={
              project.status === "Live & Deployed"
                ? "emerald"
                : project.status === "Open Source Contributions"
                ? "amber"
                : "blue"
            }
          >
            {project.status}
          </Badge>
        </div>

        {/* Project Title & Logo */}
        <div className="flex items-center gap-3">
          {project.logo && (
            <div
              className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/[0.12] ${
                project.logoLightBg ? "bg-white p-0.5" : "bg-[#080B12]"
              }`}
            >
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] group-hover:text-cyan-400 transition-colors duration-200">
              <Link href={`/projects/${project.slug}`} className="focus:outline-none focus:underline flex items-center gap-1.5">
                {project.name}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
              </Link>
            </h3>
            {project.tagline && (
              <p className="mt-0.5 text-xs sm:text-sm font-medium text-blue-400/90 font-mono">
                {project.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Summary */}
        <p className="mt-3.5 text-sm sm:text-base text-[#9CA8BA] leading-relaxed">
          {project.summary}
        </p>

        {/* Metrics or Highlights if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-lg bg-[#0E1422] border border-white/[0.05]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[11px] font-mono text-[#9CA8BA]">{metric.label}</span>
                <span className="text-xs sm:text-sm font-semibold text-[#F5F7FA] mt-0.5">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 7).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-300 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 7 && (
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.02] text-gray-500">
              +{project.technologies.length - 7} more
            </span>
          )}
        </div>

        {/* Disclaimer if applicable */}
        {project.disclaimer && (
          <div className="mt-4 flex items-start gap-2 p-2.5 rounded bg-amber-500/[0.05] border border-amber-500/20 text-xs text-amber-300/80">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{project.disclaimer}</span>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs sm:text-sm font-mono font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
        >
          View Case Study & Architecture →
        </Link>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-white px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] transition-colors border border-white/[0.08]"
              title="Open Live Website"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-white px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] transition-colors border border-white/[0.08]"
              title="View Repository"
            >
              <Github className="w-3.5 h-3.5 text-blue-400" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
