import { Component, computed, input } from '@angular/core';
import { sectionAnimationDelay, sectionNumber, sectionTitleId } from '../../../../shared/format';

/** Carte d'une section du CV, titre numéroté : « 01 / Profil ». */
@Component({
  selector: 'app-section-card',
  template: `
    <section
      class="card"
      [id]="sectionId()"
      [attr.aria-labelledby]="titleId()"
      [style.animation-delay.s]="delay()"
    >
      <h2 class="card__title" [id]="titleId()">
        <span class="card__number" aria-hidden="true">{{ number() }} / </span>{{ heading() }}
      </h2>
      <ng-content />
    </section>
  `,
})
export class SectionCard {
  readonly sectionId = input.required<string>();
  readonly heading = input.required<string>();
  /** Position de la section (1, 2, …) : numéro affiché et décalage de l'animation. */
  readonly position = input.required<number>();

  protected readonly titleId = computed(() => sectionTitleId(this.sectionId()));
  protected readonly number = computed(() => sectionNumber(this.position()));
  protected readonly delay = computed(() => sectionAnimationDelay(this.position()));
}
