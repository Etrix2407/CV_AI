# CV — Projet

CV en page web, sous forme d'application Angular (migration de l'ancien site statique conservé dans `legacys/`).
Une version React identique existe dans `../SitePersoReact/`. Tout ce qui ne dépend pas du framework est partagé entre les deux dans `../shared/` : contenu, styles, icônes, thème, règles d'affichage. Seuls les composants (templates) sont propres à chaque version.

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
src/app/cv/cv.data.ts        # simple ré-export de ../shared (idem cv.model.ts)
src/app/cv/cv-page.*         # page CV (chargée en lazy loading)
src/app/cv/                  # composants : en-tête, menu, carte de section, sections/
src/app/shared/              # composants réutilisables (icône, texte enrichi)
src/app/theme/               # mode clair / sombre : service (adaptateur de ../shared/theme.ts) + bouton
src/styles.scss              # charge ../shared/cv.css (aucun style dans les composants)
public/                      # fichiers statiques (favicon)
legacys/                     # ancien site (Python + Jinja2) — référence en lecture seule
../.github/workflows/pages.yml  # tests + build des deux versions, publication GitHub Pages (page de choix à /CV_AI/, Angular à /CV_AI/angular/, React à /CV_AI/react/)
```

## Commandes

```bash
npm install
npm start                   # serveur de développement
npm test -- --watch=false   # tests unitaires
npm run build               # génère dist/SitePersoAngular/browser
```

Après toute modification de `src/`, `public/` ou `../shared/`, relancer `npm run build` et `npm test -- --watch=false` et vérifier qu'ils passent sans erreur ni avertissement.

## Règles de contenu

- Ne jamais écrire de texte du CV en dur dans les templates : tout le contenu vient de `../shared/cv.data.ts`.
- Toute modification de `../shared/` touche aussi SitePersoReact : vérifier que les deux versions buildent et passent leurs tests.
- Pas de doublon avec SitePersoReact : un style, une donnée ou une règle sans lien avec Angular va dans `../shared/`, pas dans les composants.
- Ne jamais inventer ni modifier des faits (dates, postes, entreprises, chiffres, compétences). Si une information manque ou semble incohérente, poser la question.
- Langue du CV : français, sauf indication contraire.
- Ne pas modifier `legacys/` : c'est la référence de la migration.

## Règles de code

- Code simple et lisible, sans dépendance superflue.
- Ne pas ajouter de bibliothèque (UI, Markdown, état, etc.) sans demande explicite.
- Respecter les bonnes pratiques Angular ci-dessous.

## Workflow Git

- La branche `main` est protégée : ne jamais pousser directement dessus.
- Pour toute modification : créer une branche (`git checkout -b <nom-court>`), committer, pousser la branche, puis ouvrir une pull request.
- Messages de commit courts, à l'impératif, en français (ex. : « Ajoute la section compétences »).
- Un commit = un changement cohérent.
- Ne jamais utiliser `git push --force`, `git reset --hard` ni supprimer de branche distante.
- Demander confirmation avant chaque commit et chaque push.
- Ne jamais committer de secrets, de clés API ou de données personnelles non destinées à être publiques (adresse postale complète, numéro de téléphone, etc.) sans validation.

## Avant de terminer une tâche

1. Relancer `npm run build` et `npm test -- --watch=false` sans erreur.
2. Vérifier que la page affichée reflète bien le contenu de `../shared/cv.data.ts`.
3. Résumer brièvement ce qui a changé.

---

You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly. `OnPush` is the default in Angular v22+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `model()` for two-way bound properties with `[(prop)]` syntax instead of pairing `input()` with `output()`
- Use `computed()` for derived state
- Use `linkedSignal()` for state derived from multiple reactive sources that must stay synchronized
- Prefer inline templates for small components
- Prefer Signal Forms (`@angular/forms/signals`) for new forms. They are stable in Angular v22+ and provide signal-based state, type-safe field access, and schema-based validation
- When not using Signal Forms, prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- Do NOT import `CommonModule`, import only the directives and pipes the template uses, such as `AsyncPipe` or `DatePipe`
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+)
- Use the `inject()` function instead of constructor injection
