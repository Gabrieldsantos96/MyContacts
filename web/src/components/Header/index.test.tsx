import { render } from '@utils/test/test-ui'

import Header from '.'

describe('<Header />', () => {
  test('renders Header component with logo and toggle theme', () => {
    const { getByTestId } = render(<Header />)

    const logoElement = getByTestId('logo')
    expect(logoElement).toBeInTheDocument()
  })
})
