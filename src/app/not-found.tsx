import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-start px-5 py-32">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Erreur 404</p>
      <h1 className="mt-4 font-display text-6xl">Perdu dans l&rsquo;espace.</h1>
      <p className="mt-4 max-w-md text-sm text-ink-soft">
        Cette orbite est vide — la page demandée n&rsquo;existe pas (ou plus).
      </p>
      <Link href="/" className="btn mt-10">
        Revenir au portfolio <span className="arrow">→</span>
      </Link>
    </main>
  );
}
