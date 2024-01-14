import { useToggle } from '@hooks/useToggle'
import { ForwardedRef } from 'react'
import { useImperativeHandle } from 'react'
import { ModalRef } from '.'

export type ModalRefProps = {
  toggleModal: () => void
  onSubmit: () => void
}

export function useModal(ref: ForwardedRef<ModalRef>, onConfirm: () => void) {
  const { toggle, value } = useToggle()

  useImperativeHandle(
    ref,
    () => ({
      toggleModal: () => toggle(),
      onSubmit: () => onConfirm()
    }),
    [toggle, onConfirm]
  )

  return {
    isVisible: value,
    toggle
  }
}
