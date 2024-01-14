import { useCallback, useState } from 'react'

export function useToggle(defaultValue?: boolean) {
  const [value, setValue] = useState(!!defaultValue)

  const toggle = useCallback(() => setValue((x) => !x), [])

  return { value, toggle, setValue }
}
