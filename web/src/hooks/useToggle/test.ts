import { renderHook, act } from '@testing-library/react'
import { useToggle } from '.'

describe('useToggle', () => {
  test('initializes with default value', () => {
    const { result } = renderHook(() => useToggle(true))

    expect(result.current.value).toBe(true)
  })

  test('initializes with default value as false when not provided', () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current.value).toBe(false)
  })

  test('toggles the value', () => {
    const { result } = renderHook(() => useToggle(true))

    act(() => {
      result.current.toggle()
    })

    expect(result.current.value).toBe(false)
  })

  test('sets the value directly', () => {
    const { result } = renderHook(() => useToggle(true))

    act(() => {
      result.current.setValue(false)
    })

    expect(result.current.value).toBe(false)
  })
})
