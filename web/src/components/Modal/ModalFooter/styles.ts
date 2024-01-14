import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.medium};

    .btn-cancel {
      margin-right: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.gray[200]};
      background: transparent;
      border: 0;

      &[disabled] {
        cursor: default;
      }
    }
  `}
`
