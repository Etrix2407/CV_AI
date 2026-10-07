import { DestroyRef, Service, computed, effect, inject, signal } from '@angular/core';
import {
  Theme,
  applyTheme,
  isSystemDark,
  oppositeTheme,
  readStoredTheme,
  resolveTheme,
  storeTheme,
  watchSystemTheme,
} from '../../../../shared/theme';

/** Mode clair / sombre (logique partagée dans shared/theme.ts). */
@Service()
export class ThemeService {
  private readonly systemDark = signal(isSystemDark());
  private readonly choice = signal<Theme | null>(readStoredTheme());

  readonly theme = computed(() => resolveTheme(this.choice(), this.systemDark()));
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    const stopWatching = watchSystemTheme((dark) => this.systemDark.set(dark));
    inject(DestroyRef).onDestroy(stopWatching);

    effect(() => applyTheme(this.choice()));
  }

  toggle(): void {
    const next = oppositeTheme(this.theme());
    this.choice.set(next);
    storeTheme(next);
  }
}
