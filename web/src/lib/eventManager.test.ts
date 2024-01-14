import EventManager from './eventManager'

const eventManager = new EventManager()

describe('EventManager', () => {
  const listener = vitest.fn()

  it('should not emit event if no listeners are registered', () => {
    const payload = { message: 'test' }
    const nonExistingEvent = 'nonExistingEvent'

    const result = eventManager.emit(nonExistingEvent, payload)

    expect(result).toBe(undefined)
  })

  it('should not remove listener if no listeners are registered', () => {
    const nonExistingEvent = 'nonExistingEvent'

    const result = eventManager.removeListener(nonExistingEvent, listener)

    expect(result).toBe(undefined)
  })

  it('should initialize with empty listeners map', () => {
    const nonExistingEvent = 'nonExistingEvent'
    expect(eventManager.listeners.get(nonExistingEvent)).toBe(undefined)

    eventManager.on(nonExistingEvent, listener)

    expect(eventManager.listeners.get(nonExistingEvent)).toEqual([listener])
  })

  it('should add event listener', () => {
    eventManager.on('event', listener)

    expect(eventManager.listeners.size).toBe(2)
  })

  it('should emit event with payload to listeners', () => {
    eventManager.emit('event', { data: 'test' })

    expect(listener).toHaveBeenCalledWith({ data: 'test' })
  })

  it('should remove event listener', () => {
    eventManager.removeListener('event', listener)

    expect(eventManager.listeners.get('event')).toEqual([])
  })
})
