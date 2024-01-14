import { ThemeProvider } from 'styled-components'
import { QueryProvider } from './lib/queryProvider'
import GlobalStyles from './assets/styles/app'
import { useTheme } from '@hooks/useTheme'
import mainTheme from '@assets/styles/theme'
import ToastContainer from '@components/Toast/ToastContainer'
import { themeEventManager } from '@utils/helpers/themeEventManager/themeEventManager'

const Providers = ({ children }: { children: React.ReactNode }) => {
  useTheme({ themeEventManager })
  return (
    <QueryProvider>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <ToastContainer />
        {children}
      </ThemeProvider>
    </QueryProvider>
  )
}

export { Providers }
