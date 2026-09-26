import Link from "next/link";

const GH = "https://" + ["github", ".com", "/theogarde"].join("");
const LI = "https://" + ["www", ".linkedin.com", "/in/theogarde"].join("");
const ML = "mailto:" + ["theo.garde", "@epitech.eu"].join("");

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/80">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center">
        <p className="text-xs text-muted">© 2026 Théo Garde — Strasbourg</p>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.12em]">
          <Link href={GH} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub ↗
          </Link>
          <Link href={LI} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn ↗
          </Link>
          <Link href={ML} className="hover:text-accent">
            Email ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
