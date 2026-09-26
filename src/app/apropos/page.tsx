import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { about, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Qui est Théo Garde — étudiant développeur à Epitech Strasbourg, sa manière d'apprendre et ce qui le motive.",
};

export default function AProposPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20">
      <div className="section-head">
        <span className="index">À propos</span>
        <h2>Le dev, à la main.</h2>
        <span className="hidden font-mono text-xs text-faint sm:block">§</span>
      </div>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className={i === 0 ? "text-base sm:text-lg" : undefined}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <p className="flex flex-wrap gap-x-3 gap-y-1 pt-4 text-xs uppercase tracking-[0.16em] text-muted">
              {profile.traits.map((t, i) => (
                <span key={t} className="inline-flex items-center gap-3">
                  {i > 0 && <span className="text-accent">·</span>}
                  {t}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <aside className="border border-ink/80">
            <p className="border-b border-ink/80 bg-ink px-5 py-2 text-[0.66rem] uppercase tracking-[0.18em] text-paper">
              Fiche signalétique
            </p>
            <dl className="divide-y divide-line/70">
              {[
                ["Nom", profile.name],
                ["Rôle", "Étudiant développeur"],
                ["École", "Epitech Strasbourg"],
                ["Promotion", "2028"],
                ["Basé à", "Strasbourg, FR"],
                ["Stage 2025", "Hôpitaux Civils de Colmar"],
                ["Ouvert aux", "Stages & alternances"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-5 py-3 text-sm">
                  <dt className="shrink-0 text-[0.7rem] uppercase tracking-[0.14em] text-muted pt-0.5">
                    {k}
                  </dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </main>
  );
}
