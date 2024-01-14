import isEmailValid from '@utils/validators/isEmailValid'
import Validators from './validators'

describe('Validators', () => {
  const schema = {
    username: [
      { type: 'isRequired', message: 'Username is required' },
      {
        type: 'min',
        value: 3,
        message: 'Username must have at least 3 characters'
      }
    ],
    email: [
      {
        type: 'customValidate',
        value: isEmailValid,
        message: 'Email is invalid'
      }
    ],
    phone: [
      {
        type: 'max',
        value: 5,
        message: 'Phone must have max 5 characters'
      }
    ]
  }

  it('should validate fields correctly', () => {
    const validators = new Validators(schema)

    // Validating a field with missing value
    const errors1 = validators.fieldValidator('username', '')
    expect(errors1).toEqual([
      { field: 'username', message: 'Username is required' }
    ])

    // Validating a field with a value that doesn't meet the "min" requirement
    const errors2 = validators.fieldValidator('username', 'ab')
    expect(errors2).toEqual([
      { field: 'username', message: 'Username must have at least 3 characters' }
    ])

    // Validating a field with an invalid email value
    const errors4 = validators.fieldValidator('email', 'invalid-email')
    expect(errors4).toEqual([{ field: 'email', message: 'Email is invalid' }])

    // Validating a field with an phone number with over 5 caracteres
    const errors5 = validators.fieldValidator('phone', '123456')
    expect(errors5).toEqual([
      { field: 'phone', message: 'Phone must have max 5 characters' }
    ])

    // should return undefined cause there is nothing for field none in schema
    const errors6 = validators.fieldValidator('none', '123456')
    expect(errors6).toEqual(undefined)
  })
})
