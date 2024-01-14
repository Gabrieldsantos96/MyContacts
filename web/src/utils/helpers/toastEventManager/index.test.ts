import { showToast } from '.'
import { toastEventManager } from './toastEventManager'

vitest.mock('@lib/eventManager')

describe('showToast', () => {
  afterEach(() => {
    vitest.clearAllMocks()
  })

  it('emits addToast event with correct data', () => {
    showToast({
      type: 'success',
      text: 'Test toast',
      duration: 3000
    })

    expect(toastEventManager.emit).toHaveBeenCalledWith('addToast', {
      type: 'success',
      text: 'Test toast',
      duration: 3000
    })
  })
})
