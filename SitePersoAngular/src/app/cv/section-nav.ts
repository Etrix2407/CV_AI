import { Component, input } from '@angular/core';
import { Section } from './cv.model';

/** Menu collant des sections, affiché comme des appels de fonction : « profil() ». */
@Component({
  selector: 'app-section-nav',
  template: `
    <nav class="nav" aria-label="Sections">
      @for (section of sections(); track section.id) {
        <a class="nav__link" [href]="'#' + section.id">{{ section.title }}</a>
      }
    </nav>
  `,
  styles: `
    :host {
      position: sticky;
      top: 0;
      z-index: 5;
      display: block;
    }

    .nav {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      padding: 10px 0;
      margin-bottom: 16px;
      background: var(--bg);
      border-bottom: 1px solid var(--border);
    }

    .nav__link {
      padding: 5px 12px;
      border-radius: 8px;
      font: 500 0.85rem var(--font-mono);
      color: var(--muted);
      text-transform: lowercase;
      transition:
        background 0.2s,
        color 0.2s;

      &::after {
        content: '()' / '';
        color: var(--accent-2);
      }

      &:hover {
        text-decoration: none;
        background: var(--accent-soft);
        color: var(--accent);
      }
    }

    /* Tablette et téléphone : place réservée au bouton de thème */
    @media (max-width: 1024px) {
      .nav {
        padding-right: 52px;
      }
    }

    /* Téléphone : menu sur une seule ligne, défilable au doigt, fondu à droite */
    @media (max-width: 640px) {
      .nav {
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        mask-image: linear-gradient(to right, #000 80%, transparent);
      }

      .nav::-webkit-scrollbar {
        display: none;
      }

      .nav__link {
        flex: none;
        padding: 8px 12px;
      }
    }

    @media print {
      :host {
        display: none;
      }
    }
  `,
})
export class SectionNav {
  readonly sections = input.required<readonly Section[]>();
}
