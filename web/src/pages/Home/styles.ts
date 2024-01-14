import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    position: relative;
  `}
`

export const InputSearchContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    input {
      width: 100%;
      height: 5rem;
      border: none;
      border-radius: 2.4rem;
      background: #fff;
      box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
      outline: 0;
      padding: 0 ${theme.spacings.small};

      &::placeholder {
        color: #bcbcbc;
      }
    }
  `}
`
