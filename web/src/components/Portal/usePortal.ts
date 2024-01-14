import { useLayoutEffect, useState } from 'react'
import { createElementAndAppendToBody } from '@utils/helpers/createElementAndAppendToBody'

export function usePortal(containerId = 'react-portal-wrapper') {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(containerId)

    if (!element) {
      element = createElementAndAppendToBody(containerId)
    }
    setWrapperElement(element)
  }, [containerId])

  return {
    wrapperElement
  }
}
