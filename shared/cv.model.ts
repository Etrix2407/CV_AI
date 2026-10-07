/** Types du contenu du CV, partagés par SitePersoAngular et SitePersoReact. */

export type ContactKind = 'email' | 'phone' | 'address' | 'linkedin' | 'github';

/** Morceau de texte, éventuellement mis en gras (équivalent du **gras** Markdown). */
export interface TextPart {
  readonly text: string;
  readonly strong?: boolean;
}

export type RichText = readonly TextPart[];

export interface Contact {
  readonly kind: ContactKind;
  readonly label: string;
  /** Absent : le contact est affiché sans lien. */
  readonly href?: string;
}

export interface Project {
  readonly name: string;
  readonly stack: readonly string[];
  readonly repoUrl: string;
  readonly highlights: readonly RichText[];
}

export interface Education {
  readonly period: string;
  readonly degree: string;
  readonly school: string;
}

export interface Experience {
  readonly role: string;
  readonly employer: string;
  readonly date: string;
  readonly description: string;
}

export interface SkillGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface Interest {
  readonly label: string;
  readonly value: string;
}

export type SectionId =
  'projets' | 'profil' | 'formation' | 'experiences' | 'competences' | 'centres-d-interet';

export interface Section {
  readonly id: SectionId;
  readonly title: string;
}

export interface Cv {
  readonly name: string;
  readonly title: string;
  /** URL de la photo, fournie par le bundler (import du fichier). */
  readonly photo: string;
  readonly contacts: readonly Contact[];
  /** Ordre d'affichage des sections et de la navigation. */
  readonly sections: readonly Section[];
  readonly projects: readonly Project[];
  readonly profile: RichText;
  readonly education: readonly Education[];
  readonly experiences: readonly Experience[];
  readonly skills: readonly SkillGroup[];
  readonly interests: readonly Interest[];
}
