import { Component, computed, input } from '@angular/core';

/** Carte d'une section du CV, titre numéroté : « 01 / Profil ». */
@Component({
  selector: 'app-section-card',
  host: {
    '[style.animation-delay.s]': 'delay()',
  },
  template: `
    <section class="card" [id]="sectionId()" [attr.aria-labelledby]="titleId()">
      <h2 class="card__title" [id]="titleId()">
        <span class="card__number" aria-hidden="true">{{ number() }} / </span>{{ heading() }}
      </h2>
      <ng-content />
    </section>
  `,
  styles: `
    :host {
      display: block;
      margin-bottom: 16px;
      animation: rise 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both;
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: clamp(20px, 4vw, 26px) clamp(18px, 4.5vw, 32px);
      scroll-margin-top: 72px;
      transition: border-color 0.25s;
    }

    @media (hover: hover) {
      .card:hover {
        border-color: color-mix(in srgb, var(--accent) 45%, var(--border));
      }
    }

    .card__title {
      margin: 0 0 16px;
      font: 600 1.15rem var(--font-mono);
      letter-spacing: -0.01em;
      break-after: avoid;
    }

    .card__number {
      color: var(--accent);
    }

    @media print {
      :host {
        margin-bottom: 14px;
      }

      .card {
        border: none;
        padding: 0;
      }
    }
  `,
})
export class SectionCard {
  readonly sectionId = input.required<string>();
  readonly heading = input.required<string>();
  /** Position de la section (1, 2, …) : numéro affiché et décalage de l'animation. */
  readonly position = input.required<number>();

  protected readonly titleId = computed(() => `${this.sectionId()}-titre`);
  protected readonly number = computed(() => String(this.position()).padStart(2, '0'));
  protected readonly delay = computed(() => Math.min(this.position(), 5) * 0.08);
}
