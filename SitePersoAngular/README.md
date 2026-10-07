# SitePersoAngular

CV en page web, sous forme d'application Angular.

```bash
npm install
npm start                   # serveur de développement : http://localhost:4200
npm test -- --watch=false   # tests unitaires (Vitest)
npm run build               # site produit dans dist/SitePersoAngular/browser
```

Le site est construit et publié sur GitHub Pages à chaque push sur `main`
(voir [../.github/workflows/pages.yml](../.github/workflows/pages.yml)).

| Emplacement | Rôle |
|---|---|
| `src/app/cv/cv.data.ts` | Texte du CV — seule source du contenu |
| `src/app/cv/` | Page CV et ses composants |
| `src/app/theme/` | Mode clair / sombre |
| `src/styles.scss` | Thème, styles globaux et impression |
| `public/` | Fichiers statiques (photo, favicon) |
| `legacys/` | Ancien site statique (Python + Jinja2), conservé comme référence |
