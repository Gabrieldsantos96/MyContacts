import styled, { css } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid #fff;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease-in-out;
    outline: 0;

    &:focus-within {
      box-shadow: ${`0 0 0.5rem ${theme.colors.primary.dark}`};
    }
  `}
`

export const Input = styled.input<{ $iconPosition: 'left' | 'right' }>`
  ${({ theme, $iconPosition }) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${$iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: ${$iconPosition === 'right' ? 'calc(100% - 2.2rem)' : '100%'};

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.primary} inset;
      filter: none;
      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray[900]};
    cursor: pointer;
  `}
`

export const Icon = styled.div<{ $iconPosition: 'left' | 'right' }>`
  ${({ theme, $iconPosition }) => css`
    display: flex;
    color: ${theme.colors.gray};
    order: ${$iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    height: 1.5rem;
    color: ${theme.colors.danger.main};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    opacity: 0;
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.danger.main};
      &:focus-within {
        box-shadow: ${`0 0 0.2rem ${theme.colors.danger.main}`};
      }
    }
    ${Icon},
    ${Label},
    ${Input} {
      color: ${theme.colors.danger.main};
    }

    ${Error} {
      opacity: 1;
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${InputWrapper},
    ${Icon} {
      cursor: unset;
      color: ${theme.colors.gray};
      background-color: ${theme.colors.gray[100]};
      border-color: ${theme.colors.gray[200]};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<{ $isError: boolean; $disabled: boolean }>`
  ${({ theme, $isError, $disabled }) => css`
    ${$isError && wrapperModifiers.error(theme)}
    ${$disabled && wrapperModifiers.disabled(theme)}
  `}
`
