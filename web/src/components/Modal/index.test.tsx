import { render } from '@utils/test/test-ui'
import Modal from '.'
import * as useModalModule from './useModal'

describe('<Modal/>', () => {
  beforeEach(() => {
    vitest.resetModules()
  })

  it('should not render Modal when isVisible is false', () => {
    vitest.spyOn(useModalModule, 'useModal').mockReturnValue({
      toggle: vitest.fn(),
      isVisible: false
    })

    const { queryByText } = render(
      <Modal
        title="Test Modal"
        onConfirm={vitest.fn()}
        cancelLabel="Cancel"
        confirmLabel="Confirm"
      >
        <div>content</div>
      </Modal>
    )

    expect(queryByText('Test Modal')).not.toBeInTheDocument()
  })

  it('render Modal correctly when isVisible is true', () => {
    vitest.spyOn(useModalModule, 'useModal').mockReturnValue({
      toggle: vitest.fn(),
      isVisible: true
    })

    const { getByText } = render(
      <Modal
        title="Test Modal"
        onConfirm={vitest.fn()}
        cancelLabel="Cancel"
        confirmLabel="Confirm"
      >
        <div>content</div>
      </Modal>
    )

    expect(getByText('Test Modal')).toBeInTheDocument()
  })
})
