import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: ${theme.spacings.xlarge};
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
  `}
`
