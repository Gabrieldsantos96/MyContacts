import { render, screen } from '@utils/test/test-ui'
import Loader from '.'

vitest.mock('@components/Spinner', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="spinner" />
  }
}))

beforeAll(() => {
  const loaderRoot = document.createElement('div')
  loaderRoot.id = 'loader-root'
  document.body.appendChild(loaderRoot)
})

describe('Loader', () => {
  test('does not render anything when isLoading is false', () => {
    render(<Loader isLoading={false} />)
    const loader = screen.queryByTestId('spinner')
    expect(loader).not.toBeInTheDocument()
  })

  test('renders if isLoading is true', () => {
    render(<Loader isLoading={true} />)
    const loader = screen.getByTestId('spinner')
    expect(loader).toBeInTheDocument()
  })
})
