import { Component, input } from '@angular/core';
import { Education } from '../cv.model';

@Component({
  selector: 'app-education-list',
  template: `
    @for (item of education(); track item.degree) {
      <h3 class="cv-subtitle">{{ item.period }}</h3>
      <p class="cv-indent">
        <strong>{{ item.degree }}</strong> – {{ item.school }}
      </p>
    }
  `,
})
export class EducationList {
  readonly education = input.required<readonly Education[]>();
}
