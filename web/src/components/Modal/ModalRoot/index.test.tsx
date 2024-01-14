import { render } from '@utils/test/test-ui'
import '@testing-library/jest-dom'
import ModalRoot from '.'

test('<ModalRoot/>', () => {
  const { getByTestId } = render(
    <ModalRoot>
      <div data-testid="child-element">Child Element</div>
    </ModalRoot>
  )

  const modalContainer = document.getElementById('modal__container')
  expect(modalContainer).toBeInTheDocument()

  const childElement = getByTestId('child-element')
  expect(childElement).toBeInTheDocument()
})
