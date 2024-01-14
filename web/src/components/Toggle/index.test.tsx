import { render, screen, waitFor } from '@utils/test/test-ui'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'
import { act } from 'react-dom/test-utils'

describe('<Toggle/>', () => {
  it('should render with label', () => {
    const { container } = render(
      <Checkbox label="checkbox label" labelFor="check" />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = vitest.fn()

    render(<Checkbox label="Checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    act(() => {
      userEvent.click(screen.getByRole('checkbox'))
      userEvent.click(screen.getByRole('checkbox'))
    })

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(2)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should call onCheck with false if the Checkbox is already checked', async () => {
    const onCheck = vitest.fn()

    render(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
