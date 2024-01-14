// formatPhone.test.js

import formatPhone from './formatPhone'

describe('formatPhone', () => {
  it('should format a phone number with parentheses and dash', () => {
    const phoneNumber = '1234567890'
    const formattedNumber = formatPhone(phoneNumber)
    expect(formattedNumber).toBe('(12) 3456-7890')
  })
})
