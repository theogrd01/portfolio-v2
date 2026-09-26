import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Mono } from "next/font/google";
import { NavLinks } from "@/components/NavLinks";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

const SITE = "https://" + ["theo-garde", ".fr"].join("");

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Théo Garde — Développeur web",
    template: "%s — Théo Garde",
  },
  description:
    "Portfolio de Théo Garde, étudiant développeur à Epitech Strasbourg. Applications web, IA, data et cybersécurité.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Théo Garde",
    title: "Théo Garde — Développeur web",
    description:
      "Étudiant développeur à Epitech Strasbourg. Applications web, IA, data, cybersécurité.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ecebe4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${spaceMono.variable}`}>
      <body>
        <div className="grain" aria-hidden="true" />
        <NavLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
