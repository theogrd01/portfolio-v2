# Portfolio — Théo Garde (v2)

Portfolio moderne avec scène 3D low-poly (planète + anneaux) en hero.
Next.js 16 · React 19 · Tailwind CSS v4 · Three.js / @react-three/fiber.

## Pages

- `/` — hero 3D + marquee + à-propos + projets + contact
- `/apropos` — texte complet + fiche signalétique
- `/competences` — trois niveaux honnêtes (maîtrise / avancé / exploration)
- `/projets` — DevSwipe, E-TODO, Merry Chatbot, InfoSupport
- `/parcours` — Epitech (2024→2028), stage Hôpitaux Civils de Colmar (2025), projets perso
- `/contact` — formulaire mailto + coordonnées réelles

## Design

- Palette : papier `#ecebe4`, encre `#191a20`, accent terracotta `#d34e24`, or `#e8b53a`
- Typo : Fraunces (display, variable opsz) × Space Mono — auto-hébergées via next/font
- Grain fixe, bordures 1px encre, sections numérotées, grille décalée, marquee pausable
- `prefers-reduced-motion` respecté (3D désactivée, reveal off)

## Contenu

Repris et vérifié depuis l&rsquo;ancien portfolio (26/09/2026). Tout est centralisé
dans `src/lib/data.ts`.

## Lancer

```bash
npm install
npm run dev    # développement
npm run build && npm run start   # production
```
