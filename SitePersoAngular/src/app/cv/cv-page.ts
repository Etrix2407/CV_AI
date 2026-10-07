import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RichText } from '../shared/rich-text';
import { ThemeToggle } from '../theme/theme-toggle';
import { CV } from './cv.data';
import { Hero } from './hero';
import { SectionCard } from './section-card';
import { SectionNav } from './section-nav';
import { EducationList } from './sections/education-list';
import { ExperienceList } from './sections/experience-list';
import { InterestList } from './sections/interest-list';
import { Projects } from './sections/projects';
import { SkillGroups } from './sections/skill-groups';

@Component({
  selector: 'app-cv-page',
  imports: [
    ThemeToggle,
    Hero,
    SectionNav,
    SectionCard,
    RichText,
    Projects,
    EducationList,
    ExperienceList,
    SkillGroups,
    InterestList,
  ],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.scss',
})
export default class CvPage {
  protected readonly cv = CV;

  constructor() {
    inject(Title).setTitle(`${CV.name} — CV`);
    inject(Meta).updateTag({ name: 'description', content: `${CV.name} — ${CV.title}` });
  }
}
