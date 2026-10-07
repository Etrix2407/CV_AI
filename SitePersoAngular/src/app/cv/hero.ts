import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { isExternalLink, tabFileName } from '../../../../shared/format';
import { Icon } from '../shared/icon';
import { Contact } from './cv.model';

/** En-tête du CV présenté comme une fenêtre d'éditeur : photo, nom, titre et contacts. */
@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Icon],
  host: { class: 'hero' },
  templateUrl: './hero.html',
})
export class Hero {
  readonly name = input.required<string>();
  readonly title = input.required<string>();
  readonly photo = input.required<string>();
  readonly contacts = input.required<readonly Contact[]>();

  protected readonly fileName = computed(() => tabFileName(this.name()));
  protected readonly isExternal = isExternalLink;
}
