/* eslint-disable react-hooks/exhaustive-deps */
import { ContactEntity } from '@interfaces/Contact'
import { useMemo, useState } from 'react'

type UseFilterContactsParams = {
  searchTerm: string
  debouncedValue: string
  contacts: ContactEntity[]
  isLoading: boolean
  isError: boolean
}

type UseFilterContactsProps = {
  filteredContacts: ContactEntity[]
  dataIsEmpty: boolean
  noResultsForSearch: boolean
  contactBeingDelete: ContactEntity
  setContactBeingDelete: React.Dispatch<React.SetStateAction<ContactEntity>>
}

export default function useFilterContacts({
  searchTerm,
  debouncedValue,
  contacts = [],
  isLoading,
  isError
}: UseFilterContactsParams): UseFilterContactsProps {
  const [contactBeingDelete, setContactBeingDelete] = useState(null)

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [contacts, debouncedValue]
  )

  const dataIsEmpty = useMemo(
    () => !isError && !contacts.length && !isLoading,
    [isError, contacts, isLoading]
  )

  const noResultsForSearch = useMemo(
    () => !isError && !!contacts.length && !filteredContacts.length,
    [isError, contacts, filteredContacts]
  )

  return {
    filteredContacts,
    dataIsEmpty,
    noResultsForSearch,
    contactBeingDelete,
    setContactBeingDelete
  }
}
