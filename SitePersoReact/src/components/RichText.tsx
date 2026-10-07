import { Fragment } from 'react'
import type { RichText as RichTextValue } from '../cv'

/** Affiche un texte dont certains morceaux sont en gras. */
export function RichText({ text }: { text: RichTextValue }) {
  return text.map((part, index) =>
    part.strong ? <strong key={index}>{part.text}</strong> : <Fragment key={index}>{part.text}</Fragment>,
  )
}
