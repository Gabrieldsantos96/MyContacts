import isEmailValid from '@utils/validators/isEmailValid'
import Validators from '@lib/validators'

const schemaObject = {
  email: [
    { type: 'isRequired', value: true, message: 'O e-mail é obrigatório' },
    {
      type: 'customValidate',
      value: isEmailValid,
      message: 'O e-mail é inválido'
    }
  ],
  name: [
    { type: 'isRequired', value: true, message: 'O nome é obrigatório' },
    {
      type: 'min',
      value: 10,
      message: 'O nome deve conter no mínimo 10 caracteres'
    }
  ],
  phone: [
    { type: 'isRequired', value: true, message: 'O telefone é obrigatório' },
    {
      type: 'max',
      value: 18,
      message: 'O telefone deve conter no máximo 18 caracteres'
    }
  ],
  category_id: [
    { type: 'isRequired', value: true, message: 'A categoria é obrigatória' }
  ]
}

export type FormContactSchema = typeof schemaObject

const formContactValidator = new Validators<FormContactSchema>(schemaObject)

export { formContactValidator }
