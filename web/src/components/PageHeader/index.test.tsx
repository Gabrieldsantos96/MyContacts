import { render } from '@utils/test/test-ui'

import PageHeader from '.'

vitest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => (
    <a data-testid="link" href={to}>
      {children}
    </a>
  )
}))

describe('<PageHeader/>', () => {
  test('should render PageHeader', () => {
    const { getByText } = render(<PageHeader title="title" />)

    const pageHeader = getByText('title')

    expect(pageHeader).toBeInTheDocument()
  })
})
