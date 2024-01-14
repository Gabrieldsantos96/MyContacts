import { AnimatePresence } from 'framer-motion'
import * as S from './styles'
import ToastMessage, { MessageProps } from '../ToastMessage'

type ToastListProps = {
  messages: MessageProps[]
  handleRemoveMessage: (id: number) => void
}

const ToastList = ({ messages, handleRemoveMessage }: ToastListProps) => (
  <S.Wrapper>
    <AnimatePresence>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </AnimatePresence>
  </S.Wrapper>
)

export default ToastList
