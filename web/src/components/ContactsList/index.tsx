import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useDeleteContact } from '@queryHooks/useContacts'
import Button from '../Button'
import Arrow from '@assets/images/svg/icons/arrow.svg?react'
import Sad from '@assets/images/svg/sad.svg?react'
import EmptyBox from '@assets/images/svg/empty-box.svg?react'
import MagnifierQuestion from '@assets/images/svg/magnifier-question.svg?react'
import Edit from '@assets/images/svg/icons/edit.svg?react'
import Trash from '@assets/images/svg/icons/trash.svg?react'
import formatPhone from '@utils/formatters/formatPhone'
import Modal from '../Modal'
import Skeleton from './skeleton'
import { ModalRefProps } from '@components/Modal/useModal'
import * as S from './styles'
import { ContactEntity } from '@interfaces/Contact'

type ContactsListParams = {
  orderBy: 'asc' | 'desc'
  toggleOrderBy: () => void
  searchTerm: string
  refetchContacts: () => void
  filteredContacts: ContactEntity[]
  isLoading: boolean
  isError: boolean
  noResultsForSearch: boolean
  dataIsEmpty: boolean
  contactBeingDelete: ContactEntity
  setContactBeingDelete: React.Dispatch<React.SetStateAction<ContactEntity>>
}

export default function ContactsList({
  orderBy,
  toggleOrderBy,
  searchTerm,
  refetchContacts,
  filteredContacts = [],
  isLoading,
  isError,
  noResultsForSearch,
  dataIsEmpty,
  contactBeingDelete,
  setContactBeingDelete
}: ContactsListParams) {
  const { mutateAsync, isLoading: isLoadingDelete } = useDeleteContact()
  const modalRef = useRef<ModalRefProps>()

  return (
    <>
      <S.Header $justifyContent="space-between">
        <strong>{filteredContacts.length} contato(s)</strong>
        <Button minimal as="a" href="/new">
          Novo contato
        </Button>
      </S.Header>

      {!!filteredContacts.length && (
        <S.ListHeader $orderBy={orderBy}>
          <button type="button" onClick={toggleOrderBy}>
            <span>Nome</span>
            <Arrow />
          </button>
        </S.ListHeader>
      )}
      <Skeleton isLoading={isLoading} />
      {filteredContacts?.map((contact) => (
        <S.Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact?.category_name && <small>{contact.category_name}</small>}
            </div>
            {contact.email && <span>{contact.email}</span>}
            {!contact.email && <span>Sem e-mail</span>}
            {contact.phone && <span>{formatPhone(`${contact.phone}`)}</span>}
            {!contact.phone && <span>Sem número</span>}
          </div>

          <div className="actions">
            <Link to={`edit/${contact.id}`}>
              <Edit />
            </Link>
            <button
              type="button"
              onClick={() => {
                setContactBeingDelete(contact)
                modalRef.current.toggleModal()
              }}
            >
              <Trash />
            </button>
          </div>
        </S.Card>
      ))}

      {isError && (
        <S.ErrorContainer>
          <Sad width={125} />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={() => refetchContacts()}>
              Tentar novamente
            </Button>
          </div>
        </S.ErrorContainer>
      )}

      {dataIsEmpty && (
        <S.EmptyContainer>
          <EmptyBox />

          <p>
            Você ainda não tem nenhum contato cadastrado! Clique no botão{' '}
            <strong>”Novo contato”</strong> à cima para cadastrar o seu
            primeiro!
          </p>
        </S.EmptyContainer>
      )}

      {noResultsForSearch && (
        <S.SearchNotFoundContainer>
          <MagnifierQuestion />
          <span>
            Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong>
            .
          </span>
        </S.SearchNotFoundContainer>
      )}

      <Modal
        ref={modalRef}
        title={`Tem certeza que deseja remover o contato ”${contactBeingDelete?.name}”?`}
        danger
        cancelLabel="Cancelar"
        confirmLabel="Deletar"
        onConfirm={async () => {
          await mutateAsync({ id: contactBeingDelete.id })
          modalRef.current.toggleModal()
        }}
        isLoading={isLoadingDelete}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
    </>
  )
}
