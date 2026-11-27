import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Send, MessageSquare } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { CopyrightYear } from "@/components/ui/CopyrightYear";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0A0E18] text-[#9CA8BA]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-amber-400/30 bg-[#080B12]">
                <Image
                  src="/images/brand/software-devops-logo.jpg"
                  alt="Itz Software DevOps Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="font-mono text-sm font-bold tracking-tight text-[#F5F7FA]">
                {siteConfig.name}
              </span>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">
              {siteConfig.headline}
            </p>
            <p className="text-sm leading-relaxed text-[#9CA8BA] max-w-md">
              Engineering scalable full-stack applications, decentralized verification architectures, and smart contract protocols with cryptographic integrity.
            </p>
            {/* Status indicator */}
            <div className="flex items-center gap-2 pt-1 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{siteConfig.status.label}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F5F7FA]">
              Platform Navigation
            </h3>
            <ul className="space-y-2 text-sm font-mono">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-cyan-400 transition-colors">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F5F7FA]">
              Verified Channels
            </h3>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Github className="h-4 w-4 text-blue-400" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <span className="text-xs font-bold text-cyan-400">𝕏</span>
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Send className="h-4 w-4 text-cyan-400" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Business</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span>Direct Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left text-[#9CA8BA]/80">
            <span>© <CopyrightYear /> {siteConfig.name} ({siteConfig.brand}).</span>
            <span className="hidden sm:inline">•</span>
            <span>All engineering rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
