import styled, { DefaultTheme, css } from 'styled-components'
import { motion } from 'framer-motion'

const wrapperModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary.main};
  `,
  danger: (theme: DefaultTheme) => css`
    background: ${theme.colors.danger.main};
  `,
  success: (theme: DefaultTheme) => css`
    background: ${theme.colors.success.main};
  `,
  warning: (theme: DefaultTheme) => css`
    background: ${theme.colors.warning.main};
  `
}

type WrapperProps = {
  type: 'default' | 'success' | 'danger' | 'warning'
}

export const Wrapper = styled(motion.div)<WrapperProps>`
  ${({ theme, type }) => css`
    color: #fff;
    box-shadow: 0 2rem 2rem -1.6rem rgba(0, 0, 0, 0.25);

    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-radius: ${theme.border.radius};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    & + & {
      margin-top: ${theme.spacings.xxsmall};
    }

    strong {
      white-space: nowrap;
      margin-left: ${theme.spacings.xxsmall};
    }

    ${wrapperModifiers[type](theme)}
  `}
`
