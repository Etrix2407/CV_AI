import { isExternalLink, tabFileName, type Contact } from '../cv'
import { Icon } from './Icon'

interface HeroProps {
  name: string
  title: string
  photo: string
  contacts: readonly Contact[]
}

function ContactLink({ contact }: { contact: Contact }) {
  if (!contact.href) {
    return contact.label
  }
  return (
    <a href={contact.href} {...(isExternalLink(contact.href) && { target: '_blank', rel: 'noopener' })}>
      {contact.label}
    </a>
  )
}

/** En-tête du CV présenté comme une fenêtre d'éditeur : photo, nom, titre et contacts. */
export function Hero({ name, title, photo, contacts }: HeroProps) {
  return (
    <div className="hero">
      <div className="window">
        <div className="window__bar" aria-hidden="true">
          <span className="window__tab">
            <Icon name="file" />
            {tabFileName(name)}
          </span>
        </div>

        <div className="hero__body">
          <img
            className="hero__photo"
            src={photo}
            width={132}
            height={132}
            alt={name}
            fetchPriority="high"
          />

          <div>
            <h1 className="hero__name">{name}</h1>
            <p className="hero__title">{title}</p>

            <ul className="contacts">
              {contacts.map((contact, index) => (
                <li className="contacts__item" key={index}>
                  <Icon name={contact.kind} />
                  <ContactLink contact={contact} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
