import PageHeader from '@components/PageHeader'
import ContactForm from '@components/ContactForm'
import ContactsService from '@services/ContactsService'
import { useEditContact } from './hooks/useEditContact'

function EditContact() {
  const { contactFormRef, contactName, handleSubmit, isLoading } =
    useEditContact({ ContactsService })
  return (
    <>
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        isLoading={isLoading}
        ref={contactFormRef}
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
      />
    </>
  )
}

export { EditContact }
