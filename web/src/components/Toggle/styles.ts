import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

type InputProps = {
  $position: 'left' | 'right'
}

export const Input = styled.input<InputProps>`
  ${({ theme, $position }) => css`
    margin-left: ${theme.spacings.xxsmall};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 6rem;
    height: 2.5rem;
    background-color: var(--inverted-background-color);
    border-radius: ${theme.border.radius};
    transition: background-color ${theme.transition.default};
    position: relative;
    outline: none;

    &:before {
      content: '';
      height: 1em;
      width: 1em;
      border-radius: 1em;
      background-color: var(--inverted-text-color);
      position: absolute;
      left: ${$position === 'left' ? '0.2rem' : '4.2rem'};
      transition: left 0.2s linear;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    color: var(--text-color);
    line-height: 1.8rem;
  `}
`
