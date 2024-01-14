import { act, renderHook } from '@testing-library/react'
import { useToastMessage } from './useToastMessage'

describe('useToastMessage', () => {
  it('should call onRemoveMessage after the specified duration', async () => {
    vitest.useFakeTimers()

    const onRemoveMessage = vitest.fn()
    const message = { id: 1, duration: 5000 }

    const { unmount } = renderHook(() =>
      useToastMessage({
        onRemoveMessage,
        message
      })
    )

    expect(onRemoveMessage).not.toHaveBeenCalled()

    act(() => {
      vitest.advanceTimersByTime(5000)
    })

    expect(onRemoveMessage).toHaveBeenCalledWith(1)

    unmount()
    vitest.clearAllTimers()
  })

  it('should call onRemoveMessage after 7s if duration is not specified', () => {
    const onRemoveMessage = vitest.fn()
    const message = { id: 1 }

    renderHook(() =>
      useToastMessage({
        onRemoveMessage,
        message
      })
    )

    expect(onRemoveMessage).not.toHaveBeenCalled()

    act(() => {
      vitest.advanceTimersByTime(7000)
    })

    expect(onRemoveMessage).toHaveBeenCalledWith(1)
  })

  it('should call onRemoveMessage if handleToast is called', () => {
    const onRemoveMessage = vitest.fn()
    const message = { id: 1 }

    const { result } = renderHook(() =>
      useToastMessage({
        onRemoveMessage,
        message
      })
    )
    const spyHandleRemoveToast = vitest.spyOn(
      result.current,
      'handleRemoveToast'
    )

    act(() => {
      result.current.handleRemoveToast()
    })

    expect(spyHandleRemoveToast).toHaveBeenCalled()
    expect(onRemoveMessage).toHaveBeenCalledWith(1)
  })
})
