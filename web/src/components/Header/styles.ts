import styled from 'styled-components'
import { Wrapper as ToggleStyles } from '@components/Toggle/styles'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-top: 6.4rem;
  margin-bottom: 4.8rem;

  ${ToggleStyles} {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`
