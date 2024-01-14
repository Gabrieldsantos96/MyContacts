import React from 'react'
import theme from '../src/assets/styles/theme'
import GlobalStyles from '../src/assets/styles/app'
import { ThemeProvider } from 'styled-components'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
