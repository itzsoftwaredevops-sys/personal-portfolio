"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex items-center gap-1.5 rounded bg-white/[0.05] px-2.5 py-1 text-xs text-gray-300 hover:text-white hover:bg-white/[0.1] transition-all border border-white/[0.08]"
      aria-label="Scroll back to top"
    >
      <span>Back to Top</span>
      <ArrowUp className="h-3 w-3" />
    </button>
  );
}
