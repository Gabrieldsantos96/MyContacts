import { themeEventManager } from './themeEventManager'

export const toggleTheme = () => {
  themeEventManager.emit('toggleTheme', '')
}
