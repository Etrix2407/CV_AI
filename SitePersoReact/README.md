# SitePersoReact

CV en page web, sous forme d'application React (Vite + TypeScript) : la version React de
[../SitePersoAngular/](../SitePersoAngular/), avec le même rendu. Le code commun aux deux versions (contenu, styles, icônes, thème) est dans [../shared/](../shared/).

```bash
npm install
npm run dev          # serveur de développement : http://localhost:5173
npm test -- --run    # tests unitaires (Vitest + Testing Library)
npm run build        # site produit dans dist/
```

Les deux versions sont construites et publiées sur GitHub Pages à chaque push sur `main`
(Angular à `/CV_AI/`, React à `/CV_AI/react/` — voir [../.github/workflows/pages.yml](../.github/workflows/pages.yml)).

| Emplacement | Rôle |
|---|---|
| `../shared/cv.data.ts` | Texte du CV — seule source du contenu, partagée avec Angular |
| `../shared/photo.jpg` | Photo du CV, partagée avec Angular |
| `../shared/cv.css` | Feuille de style unique, partagée avec Angular |
| `src/App.tsx` | Page CV |
| `src/components/` | Composants de la page |
| `src/theme/` | Mode clair / sombre |
