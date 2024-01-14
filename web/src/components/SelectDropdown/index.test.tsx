import { render } from '@utils/test/test-ui'
import SelectDropdown from '.'

vitest.mock('@components/Spinner', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="spinner" />
  }
}))

describe('<SelectDropdown/>', () => {
  test('renders SelectDropdown without errors', () => {
    const { container } = render(
      <SelectDropdown error="" isLoading={false} options={[]} />
    )
    expect(container).toBeInTheDocument()
  })

  test('renders options and default label correctly', () => {
    const options = [
      { id: '1', name: 'Option 1' },
      { id: '2', name: 'Option 2' }
    ]
    const { getByText } = render(
      <SelectDropdown
        error=""
        isLoading={false}
        options={options}
        defaultLabel="defaultLabel"
      />
    )

    expect(getByText('defaultLabel')).toBeInTheDocument()

    options.forEach((option) => {
      expect(getByText(option.name)).toBeInTheDocument()
    })
  })

  test('Show spinner during loading options', () => {
    const { getByTestId } = render(
      <SelectDropdown error="" isLoading={true} options={[]} />
    )
    expect(getByTestId('spinner')).toBeInTheDocument()
  })

  test('Show error message correctly', () => {
    const errorMessage = 'Error selecting option'
    const { getByText } = render(
      <SelectDropdown error={errorMessage} isLoading={false} options={[]} />
    )
    expect(getByText(errorMessage)).toBeInTheDocument()
  })

  test('Show error message correctly', () => {
    const errorMessage = 'Error selecting option'
    const { getByText } = render(
      <SelectDropdown error={errorMessage} isLoading={false} options={[]} />
    )
    const errorSpan = getByText(errorMessage)
    expect(errorSpan).toBeInTheDocument()
    expect(errorSpan).toHaveStyle({ color: '#FC5050' })
  })
})
