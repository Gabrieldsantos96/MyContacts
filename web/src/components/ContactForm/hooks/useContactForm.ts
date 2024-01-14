import { useState, useImperativeHandle, MutableRefObject } from 'react'

import formatPhone from '@utils/formatters/formatPhone'
import { showToast } from '@utils/helpers/toastEventManager'
import { FormContactSchema } from './validatorSchema'
import { UseErrorsProps } from '@hooks/useErrors'
import Validators from '@lib/validators'
import { ContactEntity } from '@interfaces/Contact'

const defaultFormData = {
  name: '',
  email: '',
  phone: '',
  category_id: ''
}

export type UseContactFormRef = {
  setFieldsValues: (contact: ContactEntity) => void
  resetFields: () => void
}

type UseContactFormParams = Pick<UseErrorsProps, 'removeError' | 'setError'> & {
  formContactValidator: Validators<FormContactSchema>
  onSubmit: (contact: ContactEntity) => Promise<void>
  ref: MutableRefObject<UseContactFormRef>
}

type useContactFormProps = {
  onSubmitForm: (event: React.SyntheticEvent) => Promise<void>
  formData: ContactEntity
  onChangeForm: (key: string, value: string) => void
  isSubmitting: boolean
}

export function useContactForm({
  onSubmit,
  ref,
  removeError,
  setError,
  formContactValidator
}: UseContactFormParams): useContactFormProps {
  const [formData, setFormData] = useState(defaultFormData)
  const [isSubmitting, setIsSumitting] = useState(false)

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (contact: ContactEntity) => {
        setFormData({
          name: contact?.name ?? '',
          email: contact?.email ?? '',
          phone: contact?.phone ? formatPhone(contact.phone) : '',
          category_id: contact?.category_id ?? ''
        })
      },
      resetFields: () => setFormData(defaultFormData)
    }),
    []
  )

  function onChangeForm(key: string, value: string) {
    setFormData((s) => ({ ...s, [key]: value }))
    const validator = formContactValidator.fieldValidator(key, value)
    if (Array.isArray(validator)) {
      setError(validator, key)
    } else {
      removeError(key)
    }
  }

  async function onSubmitForm(event: React.SyntheticEvent) {
    event.preventDefault()

    let isValid = true

    Object.entries(formData).forEach(([key, value]) => {
      const validator = formContactValidator.fieldValidator(key, value)
      if (Array.isArray(validator)) {
        isValid = false
        setError(validator, key)
      } else {
        removeError(key)
      }
    })

    if (isValid) {
      setIsSumitting(true)
      await onSubmit(formData)
      setIsSumitting(false)
      return
    }

    showToast({
      type: 'danger',
      text: 'Formulário inválido!'
    })
  }

  return {
    formData,
    onSubmitForm,
    onChangeForm,
    isSubmitting
  }
}
