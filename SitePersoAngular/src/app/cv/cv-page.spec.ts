import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import CvPage from './cv-page';
import { CV } from './cv.data';

describe('CvPage', () => {
  async function render(): Promise<HTMLElement> {
    const fixture = TestBed.createComponent(CvPage);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('should render the header with name, title and contacts', async () => {
    const page = await render();
    expect(page.querySelector('h1')?.textContent).toContain(CV.name);
    expect(page.querySelector('.hero__title')?.textContent).toContain(CV.title);
    expect(page.querySelectorAll('.contacts__item').length).toBe(CV.contacts.length);
  });

  it('should only link contacts that have an address', async () => {
    const page = await render();
    const phone = [...page.querySelectorAll('.contacts__item')].find((item) =>
      item.querySelector('.icon--phone'),
    );
    expect(phone?.querySelector('a')).toBeNull();
    expect(page.querySelector('a[href="mailto:ethannickels2@gmail.com"]')).toBeTruthy();
  });

  it('should render one numbered section per entry, linked from the navigation', async () => {
    const page = await render();
    const sections = page.querySelectorAll('main section');
    expect(sections.length).toBe(CV.sections.length);
    expect(sections[0].querySelector('h2')?.textContent).toContain('01 / Projets');

    const links = [...page.querySelectorAll<HTMLAnchorElement>('nav a')];
    expect(links.map((link) => link.getAttribute('href'))).toEqual(
      CV.sections.map((section) => `#${section.id}`),
    );
    for (const section of CV.sections) {
      expect(page.querySelector(`#${section.id}`)).toBeTruthy();
    }
  });

  it('should render bold fragments of rich text', async () => {
    const page = await render();
    const profile = page.querySelector('#profil');
    expect(profile?.querySelector('strong')?.textContent).toBe('Développeur IA junior');
  });

  it('should set the document title', async () => {
    await render();
    expect(TestBed.inject(Title).getTitle()).toBe(`${CV.name} — CV`);
  });
});
