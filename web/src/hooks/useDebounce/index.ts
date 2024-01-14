import { useEffect, useState } from 'react'

type DebounceProps<T> = {
  value: T
  delay?: number
}

export function useDebounce<T>({ value, delay }: DebounceProps<T>) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return { debouncedValue }
}
