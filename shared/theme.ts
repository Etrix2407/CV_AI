/**
 * Mode clair / sombre, logique commune à SitePersoAngular (ThemeService) et SitePersoReact (useTheme).
 * Sans choix mémorisé, le thème suit le réglage du système ; un choix explicite
 * est appliqué via l'attribut data-theme de <html> et mémorisé dans localStorage.
 * Le script en ligne des deux index.html relit la même clé avant l'affichage.
 */

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

const systemQuery =
  typeof window === 'undefined' ? undefined : window.matchMedia?.('(prefers-color-scheme: dark)');

export function isSystemDark(): boolean {
  return systemQuery?.matches ?? false;
}

/** Appelle `onChange` à chaque changement du thème système ; renvoie la fonction de désabonnement. */
export function watchSystemTheme(onChange: (dark: boolean) => void): () => void {
  const listener = (event: MediaQueryListEvent) => onChange(event.matches);
  systemQuery?.addEventListener('change', listener);
  return () => systemQuery?.removeEventListener('change', listener);
}

export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

export function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Stockage indisponible (navigation privée…) : le choix vaut pour la session.
  }
}

/** Applique un choix explicite, ou rend la main au thème système (`null`). */
export function applyTheme(choice: Theme | null, root: HTMLElement = document.documentElement): void {
  if (choice) {
    root.dataset['theme'] = choice;
  } else {
    delete root.dataset['theme'];
  }
}

export function resolveTheme(choice: Theme | null, systemDark: boolean): Theme {
  return choice ?? (systemDark ? 'dark' : 'light');
}

export function oppositeTheme(theme: Theme): Theme {
  return theme === 'dark' ? 'light' : 'dark';
}
