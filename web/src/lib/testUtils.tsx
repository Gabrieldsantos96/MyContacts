import { ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from '../assets/styles/theme'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
