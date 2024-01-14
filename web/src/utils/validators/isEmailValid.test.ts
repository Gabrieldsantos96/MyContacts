import isEmailValid from './isEmailValid'

describe('isEmailValid', () => {
  it('should return true for a valid email', () => {
    const validEmails = [
      'test@example.com',
      'user@domain.co',
      'john.doe123@mail-provider.org'
      // Add more valid emails as needed
    ]

    validEmails.forEach((email) => {
      expect(isEmailValid(email)).toBe(true)
    })
  })

  it('should return false for an invalid email', () => {
    const invalidEmails = [
      'invalid.email@com',
      'user@domain', // Missing top-level domain
      'john@doe@domain.com' // Multiple @ symbols
      // Add more invalid emails as needed
    ]

    invalidEmails.forEach((email) => {
      expect(isEmailValid(email)).toBe(false)
    })
  })
})
