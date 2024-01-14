import { render } from '@utils/test/test-ui'

import ToastContainer from '.'
import theme from '@assets/styles/theme'

describe('<ToastContainer />', () => {
  it('should render toast container', () => {
    const { container } = render(<ToastContainer />)

    expect(container.firstChild).toHaveStyle({
      position: 'fixed',
      left: '50%',
      'z-index': 2,
      bottom: theme.spacings.xlarge,
      transform: 'translateX(-50%)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
