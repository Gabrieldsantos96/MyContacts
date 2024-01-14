import { renderHook, waitFor } from '@utils/test/test-ui'

import { useNewContact } from './useNewContact'
import { act } from 'react-dom/test-utils'
import { contactsMock } from '@test/mocks/contacts'

describe('useNewContact', () => {
  it('should render useNewContact and call reset fields if success', async () => {
    const { result } = renderHook(() => useNewContact())

    result.current.contactFormRef.current = {
      resetFields: vitest.fn(),
      setFieldsValues: vitest.fn()
    }

    const { id, ...rest } = contactsMock[0]

    await act(async () => {
      await result.current.handleSubmit(rest)
    })

    await waitFor(() => {
      expect(
        result.current.contactFormRef.current.resetFields
      ).toHaveBeenCalled()
    })
  })

  it('should render useNewContact and do not call reset fields if error', async () => {
    const { result } = renderHook(() => useNewContact())

    result.current.contactFormRef.current = {
      resetFields: vitest.fn(),
      setFieldsValues: vitest.fn()
    }

    const { id, ...rest } = contactsMock[1]

    await act(async () => {
      await result.current.handleSubmit(rest)
    })

    await waitFor(() => {
      expect(
        result.current.contactFormRef.current.resetFields
      ).not.toHaveBeenCalled()
    })
  })
})
