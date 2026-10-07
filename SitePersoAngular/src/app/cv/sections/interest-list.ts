import { Component, input } from '@angular/core';
import { Interest } from '../cv.model';

@Component({
  selector: 'app-interest-list',
  template: `
    <ul class="cv-list">
      @for (item of interests(); track item.label) {
        <li>
          <strong>{{ item.label }}</strong> : {{ item.value }}
        </li>
      }
    </ul>
  `,
})
export class InterestList {
  readonly interests = input.required<readonly Interest[]>();
}
