import { render, screen } from '@utils/test/test-ui'
import Skeleton from './skeleton'

test('Render skeleton if loading is true', () => {
  const { container } = render(<Skeleton isLoading={true} />)

  expect(container.childElementCount).toBe(1)
})

test('should not render skeleton if loading is false', () => {
  render(<Skeleton isLoading={false} />)

  expect(screen.queryByTestId('skeleton-text')).not.toBeInTheDocument()
  expect(screen.queryByTestId('skeleton-button')).not.toBeInTheDocument()
})
