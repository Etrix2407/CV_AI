/** Petites règles d'affichage communes aux deux versions du CV. */

/** Nom de l'onglet de l'en-tête : « Ethan Nickels » → « ethan-nickels.md ». */
export function tabFileName(name: string): string {
  return `${name.toLowerCase().replaceAll(' ', '-')}.md`;
}

/** Numéro affiché devant le titre d'une section : 1 → « 01 ». */
export function sectionNumber(position: number): string {
  return String(position).padStart(2, '0');
}

/** Décalage (en secondes) de l'animation d'apparition d'une section, plafonné à la 5e. */
export function sectionAnimationDelay(position: number): number {
  return Math.min(position, 5) * 0.08;
}

/** Identifiant du titre d'une section, référencé par aria-labelledby. */
export function sectionTitleId(sectionId: string): string {
  return `${sectionId}-titre`;
}

/** Les liens web s'ouvrent dans un nouvel onglet ; mailto: et tel: restent dans la page. */
export function isExternalLink(href: string): boolean {
  return href.startsWith('http');
}
