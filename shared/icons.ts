import type { ContactKind } from './cv.model';

/** Icônes SVG (grille 24×24, tracé au trait), décrites comme des données pour être rendues par Angular et React. */

export type IconName = ContactKind | 'file' | 'sun' | 'moon';

export type IconShape =
  | { readonly type: 'path'; readonly d: string }
  | { readonly type: 'rect'; readonly x: number; readonly y: number; readonly width: number; readonly height: number; readonly rx?: number }
  | { readonly type: 'circle'; readonly cx: number; readonly cy: number; readonly r: number };

export const ICONS: Readonly<Record<IconName, readonly IconShape[]>> = {
  email: [
    { type: 'rect', x: 3, y: 5, width: 18, height: 14, rx: 2 },
    { type: 'path', d: 'm3 7 9 6 9-6' },
  ],
  phone: [
    {
      type: 'path',
      d: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z',
    },
  ],
  address: [
    { type: 'path', d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' },
    { type: 'circle', cx: 12, cy: 10, r: 3 },
  ],
  linkedin: [
    { type: 'path', d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z' },
    { type: 'rect', x: 2, y: 9, width: 4, height: 12 },
    { type: 'circle', cx: 4, cy: 4, r: 2 },
  ],
  github: [
    {
      type: 'path',
      d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22',
    },
  ],
  file: [
    { type: 'path', d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z' },
    { type: 'path', d: 'M14 2v6h6M9 13h6M9 17h4' },
  ],
  sun: [
    { type: 'circle', cx: 12, cy: 12, r: 4 },
    {
      type: 'path',
      d: 'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
    },
  ],
  moon: [{ type: 'path', d: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z' }],
};
