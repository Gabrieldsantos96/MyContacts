import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@assets/styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'

// to avoid cache
const createTestQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false // turn off retries for testing
      }
    }
  })
  return queryClient
}

function customRender(ui: React.ReactElement, options = {}) {
  return render(
    <QueryClientProvider client={createTestQueryClient()}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </QueryClientProvider>,
    {
      wrapper: ({ children }) => children,
      ...options
    }
  )
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
