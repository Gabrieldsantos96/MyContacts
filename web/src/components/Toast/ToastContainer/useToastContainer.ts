import { useCallback, useState, useEffect } from 'react'
import { MessageProps } from '../ToastMessage'
import { IEventManager } from '@lib/eventManager'

export type EventManagerDataTransfer = Omit<MessageProps, 'id'>

export function useToastContainer({
  toastEventManager
}: {
  toastEventManager: IEventManager<EventManagerDataTransfer>
}) {
  const [messages, setMessages] = useState<MessageProps[]>([])

  function handleAddToast({ type, text, duration }: EventManagerDataTransfer) {
    setMessages((prevState: MessageProps[]) => [
      ...prevState,
      {
        id: Math.random(),
        type,
        text,
        duration
      }
    ])
  }

  useEffect(() => {
    toastEventManager.on('addToast', handleAddToast)

    return () => {
      toastEventManager.removeListener('addToast', handleAddToast)
    }
  }, [toastEventManager])

  const handleRemoveMessage = useCallback((id: number) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id))
  }, [])

  return {
    messages,
    handleRemoveMessage
  }
}
