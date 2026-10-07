import { Component, input } from '@angular/core';
import { SkillGroup } from '../cv.model';

@Component({
  selector: 'app-skill-groups',
  template: `
    @for (group of groups(); track group.title) {
      <h3 class="cv-subtitle">{{ group.title }}</h3>
      <ul class="cv-list cv-indent">
        @for (item of group.items; track item) {
          <li>{{ item }}</li>
        }
      </ul>
    }
  `,
})
export class SkillGroups {
  readonly groups = input.required<readonly SkillGroup[]>();
}
