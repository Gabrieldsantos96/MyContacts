import { useState } from 'react'
import ContactsList from '@components/ContactsList'
import { useDebounce } from '@hooks/useDebounce'
import * as S from './styles'
import useFilterContacts from './hooks/useFilterContacts'
import { useContacts } from '@queryHooks/useContacts'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const { debouncedValue } = useDebounce({ value: searchTerm, delay: 500 })

  const [orderBy, setOrderBy] = useState<'asc' | 'desc'>('asc')

  function toggleOrderBy() {
    setOrderBy((s) => (s === 'asc' ? 'desc' : 'asc'))
  }

  const {
    data: contacts,
    isError,
    isLoading,
    refetch: refetchContacts
  } = useContacts(orderBy)

  const {
    dataIsEmpty,
    filteredContacts,
    noResultsForSearch,
    contactBeingDelete,
    setContactBeingDelete
  } = useFilterContacts({
    contacts,
    isError,
    isLoading,
    searchTerm,
    debouncedValue
  })
  return (
    <S.Container>
      <S.InputSearchContainer>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar contato..."
        />
      </S.InputSearchContainer>
      <ContactsList
        searchTerm={searchTerm}
        contactBeingDelete={contactBeingDelete}
        setContactBeingDelete={setContactBeingDelete}
        orderBy={orderBy}
        toggleOrderBy={toggleOrderBy}
        filteredContacts={filteredContacts}
        isLoading={isLoading}
        isError={isError}
        dataIsEmpty={dataIsEmpty}
        noResultsForSearch={noResultsForSearch}
        refetchContacts={refetchContacts}
      />
    </S.Container>
  )
}

export { Home }
