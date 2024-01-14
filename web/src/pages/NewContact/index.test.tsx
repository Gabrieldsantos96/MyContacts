import { render, screen } from '@utils/test/test-ui'

import { NewContact } from '.'

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

describe('<New Contact />', () => {
  it('should render New Contact', async () => {
    const { container } = render(<NewContact />)

    expect(screen.getByTestId('page-header')).toBeInTheDocument()

    expect(screen.getByTestId('contact-form')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
