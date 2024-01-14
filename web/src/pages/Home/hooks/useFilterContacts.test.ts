/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, waitFor, act } from '@testing-library/react'
import useFilterContacts from './useFilterContacts'

const mockContacts: any[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
]

describe('useFilterContacts Hook Tests', () => {
  test('should filter contacts based on searchTerm', () => {
    const { result } = renderHook(() =>
      useFilterContacts({
        searchTerm: 'John',
        debouncedValue: 'John',
        contacts: mockContacts,
        isLoading: false,
        isError: false
      })
    )

    expect(result.current.filteredContacts).toHaveLength(1)
    expect(result.current.filteredContacts[0].name).toBe('John Doe')
  })

  test('should indicate when data is empty', () => {
    const { result } = renderHook(() =>
      useFilterContacts({
        searchTerm: '',
        debouncedValue: '',
        contacts: [],
        isLoading: false,
        isError: false
      })
    )

    expect(result.current.dataIsEmpty).toBe(true)
  })

  test('should indicate when there are no results for search', () => {
    const { result } = renderHook(() =>
      useFilterContacts({
        searchTerm: 'there are no contacts',
        debouncedValue: 'there are no contacts',
        contacts: mockContacts,
        isLoading: false,
        isError: false
      })
    )

    expect(result.current.noResultsForSearch).toBe(true)
  })

  test('should set contactBeingDelete', () => {
    const { result } = renderHook(() =>
      useFilterContacts({
        searchTerm: 'John',
        debouncedValue: 'John',
        contacts: mockContacts,
        isLoading: false,
        isError: false
      })
    )

    act(() => {
      result.current.setContactBeingDelete(mockContacts[0])
    })

    waitFor(() => {
      expect(result.current.contactBeingDelete).toEqual(mockContacts[0])
    })
  })
})
