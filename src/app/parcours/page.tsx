import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "Le parcours de Théo Garde : Epitech Strasbourg (2024–2028), stage aux Hôpitaux Civils de Colmar en 2025, projets personnels.",
};

export default function ParcoursPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20">
      <div className="section-head">
        <span className="index">Parcours</span>
        <h2>Trois repères, pas de remplissage.</h2>
        <span className="hidden font-mono text-xs text-faint sm:block">§</span>
      </div>

      <div className="mt-14 flex flex-col">
        {timeline.map((t, i) => (
          <Reveal key={t.index} delay={i * 80}>
            <article className="grid gap-4 border-t border-ink/80 py-10 md:grid-cols-[auto_14rem_1fr] md:gap-10">
              <span className="font-mono text-sm text-faint">{t.index}</span>

              <div>
                <p className="font-display text-2xl leading-tight">{t.period}</p>
                <p className="mt-2">
                  <span className="tag">{t.type}</span>
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold uppercase tracking-[0.08em]">
                  {t.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                  {t.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
        <div className="border-t border-ink/80" />
      </div>

      <Reveal delay={240}>
        <p className="mt-12 font-mono text-xs text-faint">
          → la suite s&rsquo;écrit en alternance ou en stage, dès 2026.
        </p>
      </Reveal>
    </main>
  );
}
