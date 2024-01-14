import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${() => css`
    display: flex;
    justify-content: flex-start;
  `}
`

export const Title = styled.h1<{ $danger: boolean }>`
  ${({ theme, $danger }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${$danger ? theme.colors.danger.main : theme.colors.gray[900]};
  `}
`
