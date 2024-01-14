import { render, screen } from '@utils/test/test-ui'

import { EditContact } from '.'

vitest.mock('@components/PageHeader', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="page-header" />
  }
}))

vitest.mock('@components/ContactForm', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="contact-form" />
  }
}))

vitest.mock('react-router-dom', () => ({
  useNavigate: () => vitest.fn(),
  useParams: () => ({ id: '1' })
}))

describe('<EditContact />', () => {
  it('should render Edit Contact', async () => {
    const { container } = render(<EditContact />)

    expect(screen.getByTestId('page-header')).toBeInTheDocument()

    expect(screen.getByTestId('contact-form')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
