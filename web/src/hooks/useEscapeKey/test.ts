import { renderHook, act } from '@testing-library/react'
import { useEscapeKey } from '.'
import React from 'react'

describe('useModal', () => {
  it('should call when press escape', () => {
    const onCancelMock = vitest.fn()
    renderHook(() => useEscapeKey(onCancelMock))

    act(() => {
      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
      document.body.dispatchEvent(escapeEvent)
    })

    expect(onCancelMock).toHaveBeenCalled()
  })

  it('should not call for other keys', () => {
    const onCancelMock = vitest.fn()

    renderHook(() => useEscapeKey(onCancelMock))

    act(() => {
      const otherKeyEvent = new KeyboardEvent('keydown', { key: 'Enter' })
      document.body.dispatchEvent(otherKeyEvent)
    })

    expect(onCancelMock).not.toHaveBeenCalled()
  })

  it('Should run useEffect cleanUp return function', () => {
    let isExecutedAfterUnmount = false

    vitest.spyOn(React, 'useEffect').mockImplementationOnce(() => {
      isExecutedAfterUnmount = true
    })

    const { unmount } = renderHook(() => useEscapeKey(vitest.fn()))

    unmount()

    expect(isExecutedAfterUnmount).toBe(true)
  })
})
