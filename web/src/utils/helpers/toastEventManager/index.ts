import { EventManagerDataTransfer } from '@components/Toast/ToastContainer/useToastContainer'
import { toastEventManager } from './toastEventManager'

export const showToast = ({
  type,
  text,
  duration
}: EventManagerDataTransfer) => {
  toastEventManager.emit('addToast', { type, text, duration })
}
