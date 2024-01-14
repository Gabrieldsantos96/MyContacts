import { act, render, screen, userEvent, waitFor } from '@utils/test/test-ui'
import ContactList from '.'
import { contactsMock } from '@test/mocks/contacts'
import * as UseContactsModule from '@queryHooks/useContacts'

vitest.mock('./skeleton.tsx', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="skeleton" />
  }
}))

vitest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => (
    <a data-testid="link" href={to}>
      {children}
    </a>
  )
}))

describe('<ContactList/>', () => {
  it('should render skeleton if isLoading is true', async () => {
    const { container } = render(
      <ContactList
        orderBy="asc"
        toggleOrderBy={vitest.fn()}
        searchTerm=""
        refetchContacts={vitest.fn()}
        filteredContacts={[]}
        isLoading={true}
        isError={false}
        noResultsForSearch={false}
        dataIsEmpty={false}
        contactBeingDelete={null}
        setContactBeingDelete={vitest.fn()}
      />
    )

    expect(screen.getByTestId('skeleton')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render ContactList with no data', async () => {
    render(
      <ContactList
        orderBy="asc"
        toggleOrderBy={vitest.fn()}
        searchTerm=""
        refetchContacts={vitest.fn()}
        filteredContacts={[]}
        isLoading={false}
        isError={false}
        noResultsForSearch={false}
        dataIsEmpty={true}
        contactBeingDelete={null}
        setContactBeingDelete={vitest.fn()}
      />
    )

    const element = screen.getByText(
      /Você ainda não tem nenhum contato cadastrado! Clique no botão/i
    )

    expect(element).toBeInTheDocument()
  })

  it('should render ContactList with no results for search', async () => {
    render(
      <ContactList
        orderBy="asc"
        toggleOrderBy={vitest.fn()}
        searchTerm=""
        refetchContacts={vitest.fn()}
        filteredContacts={[]}
        isLoading={false}
        isError={false}
        noResultsForSearch={true}
        dataIsEmpty={false}
        contactBeingDelete={null}
        setContactBeingDelete={vitest.fn()}
      />
    )
    const element = screen.getByText(/Nenhum resultado foi encontrado para/)
    expect(element).toBeInTheDocument()
  })

  it('should render ContactList with error', async () => {
    render(
      <ContactList
        orderBy="asc"
        toggleOrderBy={vitest.fn()}
        searchTerm=""
        refetchContacts={vitest.fn()}
        filteredContacts={[]}
        isLoading={true}
        isError={true}
        noResultsForSearch={false}
        dataIsEmpty={false}
        contactBeingDelete={null}
        setContactBeingDelete={vitest.fn()}
      />
    )

    const element = screen.getByText(
      /Ocorreu um erro ao obter os seus contatos!/i
    )
    expect(element).toBeInTheDocument()
  })

  it('should render ContactList with filtered contacts', async () => {
    render(
      <ContactList
        orderBy="asc"
        toggleOrderBy={vitest.fn()}
        searchTerm=""
        refetchContacts={vitest.fn()}
        filteredContacts={contactsMock}
        isLoading={false}
        isError={false}
        noResultsForSearch={false}
        dataIsEmpty={false}
        contactBeingDelete={null}
        setContactBeingDelete={vitest.fn()}
      />
    )
    const contact1 = screen.getByText(/Nome do Contato 1/i)
    const contact2 = screen.getByText(/Nome do Contato 2/i)

    expect(contact1).toBeInTheDocument()
    expect(contact2).toBeInTheDocument()
  })

  it('should render ContactList and call delete when click on trash icon and confirm on modal', async () => {
    const useDeleteContactMock = vitest.spyOn(
      UseContactsModule,
      'useDeleteContact'
    )

    useDeleteContactMock.mockReturnValue({
      mutateAsync: vitest.fn(),
      isLoading: false
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    const setContactBeingDelete = vitest.fn()
    const { getAllByRole } = render(
      <ContactList
        orderBy="desc"
        toggleOrderBy={vitest.fn()}
        searchTerm=""
        refetchContacts={vitest.fn()}
        filteredContacts={contactsMock}
        isLoading={false}
        isError={false}
        noResultsForSearch={false}
        dataIsEmpty={false}
        contactBeingDelete={contactsMock[0]}
        setContactBeingDelete={setContactBeingDelete}
      />
    )
    const deleteButtons = getAllByRole('button')

    act(() => {
      userEvent.click(deleteButtons[1])
    })

    await waitFor(() => {
      expect(setContactBeingDelete).toHaveBeenCalled()
      expect(setContactBeingDelete).toHaveBeenCalledWith(contactsMock[0])
    })

    const deleteModalButton = screen.getByRole('button', { name: /deletar/i })

    act(() => {
      userEvent.click(deleteModalButton)
    })

    await waitFor(() => {
      expect(
        useDeleteContactMock.mock.results[0].value.mutateAsync
      ).toHaveBeenCalled()
      expect(
        useDeleteContactMock.mock.results[0].value.mutateAsync
      ).toHaveBeenCalledWith({ id: contactsMock[0].id })
    })
  })
})
