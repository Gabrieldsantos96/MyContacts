import { renderHook } from '@testing-library/react'
import { useDebounce } from '.'

vitest.useFakeTimers()

describe('useDebounce', () => {
  test('returns the initial value', () => {
    const { result } = renderHook(() => useDebounce({ value: 'initialValue' }))
    expect(result.current.debouncedValue).toBe('initialValue')
  })
})
