import { ICONS, type IconName, type IconShape } from '../../../shared/icons'

function Shape({ shape }: { shape: IconShape }) {
  switch (shape.type) {
    case 'path':
      return <path d={shape.d} />
    case 'rect':
      return <rect x={shape.x} y={shape.y} width={shape.width} height={shape.height} rx={shape.rx} />
    case 'circle':
      return <circle cx={shape.cx} cy={shape.cy} r={shape.r} />
  }
}

/** Icône SVG décorative (masquée aux lecteurs d'écran), tracés partagés dans shared/icons.ts. */
export function Icon({ name }: { name: IconName }) {
  return (
    <span className={`icon icon--${name}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        {ICONS[name].map((shape, index) => (
          <Shape shape={shape} key={index} />
        ))}
      </svg>
    </span>
  )
}
