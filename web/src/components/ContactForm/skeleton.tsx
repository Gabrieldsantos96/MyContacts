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

  .skeleton-text {
    width: 100%;
    height: 5.3rem;
    margin-top: ${theme.spacings.small};
    border-radius: margin-top: ${theme.border.radius};
  }

  .skeleton-button {
    width: 100%;
    height: 4rem;
    margin-top: ${theme.spacings.medium};
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
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-button" />
    </Container>
  )
}
