import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Les technos de Théo Garde : JavaScript, React / Next.js, TypeScript, Python, C / C++, IA, Docker, Linux.",
};

const LEVELS = ["Maîtrise", "Avancé", "En exploration"] as const;

export default function CompetencesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20">
      <div className="section-head">
        <span className="index">Compétences</span>
        <h2>Honnête, pas gonflé.</h2>
        <span className="hidden font-mono text-xs text-faint sm:block">§</span>
      </div>

      <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-soft">
        Pas de barres de progression magiques. Trois niveaux, un aveu :
        l&rsquo;apprentissage ne s&rsquo;arrête jamais au bout d&rsquo;une liste.
      </p>

      <div className="offset-grid mt-14 grid gap-px border border-ink/80 bg-ink/80 md:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 100} className="h-full">
            <article className="flex h-full flex-col bg-paper p-7">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{g.label}</h3>
                <span className="font-mono text-xs text-faint">
                  {LEVELS.indexOf(g.label as (typeof LEVELS)[number]) + 1}/3
                </span>
              </div>
              <p className="mt-2 text-xs text-muted">{g.note}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-16 font-mono text-xs text-faint">
          → actuellement en creux : Three.js / WebGL, tests automatisés, CI/CD.
        </p>
      </Reveal>
    </main>
  );
}
