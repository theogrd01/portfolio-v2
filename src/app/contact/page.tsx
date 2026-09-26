import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/data";

const ML = "mailto:" + ["theo.garde", "@epitech.eu"].join("");
const GH = "https://" + ["github.com", "/theogarde"].join("");
const LI = "https://" + ["www.linkedin.com", "/in/theogarde"].join("");

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Théo Garde — email, GitHub, LinkedIn. Ouvert aux stages et alternances à partir de 2026.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20">
      <div className="section-head">
        <span className="index">Contact</span>
        <h2>Écrivez, je réponds.</h2>
        <span className="hidden font-mono text-xs text-faint sm:block">§</span>
      </div>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <form
            action={ML}
            method="get"
            className="border border-ink/80"
          >
            <p className="border-b border-ink/80 bg-ink px-5 py-2 text-[0.66rem] uppercase tracking-[0.18em] text-paper">
              Formulaire — ouvre votre logiciel mail
            </p>
            <div className="grid gap-5 p-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                Sujet
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Stage, alternance, projet…"
                  className="border border-line bg-transparent px-3 py-2.5 text-sm tracking-normal text-ink placeholder:text-faint focus:border-accent focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                Votre email
                <input
                  type="email"
                  name="body"
                  placeholder="vous@exemple.fr"
                  className="border border-line bg-transparent px-3 py-2.5 text-sm tracking-normal text-ink placeholder:text-faint focus:border-accent focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted sm:col-span-2">
                Message
                <textarea
                  name="body"
                  rows={6}
                  required
                  placeholder="Le contexte, l'idée, la date de début…"
                  className="resize-y border border-line bg-transparent px-3 py-2.5 text-sm tracking-normal text-ink placeholder:text-faint focus:border-accent focus:outline-none"
                />
              </label>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-ink/80 p-5">
              <p className="text-xs text-faint">→ envoi direct vers {profile.email}</p>
              <button type="submit" className="btn btn-solid">
                Envoyer <span className="arrow">→</span>
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <aside className="w-full max-w-xs space-y-px self-start border border-ink/80 bg-ink/80">
            {[
              ["Email", profile.email, ML],
              ["GitHub", "@" + profile.github, GH],
              ["LinkedIn", "/in/" + profile.linkedin, LI],
              ["Localisation", profile.location, null],
            ].map(([label, value, href]) => {
              const inner = (
                <>
                  <span className="text-[0.66rem] uppercase tracking-[0.16em] text-muted">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm text-ink group-hover:text-accent">
                    {value}
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label as string}
                  href={href as string}
                  target={String(href).startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block bg-paper p-5"
                >
                  {inner}
                </a>
              ) : (
                <div key={label as string} className="bg-paper p-5">
                  {inner}
                </div>
              );
            })}
            <div className="bg-paper p-5">
              <span className="text-[0.66rem] uppercase tracking-[0.16em] text-muted">
                Disponibilité
              </span>
              <span className="mt-1 block text-sm text-ink">
                Stages &amp; alternances — 2026
              </span>
            </div>
          </aside>
        </Reveal>
      </div>
    </main>
  );
}
