import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ThreeHero } from "@/components/three/ThreeHero";
import { about, marqueeWords, profile, projects } from "@/lib/data";

const GH_BASE = "https://" + ["github.com", "/"].join("");
const ML = "mailto:" + ["theo.garde", "@epitech.eu"].join("");

function Marquee() {
  const row = marqueeWords.concat(marqueeWords);
  return (
    <div className="border-y border-ink/80 py-4">
      <div className="marquee">
        <div className="marquee-track">
          {row.map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="mx-6 inline-flex items-center gap-6 text-sm uppercase tracking-[0.18em] text-muted"
            >
              {w}
              <span className="text-accent">✳</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ————— HERO ————— */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-10 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:pt-16">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Portfolio — {profile.promo}</p>
            <h1 className="mt-5 font-display text-[clamp(3.2rem,8vw,5.6rem)] font-medium leading-[0.92] tracking-tight">
              Théo&nbsp;Garde
              <br />
              <span className="text-muted">
                conçoit<span className="text-accent">.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projets" className="btn btn-solid">
                Voir les projets <span className="arrow">→</span>
              </Link>
              <Link href="/contact" className="btn">
                Me contacter <span className="arrow">→</span>
              </Link>
            </div>
            <p className="mt-10 text-xs text-faint">
              basé à Strasbourg — ouvert aux stages &amp; alternances
            </p>
          </div>

          <div className="relative -mr-5 lg:-mr-16">
            <ThreeHero />
          </div>
        </div>

      </section>

      {/* ————— MARQUEE ————— */}
      <Marquee />

      {/* ————— 01 · À PROPOS (teaser) ————— */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="section-head">
          <span className="index">01 — À propos</span>
          <h2>Le dev, à la main.</h2>
          <span className="hidden font-mono text-xs text-faint sm:block">§</span>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-5 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
            {about.slice(0, 2).map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <Link
                href="/apropos"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-accent hover:text-accent-deep"
              >
                Lire la suite <span>→</span>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-px border border-ink/80 bg-ink/80">
              {[
                ["École", "Epitech"],
                ["Ville", "Strasbourg"],
                ["Promo", "2028"],
                ["Stage", "Colmar ’25"],
              ].map(([k, v]) => (
                <div key={k} className="bg-paper p-5">
                  <dt className="text-[0.66rem] uppercase tracking-[0.16em] text-muted">
                    {k}
                  </dt>
                  <dd className="mt-2 font-display text-xl">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ————— 02 · PROJETS SÉLECTIONNÉS ————— */}
      <section className="border-t border-ink/80 bg-[#e2e0d5]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="section-head">
            <span className="index">02 — Projets</span>
            <h2>Choisis, pas remplis.</h2>
            <Link
              href="/projets"
              className="hidden shrink-0 text-xs uppercase tracking-[0.14em] text-accent hover:text-accent-deep sm:block"
            >
              Tous les projets →
            </Link>
          </div>

          <div className="offset-grid mt-12 grid gap-px border border-ink/80 bg-ink/80 sm:grid-cols-2">
            {projects.map((p) => (
              <article key={p.slug} className="group bg-[#e2e0d5] p-6 sm:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-faint">{p.index}</span>
                  <span className="font-mono text-xs text-faint">{p.year}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={GH_BASE + p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-accent"
                >
                  Code source <span className="arrow">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 03 · CONTACT ————— */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">03 — Contact</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95]">
              Un stage, une idée,
              <br />
              une envie de construire<span className="text-accent"> ?</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/contact" className="btn btn-solid self-start">
              Écrire à Théo <span className="arrow">→</span>
            </Link>
            <a href={ML} className="font-mono text-xs text-muted hover:text-accent">
              {profile.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
