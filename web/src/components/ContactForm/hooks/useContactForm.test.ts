/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, renderHook, waitFor } from '@utils/test/test-ui'
import { useContactForm } from './useContactForm'
import { formContactValidator } from './validatorSchema'

describe('useContactForm Hook Tests', () => {
  const removeError = vitest.fn()
  const setError = vitest.fn()
  const ref = { current: null }
  const mockSubmit = vitest.fn()

  it('initializes ref correctly and sets field values', async () => {
    const { result } = renderHook(() =>
      useContactForm({
        onSubmit: mockSubmit,
        ref: ref,
        removeError: removeError,
        setError: setError,
        formContactValidator: formContactValidator
      })
    )

    const { current } = ref
    expect(current).not.toBeNull()

    act(() => {
      //call setFieldsvalues with empty data to fullfill test
      current.setFieldsValues({
        name: '',
        email: '',
        phone: '',
        category_id: ''
      })
    })

    await waitFor(() => {
      expect(result.current.formData).toEqual({
        name: '',
        email: '',
        phone: '',
        category_id: ''
      })
    })

    act(() => {
      current.setFieldsValues({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        category_id: '1'
      })
    })

    await waitFor(() => {
      expect(result.current.formData).toEqual({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '(12) 3456-7890',
        category_id: '1'
      })
    })
  })

  it('initializes ref correctly and resets fields correctly', async () => {
    const { result } = renderHook(() =>
      useContactForm({
        onSubmit: mockSubmit,
        ref: ref,
        removeError: removeError,
        setError: setError,
        formContactValidator: formContactValidator
      })
    )

    const { current } = ref
    expect(current).not.toBeNull()

    act(() => {
      current.resetFields()
    })

    await waitFor(() => {
      expect(result.current.formData).toEqual({
        name: '',
        email: '',
        phone: '',
        category_id: ''
      })
    })
  })

  it('should call onSubmit if form is valid', async () => {
    const { result } = renderHook(() =>
      useContactForm({
        onSubmit: mockSubmit,
        ref: ref,
        removeError: removeError,
        setError: setError,
        formContactValidator: formContactValidator
      })
    )

    const { current } = ref
    expect(current).not.toBeNull()

    // Simulate input change
    act(() => {
      result.current.onChangeForm('name', 'John')
    })

    await waitFor(() => {
      expect(result.current.formData).toEqual({
        name: 'John',
        email: '',
        phone: '',
        category_id: ''
      })
      // call setError cause name dont meet requirements
      expect(setError).toHaveBeenCalled()
    })

    act(() => {
      result.current.onSubmitForm({ preventDefault: vitest.fn() } as any)
    })

    await waitFor(() => {
      // submit shouldn't been called cause form is not valid
      expect(mockSubmit).not.toHaveBeenCalled()
    })

    act(() => {
      result.current.onChangeForm('name', 'John Doe Silva')
      result.current.onChangeForm('email', 'john@example.com')
      result.current.onChangeForm('phone', '35991919000')
      result.current.onChangeForm('category_id', '1')
    })

    await waitFor(() => {
      expect(result.current.formData).toEqual({
        name: 'John Doe Silva',
        email: 'john@example.com',
        phone: '35991919000',
        category_id: '1'
      })
      // call removeError cause fields meet requirements and errors has to be excluded
      expect(removeError).toHaveBeenCalled()
    })

    act(() => {
      result.current.onSubmitForm({ preventDefault: vitest.fn() } as any)
    })

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled()
    })
  })
})
