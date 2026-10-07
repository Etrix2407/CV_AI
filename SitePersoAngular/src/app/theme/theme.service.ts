import { DOCUMENT, DestroyRef, Service, computed, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Mode clair / sombre.
 * Sans choix mémorisé, le thème suit le réglage du système ; un choix explicite
 * est appliqué via l'attribut data-theme de <html> et mémorisé dans localStorage.
 */
@Service()
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;
  private readonly systemQuery = this.window?.matchMedia?.('(prefers-color-scheme: dark)');

  private readonly systemDark = signal(this.systemQuery?.matches ?? false);
  private readonly choice = signal<Theme | null>(this.readStored());

  readonly theme = computed<Theme>(() => this.choice() ?? (this.systemDark() ? 'dark' : 'light'));
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    const onSystemChange = (event: MediaQueryListEvent) => this.systemDark.set(event.matches);
    this.systemQuery?.addEventListener('change', onSystemChange);
    inject(DestroyRef).onDestroy(() =>
      this.systemQuery?.removeEventListener('change', onSystemChange),
    );

    effect(() => {
      const root = this.document.documentElement;
      const choice = this.choice();
      if (choice) {
        root.dataset['theme'] = choice;
      } else {
        delete root.dataset['theme'];
      }
    });
  }

  toggle(): void {
    const next: Theme = this.isDark() ? 'light' : 'dark';
    this.choice.set(next);
    this.save(next);
  }

  private readStored(): Theme | null {
    try {
      const value = this.window?.localStorage.getItem(STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }

  private save(theme: Theme): void {
    try {
      this.window?.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Stockage indisponible (navigation privée…) : le choix vaut pour la session.
    }
  }
}
