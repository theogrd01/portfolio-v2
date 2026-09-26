// Contenu réel repris de l'ancien portfolio (vérifié 26/09/2026).
// Une seule source de vérité : chaque page importe ces données.

export const profile = {
  name: "Théo Garde",
  role: "Étudiant développeur — Epitech Strasbourg",
  promo: "Promotion 2028",
  location: "Strasbourg, France",
  email: "theo.garde@epitech.eu",
  github: "theogarde",
  linkedin: "theogarde",
  tagline:
    "Je conçois des applications web et j'explore les technologies liées à l'IA, la data et la cybersécurité.",
  traits: ["Curieux", "Persévérant", "Autonome"],
};

export const about = [
  "Étudiant développeur à Epitech Strasbourg, je conçois des applications web et j'explore les technologies liées à l'IA, la data et la cybersécurité.",
  "Ma manière d'apprendre se fait par la pratique. Je construis des projets concrets qui me permettent d'approfondir mes compétences et de résoudre des problèmes réels. Chaque projet est une opportunité d'apprendre de nouvelles technologies et d'affiner mon approche.",
  "Curieux par nature, je m'intéresse particulièrement aux intersections entre le développement logiciel, la cybersécurité et l'intelligence artificielle. Je suis convaincu que les meilleures solutions naissent de la combinaison de ces domaines.",
];

export const skillGroups = [
  {
    label: "Maîtrise",
    note: "utilisation quotidienne, projets livrés",
    items: ["JavaScript", "React / Next.js", "Git / GitHub"],
  },
  {
    label: "Avancé",
    note: "à l'aise sur des projets réels",
    items: ["Python", "C / C++", "Linux"],
  },
  {
    label: "En exploration",
    note: "apprentissage actif, veille continue",
    items: ["Node.js / Express", "SQL / MySQL", "Docker", "IA / LLM"],
  },
];

export const projects = [
  {
    slug: "devswipe",
    index: "01",
    title: "DevSwipe",
    description:
      "Plateforme de recherche d'emploi avec recommandations basées sur l'IA.",
    stack: ["React", "Next.js", "TypeScript", "IA / ML", "Node.js", "Express"],
    repo: "theogarde/devswipe",
    year: "2025",
  },
  {
    slug: "e-todo",
    index: "02",
    title: "E-TODO",
    description:
      "Application de gestion de tâches avec authentification et rôles.",
    stack: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
    repo: "theogarde/E-TODO",
    year: "2024",
  },
  {
    slug: "merry-chatbot",
    index: "03",
    title: "Merry Chatbot",
    description: "Chatbot Discord orienté tourisme utilisant un LLM.",
    stack: ["Discord API", "Node.js", "LLM", "Python"],
    repo: "theogarde/merry-chatbot",
    year: "2025",
  },
  {
    slug: "infosupport",
    index: "04",
    title: "InfoSupport",
    description: "Outil de diagnostic informatique développé en C++.",
    stack: ["C++", "CLI", "Algorithmes", "Structures de données"],
    repo: "theogarde/infosupport",
    year: "2024",
  },
];

export const timeline = [
  {
    index: "01",
    title: "Epitech Strasbourg",
    period: "2024 → 2028",
    type: "Formation",
    description:
      "Formation d'ingénieur en informatique, spécialisation développement web et cybersécurité.",
  },
  {
    index: "02",
    title: "Hôpitaux Civils de Colmar",
    period: "2025",
    type: "Stage",
    description:
      "Développement et maintenance d'outils informatiques en environnement hospitalier.",
  },
  {
    index: "03",
    title: "Projets personnels",
    period: "2024 → aujourd'hui",
    type: "Expérience",
    description:
      "Applications web, outils CLI et expérimentations IA — construits pour apprendre, livrés pour de vrai.",
  },
];

export const marqueeWords = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "C / C++",
  "IA / LLM",
  "SQL",
  "Docker",
  "Linux",
  "Git",
];
