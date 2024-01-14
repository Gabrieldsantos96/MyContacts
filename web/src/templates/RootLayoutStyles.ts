import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.small};
  `}
`
