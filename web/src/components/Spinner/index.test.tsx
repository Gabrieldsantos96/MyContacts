import { render } from '@utils/test/test-ui'

import Spinner from '.'

describe('<Spinner />', () => {
  test('should render spinner', () => {
    const { container } = render(<Spinner data-testid="spinner" />)

    expect(container.firstChild).toHaveStyle({ 'font-size': '32px' })
  })
})
