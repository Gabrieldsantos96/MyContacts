import { useState } from 'react'

export type ErrorProps = { field: string; message: string }

export type UseErrorsProps = {
  setError: (errorsToAdd: ErrorProps[], fieldName: string) => void
  removeError: (fieldName: string) => void
  getErrorMessageByFieldName: (fieldName: string) => string
  errors: ErrorProps[]
  noErrors: boolean
}

export default function useErrors(): UseErrorsProps {
  const [errors, setErrors] = useState<ErrorProps[]>([])

  const noErrors = !errors.length

  function setError(errorsToAdd: ErrorProps[], fieldName: string) {
    setErrors((s) =>
      s.filter((err) => err.field !== fieldName).concat(errorsToAdd)
    )
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    )
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error) => error.field === fieldName)?.message
  }

  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors,
    noErrors
  }
}
