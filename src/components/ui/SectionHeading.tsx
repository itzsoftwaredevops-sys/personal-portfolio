import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 mb-2.5 flex items-center gap-2">
          {align === "center" && <span className="h-px w-6 bg-cyan-500/40 inline-block" />}
          <span>{eyebrow}</span>
          <span className="h-px w-6 bg-cyan-500/40 inline-block" />
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-[#9CA8BA] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
