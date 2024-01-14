import { useRef } from 'react'
import ContactsService from '@services/ContactsService'
import { showToast } from '@utils/helpers/toastEventManager'
import delay from '@utils/helpers/delay'

export function useNewContact() {
  const contactFormRef = useRef(null)

  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category_id
      }
      await delay(1000)
      await ContactsService.saveContact(contact)

      contactFormRef.current.resetFields()

      showToast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 3000
      })
    } catch {
      showToast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!'
      })
    }
  }

  return {
    handleSubmit,
    contactFormRef
  }
}
