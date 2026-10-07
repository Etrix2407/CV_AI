import { Component, input } from '@angular/core';
import { RichText } from '../../shared/rich-text';
import { Project } from '../cv.model';

@Component({
  selector: 'app-projects',
  imports: [RichText],
  template: `
    @for (project of projects(); track project.name) {
      <h3 class="cv-subtitle">{{ project.name }}</h3>
      <div class="cv-indent">
        <p>
          <strong>{{ project.stack.join(' · ') }}</strong> ·
          <a
            [href]="project.repoUrl"
            target="_blank"
            rel="noopener"
            [attr.aria-label]="'GitHub : ' + project.name"
            >GitHub</a
          >
        </p>
        <ul class="cv-list">
          @for (highlight of project.highlights; track $index) {
            <li><app-rich-text [text]="highlight" /></li>
          }
        </ul>
      </div>
    }
  `,
})
export class Projects {
  readonly projects = input.required<readonly Project[]>();
}
