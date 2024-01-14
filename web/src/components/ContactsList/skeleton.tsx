import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
margin-top: ${theme.spacings.small};

.skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  .skeleton-title {
    width: 10%;
    height: 2rem;
  }

  .skeleton-text {
    width: 100%;
    height: 9.5rem;
    margin-top: ${theme.spacings.xsmall};
    border-radius: margin-top: ${theme.border.radius};
  }

`}
`

export default function Skeleton({ isLoading }) {
  if (!isLoading) {
    return null
  }
  return (
    <Container>
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" />
    </Container>
  )
}
