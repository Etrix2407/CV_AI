import { Component, computed, input } from '@angular/core';
import { ICONS, IconName } from '../../../../shared/icons';

export type { IconName } from '../../../../shared/icons';

/** Icône SVG décorative (masquée aux lecteurs d'écran), tracés partagés dans shared/icons.ts. */
@Component({
  selector: 'app-icon',
  host: {
    '[class]': 'hostClass()',
    'aria-hidden': 'true',
  },
  template: `
    <svg viewBox="0 0 24 24" focusable="false">
      @for (shape of shapes(); track $index) {
        @switch (shape.type) {
          @case ('path') {
            <path [attr.d]="shape.d" />
          }
          @case ('rect') {
            <rect
              [attr.x]="shape.x"
              [attr.y]="shape.y"
              [attr.width]="shape.width"
              [attr.height]="shape.height"
              [attr.rx]="shape.rx"
            />
          }
          @case ('circle') {
            <circle [attr.cx]="shape.cx" [attr.cy]="shape.cy" [attr.r]="shape.r" />
          }
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();

  protected readonly shapes = computed(() => ICONS[this.name()]);
  protected readonly hostClass = computed(() => `icon icon--${this.name()}`);
}
