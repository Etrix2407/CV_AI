import { Icon } from '../components/Icon'
import { useTheme } from './useTheme'

/** Bouton flottant de bascule clair / sombre : lune en mode clair, soleil en mode sombre. */
export function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Basculer le mode sombre"
      aria-pressed={isDark}
      onClick={toggle}
    >
      <Icon name={isDark ? 'sun' : 'moon'} />
    </button>
  )
}
