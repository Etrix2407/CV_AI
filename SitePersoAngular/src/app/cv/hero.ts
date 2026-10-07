import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Icon } from '../shared/icon';
import { Contact } from './cv.model';

/** En-tête du CV présenté comme une fenêtre d'éditeur : photo, nom, titre et contacts. */
@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly name = input.required<string>();
  readonly title = input.required<string>();
  readonly photo = input.required<string>();
  readonly contacts = input.required<readonly Contact[]>();

  /** Nom de l'onglet : « ethan-nickels.md ». */
  protected readonly fileName = computed(
    () => `${this.name().toLowerCase().replaceAll(' ', '-')}.md`,
  );

  protected isExternal(href: string): boolean {
    return href.startsWith('http');
  }
}
