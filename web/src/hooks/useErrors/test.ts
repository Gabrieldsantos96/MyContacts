import { renderHook, act } from '@testing-library/react'
import useErrors from '.'

describe('useErrors', () => {
  test('initializes with no errors', () => {
    const { result } = renderHook(() => useErrors())

    expect(result.current.errors).toHaveLength(0)
    expect(result.current.noErrors).toBe(true)
  })

  test('adds and removes errors', () => {
    const { result } = renderHook(() => useErrors())

    const errorToAdd = { field: 'username', message: 'Username is required' }

    act(() => {
      result.current.setError([errorToAdd], 'username')
    })

    expect(result.current.errors).toEqual([errorToAdd])
    expect(result.current.noErrors).toBe(false)

    act(() => {
      result.current.removeError('username')
    })

    expect(result.current.errors).toHaveLength(0)
    expect(result.current.noErrors).toBe(true)
  })

  test('replaces existing errors for a field', () => {
    const { result } = renderHook(() => useErrors())

    const initialError = { field: 'email', message: 'Email is required' }
    const updatedError = { field: 'email', message: 'Invalid email format' }

    act(() => {
      result.current.setError([initialError], 'email')
    })

    expect(result.current.errors).toEqual([initialError])

    act(() => {
      result.current.setError([updatedError], 'email')
    })

    expect(result.current.errors).toEqual([updatedError])
  })

  test('gets error message by field name', () => {
    const { result } = renderHook(() => useErrors())

    const error = {
      field: 'password',
      message: 'Password must be at least 8 characters'
    }

    act(() => {
      result.current.setError([error], 'password')
    })

    const errorMessage = result.current.getErrorMessageByFieldName('password')

    expect(errorMessage).toBe(error.message)
  })
})
