import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Data privacy and security practices for the official portfolio of Abdulganiyyu Mustapha Muhammad (Itz Software DevOps).",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "Privacy Policy", url: `${siteConfig.domain.current}/privacy` },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#9CA8BA] hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <SectionHeading
          eyebrow="LEGAL & TRANSPARENCY"
          title="Privacy Policy"
          description={`Last updated: November 2026. Data handling practices for the personal developer portfolio of ${siteConfig.name} (${siteConfig.brand}).`}
        />

        <div className="rounded-2xl border border-white/[0.08] bg-[#141B2B]/70 p-8 sm:p-10 space-y-8 text-[#9CA8BA] leading-relaxed text-sm sm:text-base font-sans">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span>1. Zero Covert Tracking</span>
            </h3>
            <p>
              This website is an engineering showcase designed for privacy. We do not use third-party marketing cookies, user profiling beacons, canvas fingerprinters, or persistent tracking scripts.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
              2. Communication & Contact Submissions
            </h3>
            <p>
              When using the contact form, your inquiry is not submitted to or retained by a third-party form-scraping server. The form compiles a pre-formatted template that launches your system&apos;s default email client via <code className="font-mono text-cyan-300">mailto:</code> or copies the message text to your clipboard. Personal details you send via direct email are handled strictly for professional communication.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
              3. Hosting & Infrastructure Logs
            </h3>
            <p>
              This application is hosted on high-performance cloud infrastructure (such as Vercel). Standard web server access logs (including IP addresses, browser user-agent headers, and requested URLs) are generated automatically for security monitoring, DDoS prevention, and performance telemetry as part of regular cloud network operations.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
              4. External Links & Services
            </h3>
            <p>
              This portfolio links directly to external platforms including GitHub, X (Twitter), Telegram, WhatsApp, and deployed application endpoints (such as VeriCred). Visiting those third-party services is subject to their respective privacy terms.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
              5. Contact Regarding Privacy
            </h3>
            <p>
              If you have any questions regarding this policy or the technical operation of this website, contact <strong className="text-white">{siteConfig.email}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
