import { screen } from '@testing-library/dom'
import { createElementAndAppendToBody } from '.'

test('createElementAndAppendToBody appends element to body with the specified ID', () => {
  const containerId = 'wrapper-id'

  const wrapperElement = createElementAndAppendToBody(containerId)

  expect(wrapperElement).toBeInTheDocument()
  expect(wrapperElement).toHaveAttribute('id', containerId)

  const elementInBody = screen.getByTestId(containerId)
  expect(elementInBody).toBeInTheDocument()
  expect(elementInBody).toBe(wrapperElement)
})
