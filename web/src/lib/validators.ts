/* eslint-disable @typescript-eslint/no-explicit-any */
type ErrorProps = {
  field: string
  message: string
}

class Validators<T> {
  schemaValidator

  constructor(schema: T) {
    this.schemaValidator = schema
  }

  fieldValidator(f: string, value: any) {
    const validationRules = this.schemaValidator[f as any]
    const hasError: Array<ErrorProps> = []

    if (!Array.isArray(validationRules)) {
      return
    }

    validationRules.forEach((validation) => {
      switch (validation.type) {
        case 'isRequired':
          if (!value) {
            hasError.push({ field: f, message: validation.message })
          }
          break

        case 'min':
          if (value && value.length < validation.value) {
            hasError.push({ field: f, message: validation.message })
          }
          break

        case 'max':
          if (value && value.length > validation.value) {
            hasError.push({ field: f, message: validation.message })
          }
          break

        case 'customValidate':
          if (!validation.value(value)) {
            hasError.push({ field: f, message: validation.message })
          }
          break
      }
    })
    return hasError.length && hasError
  }
}

export default Validators
