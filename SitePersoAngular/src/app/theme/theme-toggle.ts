import { Component, inject } from '@angular/core';
import { Icon } from '../shared/icon';
import { ThemeService } from './theme.service';

/** Bouton flottant de bascule clair / sombre : lune en mode clair, soleil en mode sombre. */
@Component({
  selector: 'app-theme-toggle',
  imports: [Icon],
  template: `
    <button
      class="theme-toggle"
      type="button"
      aria-label="Basculer le mode sombre"
      [attr.aria-pressed]="theme.isDark()"
      (click)="theme.toggle()"
    >
      <app-icon [name]="theme.isDark() ? 'sun' : 'moon'" />
    </button>
  `,
})
export class ThemeToggle {
  protected readonly theme = inject(ThemeService);
}
