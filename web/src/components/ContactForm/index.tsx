import { MutableRefObject, forwardRef } from 'react'
import Button from '../Button'
import * as S from './styles'
import TextField from '../TextField'
import Skeleton from './skeleton'
import useErrors from '../../hooks/useErrors'
import SelectDropdown from '../SelectDropdown'
import { UseContactFormRef, useContactForm } from './hooks/useContactForm'
import { formContactValidator } from './hooks/validatorSchema'
import { useCategories } from '@queryHooks/useCategories'
import { ContactEntity } from '@interfaces/Contact'
import formatPhone from '@utils/formatters/formatPhone'

type ContactFormParams = {
  buttonLabel: string
  onSubmit: (contact: ContactEntity) => Promise<void>
  isLoading?: boolean
  ref: MutableRefObject<UseContactFormRef>
}

const ContactForm = forwardRef(
  (
    { buttonLabel, onSubmit, isLoading }: ContactFormParams,
    ref: MutableRefObject<UseContactFormRef>
  ) => {
    const { isLoading: isLoadingCategories, data } = useCategories()

    const categories = data ?? []

    const { setError, removeError, getErrorMessageByFieldName, noErrors } =
      useErrors()

    const { formData, isSubmitting, onChangeForm, onSubmitForm } =
      useContactForm({
        onSubmit,
        ref,
        setError,
        removeError,
        formContactValidator
      })

    return (
      <>
        <Skeleton isLoading={isLoading} />
        {!isLoading && (
          <S.Form onSubmit={onSubmitForm} noValidate>
            <TextField
              aria-label="name"
              error={getErrorMessageByFieldName('name')}
              placeholder="Nome *"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeForm('name', e.target.value)
              }
              disabled={isSubmitting}
            />

            <TextField
              aria-label="email"
              type="email"
              error={getErrorMessageByFieldName('email')}
              placeholder="E-mail"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeForm('email', e.target.value)
              }
              disabled={isSubmitting}
            />

            <TextField
              aria-label="phone"
              error={getErrorMessageByFieldName('phone')}
              placeholder="Telefone"
              value={formData.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeForm('phone', formatPhone(e.target.value))
              }
              disabled={isSubmitting}
            />

            <SelectDropdown
              aria-label="category_id"
              error={getErrorMessageByFieldName('category_id')}
              defaultLabel="Sem categoria"
              value={formData.category_id}
              options={categories}
              isLoading={isLoadingCategories}
              disabled={isSubmitting || isLoadingCategories}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChangeForm('category_id', e.target.value)
              }
            />

            <Button
              aria-label="confirm"
              type="submit"
              disabled={!noErrors}
              isLoading={isSubmitting}
              fullWidth
            >
              {buttonLabel}
            </Button>
          </S.Form>
        )}
      </>
    )
  }
)

export default ContactForm
