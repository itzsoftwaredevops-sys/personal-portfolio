"use client";

import React, { useState, useEffect } from "react";

export function CopyrightYear() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    const y = new Date().getFullYear().toString();
    const timer = setTimeout(() => {
      setYear(y);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return <span>{year}</span>;
}
