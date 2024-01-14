import {
  useEffect,
  useState,
  useRef,
  useCallback,
  MutableRefObject
} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { showToast } from '@utils/helpers/toastEventManager'
import { UseContactFormRef } from '@components/ContactForm/hooks/useContactForm'
import { ContactEntity } from '@interfaces/Contact'
import { ContactsService } from '@services/ContactsService'
import delay from '@utils/helpers/delay'

type UseEditContactProps = {
  isLoading: boolean
  contactName: string
  contactFormRef: MutableRefObject<UseContactFormRef>
  handleSubmit: (formData) => Promise<void>
}

export function useEditContact({
  ContactsService
}: {
  ContactsService: ContactsService
}): UseEditContactProps {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [contactName, setContactName] = useState('')

  const contactFormRef = useRef(null)

  const loadContact = useCallback(async () => {
    try {
      const { data: contact } = await ContactsService.getContactById(id)
      contactFormRef.current.setFieldsValues(contact)
      setIsLoading(false)
      setContactName(contact.name)
    } catch {
      navigate('/')
      showToast({
        type: 'danger',
        text: 'Contato não encontrado!'
      })
    }
  }, [id, navigate, ContactsService])

  useEffect(() => {
    loadContact()
  }, [id, navigate, ContactsService, loadContact])

  async function handleSubmit(formData: ContactEntity) {
    try {
      await delay(1000)
      const { data: contact } = await ContactsService.saveContact({
        ...(id && { id }),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category_id
      })
      setContactName(contact.name)

      showToast({
        type: 'success',
        text: 'Contato editado com sucesso!',
        duration: 3000
      })
    } catch {
      showToast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
        duration: 3000
      })
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit
  }
}
