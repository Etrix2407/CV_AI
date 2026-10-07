import { Component, input } from '@angular/core';
import { Experience } from '../cv.model';

@Component({
  selector: 'app-experience-list',
  template: `
    <ul class="cv-list">
      @for (item of experiences(); track $index) {
        <li>
          <strong>{{ item.role }}</strong> · {{ item.employer }} · {{ item.date }} :
          {{ item.description }}
        </li>
      }
    </ul>
  `,
})
export class ExperienceList {
  readonly experiences = input.required<readonly Experience[]>();
}
