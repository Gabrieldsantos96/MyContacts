/* eslint-disable @typescript-eslint/no-var-requires */
import { render, screen } from '@utils/test/test-ui'
import ReactPortal from '.'

describe('ReactPortal', () => {
  test('does not render anything if wrapperElement is null', () => {
    render(
      <ReactPortal containerId="test-container">
        <div data-testid="portal-content">Portal Content</div>
      </ReactPortal>
    )
    const portalContent = screen.queryByTestId('react-portal-wrapper')
    expect(portalContent).not.toBeInTheDocument()
  })
})
