import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`
