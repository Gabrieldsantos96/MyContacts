import Button from '@components/Button'
import * as S from './styles'

export type ModalFooterProps = {
  confirmLabel: string
  cancelLabel: string
  isLoading?: boolean
  onClose?: () => void
  onConfirm?: () => Promise<void>
}

const ModalFooter = ({
  isLoading = false,
  onClose,
  onConfirm,
  cancelLabel,
  confirmLabel
}: ModalFooterProps) => {
  if (!!onClose || !!onConfirm) {
    return (
      <S.Wrapper>
        <Button minimal onClick={onClose}>
          {cancelLabel}
        </Button>
        <Button
          isLoading={isLoading}
          danger
          disabled={isLoading}
          onClick={onConfirm}
          aria-disabled={isLoading}
        >
          {confirmLabel}
        </Button>
      </S.Wrapper>
    )
  }
}

export default ModalFooter
