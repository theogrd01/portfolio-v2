"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Curseur personnalisé (desktop uniquement, pointer fine).
 * Point d'encre + anneau à traîne ; sur élément interactif l'anneau
 * devient un carré accent (repère de coupe). Désactivé si
 * prefers-reduced-motion ou écran tactile — le curseur natif reste.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const s = useRef({ x: -100, y: -100, rx: -100, ry: -100, hover: false, visible: false });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-on");

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      s.current.x = e.clientX;
      s.current.y = e.clientY;
      if (!s.current.visible) {
        s.current.visible = true;
        s.current.rx = s.current.x;
        s.current.ry = s.current.y;
        setVisible(true);
      }
      const t = e.target as Element | null;
      const isInteractive = Boolean(
        t?.closest?.("a, button, [role='button'], input, textarea, select, label, summary")
      );
      if (isInteractive !== s.current.hover) {
        s.current.hover = isInteractive;
        setHover(isInteractive);
      }
    };
    const onLeave = () => {
      s.current.visible = false;
      setVisible(false);
    };
    const onDown = () => dotRef.current?.classList.add("cursor-pressed");
    const onUp = () => dotRef.current?.classList.remove("cursor-pressed");

    const tick = () => {
      s.current.rx += (s.current.x - s.current.rx) * 0.16;
      s.current.ry += (s.current.y - s.current.ry) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${s.current.x}px, ${s.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${s.current.rx}px, ${s.current.ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("custom-cursor-on");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`cursor-ring ${hover ? "cursor-ring-active" : ""} ${visible ? "" : "cursor-hidden"}`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`cursor-dot ${hover ? "cursor-dot-active" : ""} ${visible ? "" : "cursor-hidden"}`}
      />
    </>
  );
}
