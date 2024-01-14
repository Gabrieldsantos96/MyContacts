import { render } from '@utils/test/test-ui'
import ModalTitle from '.'

describe('<ModalTitle/>', () => {
  it('should render ModalTitle with normal content', () => {
    const { getByText } = render(<ModalTitle title="Teste Modal" />)
    expect(getByText('Teste Modal')).toBeInTheDocument()
  })

  it('should render ModalTitle with danger color', () => {
    const { getByText } = render(<ModalTitle title="Teste Modal" danger />)
    expect(getByText('Teste Modal')).toHaveStyle({ color: '#FC5050' })
  })
})
