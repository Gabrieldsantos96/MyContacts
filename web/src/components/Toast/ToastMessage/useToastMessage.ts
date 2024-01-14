import { useEffect } from 'react'
import { ToastMessageProps } from './index'

export function useToastMessage({
  onRemoveMessage,
  message
}: ToastMessageProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id)
    }, message.duration || 7000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [message, onRemoveMessage])

  function handleRemoveToast() {
    onRemoveMessage(message.id)
  }
  return {
    handleRemoveToast
  }
}
