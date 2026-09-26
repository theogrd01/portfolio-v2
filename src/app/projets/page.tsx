import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/data";

const GH_BASE = "https://" + ["github.com", "/"].join("");

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Projets de Théo Garde : DevSwipe, E-TODO, Merry Chatbot, InfoSupport — web, IA et C++.",
};

export default function ProjetsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20">
      <div className="section-head">
        <span className="index">Projets</span>
        <h2>Choisis, pas remplis.</h2>
        <span className="hidden font-mono text-xs text-faint sm:block">§</span>
      </div>

      <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-soft">
        Quatre projets qui résument la manière de travailler : un problème
        réel, une pile technique assumée, un livrable. Pas de vitrine
        décorative.
      </p>

      <div className="mt-14 flex flex-col">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <article className="group grid gap-6 border-t border-ink/80 py-10 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-10">
              <span className="font-mono text-sm text-faint">{p.index}</span>

              <div>
                <h3 className="font-display text-3xl transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <span className="font-mono text-xs text-faint">{p.year}</span>
                <a
                  href={GH_BASE + p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Code <span className="arrow">↗</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
        <div className="border-t border-ink/80" />
      </div>
    </main>
  );
}
