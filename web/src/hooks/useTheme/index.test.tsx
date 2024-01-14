import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { themeEventManager } from '@utils/helpers/themeEventManager/themeEventManager'
import { toggleTheme } from '@utils/helpers/themeEventManager'
import { useTheme } from '.'

// Limpar o localStorage antes de cada teste
beforeEach(() => {
  localStorage.clear()
})

describe('useTheme', () => {
  it('should toggle when user clicks', async () => {
    render(<Component />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    act(() => {
      userEvent.click(screen.getByRole('button', { name: /toggle theme/i }))
    })

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    act(() => {
      userEvent.click(screen.getByRole('button', { name: /toggle theme/i }))
    })

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    await waitFor(() => {})
  })

  it('should load saved theme from localStorage', () => {
    localStorage.setItem('theme', 'dark')

    render(<Component />)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})

function Component() {
  useTheme({ themeEventManager })

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
