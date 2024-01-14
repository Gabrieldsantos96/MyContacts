import styled, { css } from 'styled-components'
import { StyledSpinner as SpinnerStyles } from '../Spinner/styles'

export const Error = styled.p`
  ${({ theme }) => css`
    height: 1.5rem;
    color: ${theme.colors.danger.main};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    opacity: 0;
  `}
`

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;
    height: 5.2rem;

    padding: 0 ${theme.spacings.xsmall};

    background: #fff;

    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    border-radius: ${theme.border.radius};
    border: 2px solid #fff;
    outline: 0;

    font-size: ${theme.font.sizes.medium};

    transition: border-color 0.3s ease-in-out;

    appearance: none;

    &:focus {
      box-shadow: ${`0 0 0.5rem ${theme.colors.primary.dark}`};
    }

    &[disabled] {
      cursor: not-allowed;
      background-color: ${theme.colors.gray[100]};
      border-color: ${theme.colors.gray[200]};
      opacity: 1;
    }
  `}
`

export const wrapperModifiers = {
  error: (theme) => css`
    ${Error} {
      opacity: 1;
    }
    ${Select} {
      border-color: ${theme.colors.danger.main};
      :focus {
        box-shadow: ${`0 0 0.2rem ${theme.colors.danger.main}`};
      }
    }
  `
}

export const Wrapper = styled.div<{ $isError: boolean }>`
  ${({ theme, $isError }) => css`
    & + & {
      margin-top: ${theme.spacings.small};
    }
    ${$isError && wrapperModifiers.error(theme)}
  `}
`

export const Item = styled.div`
  position: relative;

  ${SpinnerStyles} {
    position: absolute;
    top: 1.8rem;
    right: 1.6rem;
  }
`
