import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useTheme } from './useTheme'

describe('useTheme', () => {
  const root = document.documentElement

  beforeEach(() => {
    localStorage.clear()
    delete root.dataset.theme
  })

  it('follows the system theme when nothing is stored', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')
    expect(root.dataset.theme).toBeUndefined()
  })

  it('restores the stored theme', () => {
    localStorage.setItem('theme', 'dark')
    const { result } = renderHook(() => useTheme())
    expect(result.current.isDark).toBe(true)
    expect(root.dataset.theme).toBe('dark')
  })

  it('toggles, applies and remembers the theme', () => {
    const { result } = renderHook(() => useTheme())

    act(() => result.current.toggle())
    expect(result.current.theme).toBe('dark')
    expect(root.dataset.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')

    act(() => result.current.toggle())
    expect(result.current.theme).toBe('light')
    expect(root.dataset.theme).toBe('light')
  })
})
