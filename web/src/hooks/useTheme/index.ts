import { useEffect, useCallback } from 'react'

import { IEventManager } from '@lib/eventManager'

export type useThemeProps = { themeEventManager: IEventManager<string> }

export function useTheme({ themeEventManager }: useThemeProps) {
  const toggleTheme = useCallback(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', !isDarkMode)

    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }

    themeEventManager.on('toggleTheme', toggleTheme)

    return () => {
      themeEventManager.removeListener('toggleTheme', toggleTheme)
    }
  }, [themeEventManager, toggleTheme])
}
