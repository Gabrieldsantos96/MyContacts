import { render, fireEvent } from '@utils/test/test-ui'
import ModalFooter from '.'

test('<ModalFooter/>', () => {
  const onCloseMock = vitest.fn()
  const onConfirmMock = vitest.fn()

  const { getByText } = render(
    <ModalFooter
      onClose={onCloseMock}
      onConfirm={onConfirmMock}
      cancelLabel="Cancel"
      confirmLabel="Confirm"
    />
  )

  const cancelButton = getByText('Cancel')
  const confirmButton = getByText('Confirm')
  expect(cancelButton).toBeInTheDocument()
  expect(confirmButton).toBeInTheDocument()

  fireEvent.click(cancelButton)
  fireEvent.click(confirmButton)

  expect(onCloseMock).toHaveBeenCalled()
  expect(onConfirmMock).toHaveBeenCalled()
})

test('ModalFooter buttons should not render if func is null', () => {
  const { queryByText } = render(
    <ModalFooter cancelLabel="Cancel" confirmLabel="Confirm" />
  )

  const cancelButton = queryByText('Cancel')
  const confirmButton = queryByText('Confirm')
  expect(cancelButton).toBeNull()
  expect(confirmButton).toBeNull()
})
