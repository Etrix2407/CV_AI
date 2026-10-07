import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { CV } from './cv'

describe('App', () => {
  it('renders the header with name, title and contacts', () => {
    const { container } = render(<App />)
    expect(container.querySelector('h1')?.textContent).toContain(CV.name)
    expect(container.querySelector('.hero__title')?.textContent).toContain(CV.title)
    expect(container.querySelectorAll('.contacts__item')).toHaveLength(CV.contacts.length)
  })

  it('only links contacts that have an address', () => {
    const { container } = render(<App />)
    const phone = [...container.querySelectorAll('.contacts__item')].find((item) =>
      item.querySelector('.icon--phone'),
    )
    expect(phone?.querySelector('a')).toBeNull()
    expect(container.querySelector('a[href="mailto:ethannickels2@gmail.com"]')).not.toBeNull()
  })

  it('renders one numbered section per entry, linked from the navigation', () => {
    const { container } = render(<App />)
    const sections = container.querySelectorAll('main section')
    expect(sections).toHaveLength(CV.sections.length)
    expect(sections[0].querySelector('h2')?.textContent).toContain('01 / Projets')

    const links = [...container.querySelectorAll('nav a')]
    expect(links.map((link) => link.getAttribute('href'))).toEqual(
      CV.sections.map((section) => `#${section.id}`),
    )
    for (const section of CV.sections) {
      expect(container.querySelector(`#${section.id}`)).not.toBeNull()
    }
  })

  it('renders bold fragments of rich text', () => {
    const { container } = render(<App />)
    expect(container.querySelector('#profil strong')?.textContent).toBe('Développeur IA junior')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(`${CV.name} — CV`)
  })
})
