import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import {
  applyTheme,
  isSystemDark,
  oppositeTheme,
  readStoredTheme,
  resolveTheme,
  storeTheme,
  watchSystemTheme,
  type Theme,
} from '../../../shared/theme'

/** Mode clair / sombre (logique partagée dans shared/theme.ts). */
export function useTheme() {
  const systemDark = useSyncExternalStore(watchSystemTheme, isSystemDark, () => false)
  const [choice, setChoice] = useState<Theme | null>(readStoredTheme)
  const theme = resolveTheme(choice, systemDark)

  useEffect(() => applyTheme(choice), [choice])

  const toggle = useCallback(() => {
    const next = oppositeTheme(theme)
    setChoice(next)
    storeTheme(next)
  }, [theme])

  return { theme, isDark: theme === 'dark', toggle }
}
