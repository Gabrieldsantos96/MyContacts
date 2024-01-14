import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      span {
        font-weight: ${theme.font.bold};
        color: ${theme.colors.primary.main};
      }

      svg {
        margin-right: ${theme.spacings.xxsmall};
        transform: rotate(-90deg);
      }
    }

    h1 {
      margin-top: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`
