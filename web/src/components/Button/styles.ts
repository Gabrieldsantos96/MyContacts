import styled, { DefaultTheme, css } from 'styled-components'
import { darken } from 'polished'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary.main};
    border: 1px solid ${darken(0.1, theme.colors.primary.main)};

    &:hover {
      color: #fff;
    }
  `,
  danger: (theme: DefaultTheme) => css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `
}

type WrapperProps = {
  $hasIcon: boolean
  $size?: string
  $fullWidth?: boolean
  $minimal?: boolean
  $danger?: boolean
  $disabled?: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, $size, $danger, $hasIcon, $minimal, $fullWidth }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary.main};
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    color: #fff;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    transition: ${theme.transition.default};

    &[disabled] {
      background: #ccc !important;
      cursor: not-allowed;
      filter: saturate(30%);
    }

    &:hover {
      background: ${theme.colors.primary.light};
    }

    &:active {
      background: ${theme.colors.primary.dark};
    }

    ${!!$size && wrapperModifiers[$size](theme)};
    ${!!$fullWidth && wrapperModifiers.fullWidth()};
    ${!!$hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!$minimal && wrapperModifiers.minimal(theme)};
    ${!!$danger && wrapperModifiers.danger(theme)};
  `}
`
