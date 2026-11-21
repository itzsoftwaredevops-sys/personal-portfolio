import React from "react";
import type { Metadata } from "next";
import {
  Mail,
  Send,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Direct contact channels for Abdulganiyyu Mustapha Muhammad (Itz Software DevOps): Email, WhatsApp, Telegram, GitHub, and X.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.domain.current },
          { name: "Contact", url: `${siteConfig.domain.current}/contact` },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMMUNICATION & INQUIRIES"
          title="Let's Connect & Collaborate"
          description="Available for software engineering roles, smart contract development, cryptographic verification projects, and open-source contributions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#141B2B]/75 p-6 space-y-5">
              <h3 className="text-lg font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
                Direct Contact Points
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#0E1422] border border-white/[0.06] hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">
                      Primary Email
                    </span>
                    <span className="text-sm font-semibold text-[#F5F7FA] group-hover:text-cyan-400 transition-colors">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.socials.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#0E1422] border border-white/[0.06] hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">
                      WhatsApp Business
                    </span>
                    <span className="text-sm font-semibold text-[#F5F7FA] group-hover:text-emerald-400 transition-colors">
                      {siteConfig.socials.whatsapp}
                    </span>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#0E1422] border border-white/[0.06] hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">
                      Telegram
                    </span>
                    <span className="text-sm font-semibold text-[#F5F7FA] group-hover:text-cyan-400 transition-colors">
                      @itzsoftwaredevops1005
                    </span>
                  </div>
                </a>

                {/* Twitter / X */}
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#0E1422] border border-white/[0.06] hover:border-blue-500/30 transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                    <span className="font-bold text-sm">𝕏</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">
                      Twitter / X
                    </span>
                    <span className="text-sm font-semibold text-[#F5F7FA] group-hover:text-cyan-400 transition-colors">
                      @AbdulganiyyuMM
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#0E1422] border border-white/[0.06] hover:border-purple-500/30 transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-105 transition-transform">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">
                      GitHub Profile
                    </span>
                    <span className="text-sm font-semibold text-[#F5F7FA] group-hover:text-purple-400 transition-colors">
                      itzsoftwaredevops-sys
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0E1422] p-5 space-y-2 font-mono text-xs text-[#9CA8BA]">
              <div className="flex items-center gap-2 text-[#F5F7FA] font-bold">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Operating Location: Nigeria (UTC+1 / WAT)</span>
              </div>
              <p className="leading-relaxed">
                Open to remote software engineering roles, international contract work, technical grants, and decentralized protocol development across time zones.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
