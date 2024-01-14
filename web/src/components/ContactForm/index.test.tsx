import { act, render, screen, userEvent, waitFor } from '@utils/test/test-ui'
import ContactForm from '.'
import formatPhone from '@utils/formatters/formatPhone'

describe('<ContactForm/>', () => {
  it('should render ContactForm', () => {
    render(
      <ContactForm
        buttonLabel="buttonLabel"
        onSubmit={vitest.fn()}
        isLoading={false}
        ref={{ current: null }}
      />
    )

    const inputName = screen.getByRole('textbox', { name: /name/i })
    const inputEmail = screen.getByRole('textbox', { name: /email/i })
    const inputPhone = screen.getByRole('textbox', { name: /phone/i })
    const selectCategory = screen.getByRole('combobox', {
      name: /category_id/i
    })
    const buttonSubmit = screen.getByRole('button', { name: /confirm/i })

    expect(inputName).toBeVisible()
    expect(inputEmail).toBeVisible()
    expect(inputPhone).toBeVisible()
    expect(selectCategory).toBeVisible()
    expect(buttonSubmit).toBeVisible()
  })

  it('render ContactForm and try to submit with a invalid form', async () => {
    render(
      <ContactForm
        buttonLabel="buttonLabel"
        onSubmit={vitest.fn()}
        isLoading={false}
        ref={{ current: null }}
      />
    )

    const buttonSubmit = screen.getByRole('button', { name: /confirm/i })

    expect(buttonSubmit).toBeVisible()

    act(() => {
      userEvent.click(buttonSubmit)
    })

    await waitFor(() => {
      expect(screen.queryByText('O nome é obrigatório')).toBeInTheDocument()
      expect(screen.queryByText('O e-mail é obrigatório')).toBeInTheDocument()
      expect(screen.queryByText('O telefone é obrigatório')).toBeInTheDocument()
      expect(
        screen.queryByText('A categoria é obrigatória')
      ).toBeInTheDocument()
    })
  })

  it('render ContactForm component and type valid data and submit', async () => {
    const onSubmit = vitest.fn()
    render(
      <ContactForm
        buttonLabel="buttonLabel"
        onSubmit={onSubmit}
        isLoading={false}
        ref={{ current: null }}
      />
    )

    const inputName = screen.getByRole('textbox', { name: /name/i })
    const inputEmail = screen.getByRole('textbox', { name: /email/i })
    const inputPhone = screen.getByRole('textbox', { name: /phone/i })
    const selectCategory = screen.getByRole('combobox', {
      name: /category_id/i
    })
    const buttonSubmit = screen.getByRole('button', { name: /confirm/i })

    // wait for async categories before continue and select an option
    await waitFor(() => {
      expect(
        screen.getAllByRole('option', { name: /categoria/i })
      ).toHaveLength(4)
    })

    const mockObject = {
      name: 'Junior Example',
      email: 'juniorexample@email.com',
      phone: '(35) 99196-9000',
      category_id: '1'
    }
    await act(async () => {
      await userEvent.type(inputName, mockObject.name)
      await userEvent.type(inputEmail, mockObject.email)
      await userEvent.type(inputPhone, mockObject.phone)
      await userEvent.selectOptions(selectCategory, mockObject.category_id)
    })

    waitFor(() => {
      expect(inputName).toHaveValue(mockObject.name)
      expect(inputEmail).toHaveValue(mockObject.email)
      expect(inputPhone).toHaveValue(mockObject.phone)
      expect(selectCategory).toHaveValue(mockObject.category_id)
      expect(screen.queryByText('O nome é obrigatório')).not.toBeInTheDocument()
      expect(
        screen.queryByText('O e-mail é obrigatório')
      ).not.toBeInTheDocument()
      expect(
        screen.queryByText('O telefone é obrigatório')
      ).not.toBeInTheDocument()
      expect(
        screen.queryByText('O telefone é obrigatório')
      ).not.toBeInTheDocument()
      expect(
        screen.queryByText('A categoria é obrigatória')
      ).not.toBeInTheDocument()
    })

    act(() => {
      userEvent.click(buttonSubmit)
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
      expect(onSubmit).toHaveBeenCalledWith(mockObject)
    })
  })
})
