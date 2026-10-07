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
  styles: `
    .theme-toggle {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 10;
      display: grid;
      place-items: center;
      width: 42px;
      height: 42px;
      border: 1px solid var(--border);
      border-radius: 50%;
      background: var(--surface);
      color: var(--accent);
      box-shadow: var(--shadow);
      cursor: pointer;
      transition:
        transform 0.2s,
        border-color 0.2s;
    }

    @media (hover: hover) {
      .theme-toggle:hover {
        transform: rotate(-15deg);
        border-color: var(--accent);
      }
    }

    app-icon {
      width: 20px;
      height: 20px;
    }

    @media (max-width: 640px) {
      .theme-toggle {
        top: 12px;
        right: 12px;
        width: 38px;
        height: 38px;
      }
    }

    @media print {
      .theme-toggle {
        display: none;
      }
    }
  `,
})
export class ThemeToggle {
  protected readonly theme = inject(ThemeService);
}
