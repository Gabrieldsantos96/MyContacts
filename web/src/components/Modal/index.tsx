'use client'

import React, { forwardRef } from 'react'
import { useModal, ModalRefProps } from './useModal'
import { M } from './composition'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import { ModalTitleProps } from './ModalTitle'
import { ModalContentProps } from './ModalContent'
import { ModalFooterProps } from './ModalFooter'

/**
 *
 * @example
 *     <Modal
 *       title=""
 *       labelConfirm=""
 *       labelCancel=""
 *       ref={modalRef}>
 *       <Content />
 *     </Modal>
 *
 * @param   {ref} isRequired   if you want to control actions from parent component
 * @param   {title} isRequired   h2 displayed on the top
 * @param   {labelCancel} isRequired   button label cancel
 * @param   {labelConfirm} isRequired   button label confirm
 *
 */

type ExcludedProps = 'onClose'

export type ModalProps = ModalTitleProps &
  ModalContentProps &
  Omit<ModalFooterProps, ExcludedProps>

export type ModalRef = ModalRefProps | undefined

const Modal: React.ForwardRefRenderFunction<ModalRef, ModalProps> = (
  { children, title, isLoading, onConfirm, cancelLabel, confirmLabel, danger },
  ref
) => {
  const { isVisible, toggle } = useModal(ref, onConfirm!)
  const escapeFunction = isVisible ? toggle : null
  useEscapeKey(escapeFunction)

  if (!isVisible) {
    return null
  }
  return (
    <M.Root>
      <M.Title title={title} danger={danger} />
      <M.Content>{children}</M.Content>
      <M.Footer
        onClose={toggle}
        onConfirm={onConfirm}
        isLoading={isLoading}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
      />
    </M.Root>
  )
}

export default forwardRef(Modal)
