import styled, { css } from 'styled-components'
import { Wrapper as SelectDropdownStyles } from '../SelectDropdown/styles'
import { Wrapper as ButtonStyles } from '../Button/styles'
import { Wrapper as TextFieldStyles } from '../TextField/styles'

export const Form = styled.form`
  ${({ theme }) => css`
    ${TextFieldStyles} + ${TextFieldStyles} {
      margin-top: ${theme.spacings.xxsmall};
    }
    ${SelectDropdownStyles} {
      margin-top: ${theme.spacings.xxsmall};
    }
    ${ButtonStyles} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`
