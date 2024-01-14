import { render, screen } from '@utils/test/test-ui'

import { RootLayout } from './RootLayout'

vitest.mock('react-router-dom', () => ({
  __esModule: true,
  Outlet: function Mock() {
    return <div data-testid="outlet" />
  }
}))

vitest.mock('@components/Header', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="header" />
  }
}))

describe('<RootLayout/>', () => {
  it('should render RootLayout', async () => {
    const { container } = render(<RootLayout />)

    expect(screen.getByTestId('header')).toBeInTheDocument()

    expect(screen.getByTestId('outlet')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
