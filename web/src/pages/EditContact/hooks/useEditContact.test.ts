import { act, renderHook, waitFor } from '@utils/test/test-ui'
import { useEditContact } from './useEditContact'
import ContactsService from '@services/ContactsService'
import { contactsMock } from '@test/mocks/contacts'

let mockId = '1'

vitest.mock('react-router-dom', () => ({
  useNavigate: () => vitest.fn(),
  useParams: () => ({ id: mockId })
}))

describe('useEditContact', () => {
  it('should fetch and load contact data', async () => {
    const { result } = renderHook(() =>
      useEditContact({ ContactsService: ContactsService })
    )

    result.current.contactFormRef.current = {
      resetFields: vitest.fn(),
      setFieldsValues: vitest.fn()
    }

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(
        result.current.contactFormRef.current.setFieldsValues
      ).toHaveBeenCalled()
      expect(result.current.isLoading).toBe(false)
      expect(result.current.contactName).toBe(contactsMock[0].name)
    })
  })

  it('should fetch and get an error', async () => {
    mockId = '999'
    const { result } = renderHook(() =>
      useEditContact({ ContactsService: ContactsService })
    )

    result.current.contactFormRef.current = {
      resetFields: vitest.fn(),
      setFieldsValues: vitest.fn()
    }

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(
        result.current.contactFormRef.current.setFieldsValues
      ).not.toHaveBeenCalled()
    })
  })

  it('should call handle submit', async () => {
    mockId = '1'
    const { result } = renderHook(() =>
      useEditContact({ ContactsService: ContactsService })
    )

    await act(async () => {
      await result.current.handleSubmit({
        id: '1',
        name: 'Updated John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        category_id: '1'
      })
    })

    await waitFor(() => {
      expect(result.current.contactName).toBe(contactsMock[0].name)
    })
  })

  it('should call handle submit and get an error', async () => {
    mockId = '999'
    const { result } = renderHook(() =>
      useEditContact({ ContactsService: ContactsService })
    )

    act(() => {
      result.current.handleSubmit({
        id: mockId,
        name: 'Updated John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        category_id: '1'
      })
    })

    await waitFor(() => {
      expect(result.current.contactName).toBe('')
    })
  })
})
