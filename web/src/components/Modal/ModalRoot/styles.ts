import styled, { keyframes, css } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateY(-25px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    animation: ${slideIn} 0.3s;
    width: 100%;
    max-width: 45rem;
    padding: ${theme.spacings.small};

    background: #fff;

    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    border-radius: ${theme.border.radius};
  `}
`
