# CV_AI — CV en page web, en Angular et en React

CV d'Ethan Nickels sous forme de site web, développé deux fois : une version **Angular** et une version **React**, au rendu identique. Le contenu, les styles et la logique commune ne sont écrits qu'une seule fois, dans `shared/`.

**Site en ligne :** https://etrix2407.github.io/CV_AI/

| Adresse | Contenu |
|---|---|
| [`/CV_AI/`](https://etrix2407.github.io/CV_AI/) | Page de choix entre les deux versions |
| [`/CV_AI/angular/`](https://etrix2407.github.io/CV_AI/angular/) | CV, version Angular |
| [`/CV_AI/react/`](https://etrix2407.github.io/CV_AI/react/) | CV, version React |

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Structure du dépôt](#structure-du-dépôt)
- [Architecture : ce qui est partagé](#architecture--ce-qui-est-partagé)
- [Démarrage rapide](#démarrage-rapide)
- [Modifier le CV](#modifier-le-cv)
- [Tests et qualité](#tests-et-qualité)
- [Déploiement](#déploiement)
- [Contribuer](#contribuer)
- [Historique du projet](#historique-du-projet)

---

## Fonctionnalités

- **Thème « terminal / IDE »** : l'en-tête est présenté comme une fenêtre d'éditeur et le menu comme des appels de fonction (`profil()`, `formation()`…).
- **Mode clair / sombre** : par défaut, le site suit le réglage du système. Un bouton permet de choisir l'un ou l'autre, et ce choix est mémorisé. Il est appliqué avant l'affichage, pour éviter un flash de la mauvaise couleur.
- **Responsive** : mise en page adaptée au PC, à la tablette et au téléphone. Sur téléphone, le menu devient une ligne qu'on fait défiler au doigt.
- **Impression / PDF** : mise en page A4 dédiée, toujours en clair, sans menu ni animation.
- **Accessibilité** : aucune violation AXE et minimums WCAG 2.2 AA respectés (contrastes, focus visible, ARIA, `prefers-reduced-motion`).
- **Menu collant** : il donne accès directement à chaque section.
- **Favicons** : chaque version affiche le logo de son framework ; la page de choix a son propre favicon `>_`.

## Technologies

| | Version Angular | Version React |
|---|---|---|
| Framework | Angular 22 (composants standalone, signals) | React 19 (composants fonctionnels, hooks) |
| Outil de build | Angular CLI (`@angular/build`, esbuild) | Vite 8 |
| Langage | TypeScript 6, mode strict | TypeScript 6, mode strict |
| Tests | Vitest + jsdom (`ng test`) | Vitest + jsdom + Testing Library |
| Qualité | Prettier | oxlint |

Aucune bibliothèque d'interface ni framework CSS : le style tient dans une seule feuille CSS, partagée.
Publication : **GitHub Pages**, via **GitHub Actions** (Node.js 24).

## Structure du dépôt

```
CV_AI/
├── .github/workflows/pages.yml   # tests, build des deux versions et publication sur GitHub Pages
├── shared/                       # code commun aux deux versions (indépendant du framework)
│   ├── cv.data.ts                #   contenu du CV : seule source du texte
│   ├── cv.model.ts               #   types du contenu
│   ├── photo.jpg                 #   photo du CV
│   ├── cv.css                    #   feuille de style unique (thème, mise en page, responsive, impression)
│   ├── icons.ts                  #   tracés des icônes SVG
│   ├── theme.ts                  #   logique du mode clair / sombre
│   ├── format.ts                 #   règles d'affichage (nom d'onglet, numéros de section, liens externes)
│   ├── accueil.html              #   page de choix publiée à la racine du site
│   └── favicon.svg / .ico        #   favicon de la page de choix
├── SitePersoAngular/             # version Angular
│   ├── src/app/cv/               #   page CV et ses composants (en-tête, menu, sections)
│   ├── src/app/theme/            #   service de thème + bouton
│   ├── src/app/shared/           #   composants réutilisables (icône, texte enrichi)
│   ├── legacys/                  #   ancien site statique (Python + Jinja2), conservé comme référence
│   └── CLAUDE.md, README.md
└── SitePersoReact/               # version React
    ├── src/App.tsx               #   page CV
    ├── src/components/           #   en-tête, menu, sections, icône, texte enrichi
    ├── src/theme/                #   hook useTheme + bouton
    └── CLAUDE.md, README.md
```

Chaque projet a son propre README, avec le détail de ses fichiers : [SitePersoAngular/README.md](SitePersoAngular/README.md) et [SitePersoReact/README.md](SitePersoReact/README.md).

## Architecture : ce qui est partagé

L'objectif est d'éviter les doublons : **tout ce qui ne dépend pas du framework est écrit une seule fois dans `shared/`**. Seuls les composants (templates Angular d'un côté, JSX de l'autre) existent dans chaque projet.

```
                        shared/
   contenu · photo · cv.css · icônes · thème · règles d'affichage
                  │                          │
        ┌─────────┘                          └─────────┐
        ▼                                              ▼
  SitePersoAngular                               SitePersoReact
  composants Angular                             composants React
  ThemeService (signals)                         useTheme (hook)
        │                                              │
        ▼                                              ▼
  /CV_AI/angular/                                /CV_AI/react/
```

- **Contenu** : `cv.data.ts` est importé par les deux projets. La photo est importée par ce même fichier : c'est le bundler qui la publie (option `loader` dans `angular.json`, import natif avec Vite).
- **Styles** : les deux versions utilisent les mêmes classes CSS et chargent `shared/cv.css`. Aucun composant n'a de style propre.
- **Thème** : `shared/theme.ts` regroupe la clé de stockage, la validation et la détection du thème système. Le service Angular et le hook React n'en sont que des adaptateurs.
- **Garantie de parité** : le texte affiché par les deux versions est identique, et le rendu aussi, à l'anticrénelage près. C'est vérifié par comparaison de captures d'écran.

## Démarrage rapide

**Prérequis :** [Node.js](https://nodejs.org/) 24 (ou une version récente compatible) et npm.

```bash
git clone https://github.com/Etrix2407/CV_AI.git
cd CV_AI
```

**Version Angular**

```bash
cd SitePersoAngular
npm install
npm start                   # http://localhost:4200
```

**Version React**

```bash
cd SitePersoReact
npm install
npm run dev                 # http://localhost:5173
```

Les deux serveurs de développement rechargent la page à chaque modification, y compris dans `shared/`.

## Modifier le CV

Tout le texte du CV se trouve dans **[shared/cv.data.ts](shared/cv.data.ts)**. Une modification de ce fichier apparaît dans les deux versions.

| Pour… | Modifier… |
|---|---|
| le nom, le titre ou les contacts | `name`, `title`, `contacts` |
| un projet, une formation, une expérience | `projects`, `education`, `experiences` |
| les compétences ou les centres d'intérêt | `skills`, `interests` |
| l'ordre ou le titre des sections | `sections` |
| mettre un passage en gras | un morceau `{ text: '…', strong: true }` dans les textes enrichis (projets, profil) |
| la photo | remplacer `shared/photo.jpg` (de préférence carrée) |
| les couleurs ou la mise en page | `shared/cv.css` (variables CSS en tête de fichier) |

Les types de `shared/cv.model.ts` sont vérifiés par TypeScript : une donnée mal formée fait échouer le build au lieu de passer inaperçue.

## Tests et qualité

| Commande | Angular (`SitePersoAngular/`) | React (`SitePersoReact/`) |
|---|---|---|
| Tests unitaires | `npm test -- --watch=false` | `npm test -- --run` |
| Build de production | `npm run build` → `dist/SitePersoAngular/browser` | `npm run build` → `dist/` |
| Lint | — | `npm run lint` |

Les tests couvrent le rendu du CV (en-tête, contacts, sections numérotées, menu, texte en gras, titre de la page) et le mode clair / sombre (thème système, restauration et mémorisation du choix). Côté Angular, ils couvrent aussi le chargement de la page par le routeur.

Après toute modification, relancer le build et les tests **des deux versions** si `shared/` a changé.

## Déploiement

Le site est publié automatiquement sur GitHub Pages par le workflow [.github/workflows/pages.yml](.github/workflows/pages.yml), à chaque push sur `main` (ou à la main, depuis l'onglet *Actions*).

1. Installation, tests et build de la version Angular, avec la base `/CV_AI/angular/`.
2. Installation, tests et build de la version React, avec la base `/CV_AI/react/`.
3. Assemblage du site : page de choix et `cv.css` à la racine, chaque version dans son dossier.
4. Publication sur GitHub Pages. Si un test échoue, rien n'est publié.

Dans les réglages du dépôt, la source de GitHub Pages doit rester **GitHub Actions** (*Settings → Pages → Build and deployment*). Il n'y a pas d'autre chemin de déploiement : pas de `ng deploy`, et la branche `gh-pages` n'est plus utilisée.

## Contribuer

- `main` est protégée : toute modification passe par une branche et une pull request.
- Messages de commit courts, à l'impératif, en français (par exemple « Ajoute la section compétences »), un changement cohérent par commit.
- Ne jamais écrire de texte du CV en dur dans un composant : tout vient de `shared/cv.data.ts`.
- Pas de doublon : un style, une donnée ou une règle sans lien avec un framework va dans `shared/`.
- Pas de nouvelle bibliothèque sans raison claire.

Les règles complètes, également suivies par l'assistant de code Claude Code, sont dans [SitePersoAngular/CLAUDE.md](SitePersoAngular/CLAUDE.md) et [SitePersoReact/CLAUDE.md](SitePersoReact/CLAUDE.md).

## Historique du projet

1. **Site statique** : CV écrit en Markdown, transformé en HTML par un script Python (Jinja2, markdown-it).
2. **Migration vers Angular** : même rendu et même contenu, avec des tests et un audit d'accessibilité. L'ancien site est conservé tel quel dans [SitePersoAngular/legacys/](SitePersoAngular/legacys/).
3. **Version React** : ajoutée à côté de la version Angular, avec un code commun factorisé dans `shared/` et une page de choix à la racine du site.
