import { Component, input } from '@angular/core';
import { RichText as RichTextValue } from '../cv/cv.model';

/** Affiche un texte dont certains morceaux sont en gras. */
@Component({
  selector: 'app-rich-text',
  template: `
    @for (part of text(); track $index) {
      @if (part.strong) {
        <strong>{{ part.text }}</strong>
      } @else {
        {{ part.text }}
      }
    }
  `,
})
export class RichText {
  readonly text = input.required<RichTextValue>();
}
