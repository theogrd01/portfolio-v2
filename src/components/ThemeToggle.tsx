"use client";

import { useEffect, useState } from "react";

const KEY = "pf-theme";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(KEY, next ? "dark" : "light");
    } catch {
      // stockage indisponible : la bascule reste valable pour la session
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next ? "#14151a" : "#ecebe4");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={mounted ? dark : undefined}
      aria-label="Basculer entre thème nuit et jour"
      title="Basculer nuit / jour"
      className="shrink-0 border border-line px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:border-accent hover:text-accent"
    >
      {mounted ? (dark ? "☀ Jour" : "☾ Nuit") : "◐"}
    </button>
  );
}
