import animation from './animation'
import * as S from './styles'

import Danger from '@assets/images/svg/icons/x-circle.svg?react'
import Success from '@assets/images/svg/icons/check-circle.svg?react'
import Warning from '@assets/images/svg/icons/triangle.svg?react'
import { useToastMessage } from './useToastMessage'

export type MessageProps = {
  id: number
  text?: string
  type?: 'default' | 'success' | 'danger' | 'warning'
  duration?: number
}

export type ToastMessageProps = {
  message: MessageProps
  onRemoveMessage: (id: number) => void
}

const ToastMessage = ({ onRemoveMessage, message }: ToastMessageProps) => {
  const { handleRemoveToast } = useToastMessage({ onRemoveMessage, message })
  return (
    <S.Wrapper
      key={message.id}
      {...animation}
      type={message.type || 'default'}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {message.type === 'danger' && <Danger width="40" />}
      {message.type === 'success' && <Success width="40" />}
      {message.type === 'warning' && <Warning width="40" />}
      <strong>{message.text}</strong>
    </S.Wrapper>
  )
}

export default ToastMessage
