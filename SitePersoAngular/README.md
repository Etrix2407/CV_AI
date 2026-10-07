# SitePersoAngular

CV en page web, sous forme d'application Angular. Une version React identique existe dans
[../SitePersoReact/](../SitePersoReact/) ; le code commun aux deux versions (contenu, styles, icônes, thème) est dans [../shared/](../shared/).

```bash
npm install
npm start                   # serveur de développement : http://localhost:4200
npm test -- --watch=false   # tests unitaires (Vitest)
npm run build               # site produit dans dist/SitePersoAngular/browser
```

Les deux versions sont construites et publiées sur GitHub Pages à chaque push sur `main`
(Angular à `/CV_AI/`, React à `/CV_AI/react/` — voir [../.github/workflows/pages.yml](../.github/workflows/pages.yml)).

| Emplacement | Rôle |
|---|---|
| `../shared/cv.data.ts` | Texte du CV — seule source du contenu, partagée avec React |
| `../shared/photo.jpg` | Photo du CV, partagée avec React |
| `../shared/cv.css` | Feuille de style unique, partagée avec React |
| `src/app/cv/` | Page CV et ses composants |
| `src/app/theme/` | Mode clair / sombre |
| `src/styles.scss` | Charge la feuille de style partagée |
| `public/` | Fichiers statiques (favicon) |
| `legacys/` | Ancien site statique (Python + Jinja2), conservé comme référence |
