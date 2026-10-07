import { Component, input } from '@angular/core';
import { Section } from './cv.model';

/** Menu collant des sections, affiché comme des appels de fonction : « profil() ». */
@Component({
  selector: 'app-section-nav',
  host: { class: 'nav-wrapper' },
  template: `
    <nav class="nav" aria-label="Sections">
      @for (section of sections(); track section.id) {
        <a class="nav__link" [href]="'#' + section.id">{{ section.title }}</a>
      }
    </nav>
  `,
})
export class SectionNav {
  readonly sections = input.required<readonly Section[]>();
}
