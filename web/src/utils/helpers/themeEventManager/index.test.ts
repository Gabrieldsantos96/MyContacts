import { toggleTheme } from '.'
import { themeEventManager } from './themeEventManager'

vitest.mock('@lib/eventManager')

describe('toggleTheme', () => {
  afterEach(() => {
    vitest.clearAllMocks()
  })

  it('emits toggleTheme event with correct data', () => {
    toggleTheme()

    expect(themeEventManager.emit).toHaveBeenCalledWith('toggleTheme', '')
  })
})
