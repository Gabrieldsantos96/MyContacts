import { screen, fireEvent } from '@testing-library/react'
import { render } from '@utils/test/test-ui'
import '@testing-library/jest-dom'
import ToastMessage, { ToastMessageProps } from '.'
import theme from '@assets/styles/theme'

const mockOnRemoveMessage = vitest.fn()

const mockMessage: ToastMessageProps['message'] = {
  id: 1,
  text: 'Test Message',
  type: 'default',
  duration: 5000
}

const setup = (message: ToastMessageProps['message'] = mockMessage) => {
  return render(
    <ToastMessage onRemoveMessage={mockOnRemoveMessage} message={message} />
  )
}

describe('ToastMessage', () => {
  afterEach(() => {
    vitest.clearAllMocks()
  })

  it('renders ToastMessage correctly', () => {
    setup()
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  it('calls onRemoveMessage when clicked', () => {
    setup()
    fireEvent.click(screen.getByRole('button'))
    expect(mockOnRemoveMessage).toHaveBeenCalledWith(1)
  })

  it('should render default styles', () => {
    const { container } = setup()
    expect(container.firstChild).toHaveStyle(`
      color: #fff;
      box-shadow: 0 2rem 2rem -1.6rem rgba(0, 0, 0, 0.25);
      background: ${theme.colors.primary.main};
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      border-radius: ${theme.border.radius};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `)
  })
  it('should render warning styles', () => {
    const { container } = setup({ ...mockMessage, type: 'warning' })
    expect(container.firstChild).toHaveStyle(`
    background: ${theme.colors.warning.main};
    `)
  })
  it('should render sucess styles', () => {
    const { container } = setup({ ...mockMessage, type: 'success' })
    expect(container.firstChild).toHaveStyle(`
    background: ${theme.colors.success.main};
    `)
  })
  it('should render danger styles', () => {
    const { container } = setup({ ...mockMessage, type: 'danger' })
    expect(container.firstChild).toHaveStyle(`
    background: ${theme.colors.danger.main};
    `)
  })
})
