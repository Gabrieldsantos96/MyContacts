import { render, screen } from '@utils/test/test-ui'

import { Home } from '.'

vitest.mock('@components/ContactsList', () => ({
  __esModule: true,
  default: function Mock({ toggleOrderBy }) {
    return (
      <div data-testid="contacts-list">
        <button data-testid="toggle" onClick={toggleOrderBy} />
      </div>
    )
  }
}))

describe('<Home />', () => {
  it('should render Home', async () => {
    const { container } = render(<Home />)

    expect(screen.getByTestId('contacts-list')).toBeInTheDocument()

    const input = screen.getByPlaceholderText('Pesquisar contato...')
    expect(input).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
