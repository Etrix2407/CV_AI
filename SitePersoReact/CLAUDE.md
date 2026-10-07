# CV — Projet (version React)

CV en page web, sous forme d'application React (Vite + TypeScript). C'est la version React de `../SitePersoAngular/` : même rendu, même contenu. Tout ce qui ne dépend pas du framework est partagé entre les deux dans `../shared/` : contenu, styles, icônes, thème, règles d'affichage. Seuls les composants sont propres à chaque version.

## Structure

À la racine du dépôt : `SitePersoAngular/`, `SitePersoReact/`, `shared/` (code commun aux deux versions) et `.github/` (GitHub n'y lit les workflows qu'à cet endroit).

```
../shared/cv.data.ts         # contenu du CV — seule source du texte
../shared/cv.model.ts        # types du contenu
../shared/photo.jpg          # photo du CV (importée par cv.data.ts)
../shared/cv.css             # feuille de style unique : thème, mise en page, responsive, impression A4
../shared/icons.ts           # tracés des icônes SVG
../shared/theme.ts           # logique du mode clair / sombre
../shared/format.ts          # règles d'affichage (nom d'onglet, numéro de section, liens externes…)
../shared/accueil.html       # page de choix publiée à la racine du site (/CV_AI/)
src/cv.ts                    # point d'accès au contenu et aux règles d'affichage partagés
src/App.tsx                  # page CV
src/components/              # en-tête, menu, carte de section, icône, texte enrichi, sections/
src/theme/                   # mode clair / sombre : hook useTheme (adaptateur de ../shared/theme.ts) + bouton
public/                      # fichiers statiques (favicon)
../.github/workflows/pages.yml  # tests + build des deux versions, publication GitHub Pages (page de choix à /CV_AI/, Angular à /CV_AI/angular/, React à /CV_AI/react/)
```

## Commandes

```bash
npm install
npm run dev          # serveur de développement
npm test -- --run    # tests unitaires (Vitest + Testing Library)
npm run lint         # oxlint
npm run build        # génère dist/
```

Après toute modification de `src/`, `public/` ou `../shared/`, relancer `npm run build`, `npm test -- --run` et `npm run lint` et vérifier qu'ils passent sans erreur ni avertissement.

## Règles de contenu

- Ne jamais écrire de texte du CV en dur dans les composants : tout le contenu vient de `../shared/cv.data.ts`.
- Toute modification de `../shared/` touche aussi SitePersoAngular : vérifier que les deux versions buildent et passent leurs tests.
- Les deux versions doivent rester identiques (texte et rendu). Pas de doublon : un style, une donnée ou une règle sans lien avec React va dans `../shared/` ; seule une modification de composant se reporte à la main dans SitePersoAngular.
- Aucun fichier CSS dans `src/` : tout le style est dans `../shared/cv.css` (chargé par `src/main.tsx`).
- Ne jamais inventer ni modifier des faits (dates, postes, entreprises, chiffres, compétences). Si une information manque ou semble incohérente, poser la question.
- Langue du CV : français, sauf indication contraire.
- Ne pas modifier `../SitePersoAngular/legacys/` : c'est la référence de la migration.

## Règles de code

- Code simple et lisible, sans dépendance superflue.
- Ne pas ajouter de bibliothèque (UI, routage, état, CSS-in-JS, etc.) sans demande explicite.
- Composants fonctionnels et hooks uniquement ; TypeScript strict, pas de `any`.
- Accessibilité : passer tous les contrôles AXE et respecter les minimums WCAG AA (contraste, focus, ARIA).

## Workflow Git

- La branche `main` est protégée : ne jamais pousser directement dessus.
- Pour toute modification : créer une branche (`git checkout -b <nom-court>`), committer, pousser la branche, puis ouvrir une pull request.
- Messages de commit courts, à l'impératif, en français (ex. : « Ajoute la section compétences »).
- Un commit = un changement cohérent.
- Ne jamais utiliser `git push --force`, `git reset --hard` ni supprimer de branche distante.
- Demander confirmation avant chaque commit et chaque push.
- Ne jamais committer de secrets, de clés API ou de données personnelles non destinées à être publiques (adresse postale complète, numéro de téléphone, etc.) sans validation.

## Avant de terminer une tâche

1. Relancer `npm run build`, `npm test -- --run` et `npm run lint` sans erreur.
2. Vérifier que la page affichée reflète bien le contenu de `../shared/cv.data.ts`.
3. Résumer brièvement ce qui a changé.
