"use client";

import React, { useState } from "react";
import { Send, Copy, Check, Info } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] Message from ${name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via ${siteConfig.name} Portfolio Contact System`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleCopy = () => {
    const formatted = `To: ${siteConfig.email}\nSubject: ${subject || "Project Inquiry"}\nFrom: ${name} (${email})\n\n${message}`;
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#141B2B]/90 p-6 sm:p-8 backdrop-blur-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#F5F7FA] font-[family-name:var(--font-space-grotesk)]">
          Direct Engineering Inquiry
        </h3>
        <p className="mt-1 text-sm text-[#9CA8BA]">
          Draft a message below. Because this portfolio operates with static client-side deployment, submitting directly launches your default email client with your message pre-formatted.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-gray-300 mb-1.5">
              Your Name / Organization <span className="text-cyan-400">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Vance (Protocol Team)"
              className="w-full rounded-lg border border-white/[0.1] bg-[#0E1422] px-3.5 py-2.5 text-sm text-[#F5F7FA] placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors font-sans"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono text-gray-300 mb-1.5">
              Your Email Address <span className="text-cyan-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@example.com"
              className="w-full rounded-lg border border-white/[0.1] bg-[#0E1422] px-3.5 py-2.5 text-sm text-[#F5F7FA] placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors font-sans"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-mono text-gray-300 mb-1.5">
            Subject / Area of Discussion <span className="text-cyan-400">*</span>
          </label>
          <input
            id="subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. Smart Contract Architecture / Full-Stack Role"
            className="w-full rounded-lg border border-white/[0.1] bg-[#0E1422] px-3.5 py-2.5 text-sm text-[#F5F7FA] placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors font-sans"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-mono text-gray-300 mb-1.5">
            Message <span className="text-cyan-400">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your project, role, technical challenge, or collaboration proposal..."
            className="w-full rounded-lg border border-white/[0.1] bg-[#0E1422] px-3.5 py-2.5 text-sm text-[#F5F7FA] placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors font-sans resize-y"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-mono font-semibold text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-cyan-400 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <Send className="h-4 w-4" />
            <span>Launch Email Client</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            disabled={!message}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 py-2.5 text-sm font-mono text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-cyan-400" />
                <span>Copy Message Text</span>
              </>
            )}
          </button>
        </div>

        {/* Transparent notice */}
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-500/[0.05] p-3 text-xs text-blue-300/80 border border-blue-500/15">
          <Info className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
          <span>
            <strong>Architectural Transparency:</strong> This form directly populates your native email client or copies formatted text to your clipboard. No personal data is stored in a third-party form collection service.
          </span>
        </div>
      </form>
    </div>
  );
}
