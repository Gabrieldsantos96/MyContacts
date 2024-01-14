import styled, { css } from 'styled-components'

export const Header = styled.header<{ $justifyContent: string }>`
  ${({ theme, $justifyContent }) => css`
    display: flex;
    justify-content: ${$justifyContent};
    border-bottom: 0.2rem solid ${theme.colors.gray[100]};
    padding-bottom: ${theme.spacings.xsmall};
    align-items: center;
    margin-top: ${theme.spacings.medium};

    strong {
      font-size: calc(${theme.font.sizes.xlarge} * 1.2);
    }

    a {
      font-weight: bold;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      color: ${theme.colors.primary.main};
      border: 0.2rem solid ${theme.colors.primary.main};
      border-radius: ${theme.border.radius};
      text-decoration: none;
      transition: all 0.2s ease-in;

      &:hover {
        background: ${theme.colors.primary.main};
        color: #fff;
      }
    }
  `}
`

export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};

    display: flex;
    justify-content: center;
    align-items: center;

    .details {
      margin-left: ${theme.spacings.small};

      strong {
        display: block;
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors.danger.main};
        margin-bottom: ${theme.spacings.xxsmall};
      }
    }
  `}
`

export const EmptyContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      margin-top: ${theme.spacings.xxsmall};
      color: ${theme.colors.gray[200]};
      text-align: center;

      strong {
        color: ${theme.colors.primary.main};
      }
    }
  `}
`

export const SearchNotFoundContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};

    display: flex;
    align-items: flex-start;

    span {
      margin-left: ${theme.spacings.small};
      word-break: break-word;
      color: ${theme.colors.gray[200]};
    }
  `}
`

export const ListHeader = styled.header<{ $orderBy: string }>`
  ${({ theme, $orderBy }) => css`
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xxsmall};

    button {
      display: flex;
      align-items: center;
      border: none;
      background: transparent;

      span {
        font-weight: bold;
        margin-right: ${theme.spacings.xxsmall};
        color: ${theme.colors.primary.main};
      }

      svg {
        transform: ${$orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform 0.2s ease-in;
      }
    }
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.xsmall};
    background: #fff;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    border-radius: ${theme.border.radius};

    & + & {
      margin-top: ${theme.spacings.xsmall};
    }

    &:last-child {
      margin-bottom: ${theme.spacings.xsmall};
    }

    .info {
      margin-right: ${theme.spacings.xxsmall};
    }

    .info {
      .contact-name {
        display: flex;
        align-items: flex-start;

        strong {
          color: ${theme.colors.primary.light};
        }

        small {
          flex-shrink: 0;
          font-size: ${theme.font.sizes.xsmall};
          font-weight: bold;
          background: ${theme.colors.primary.lighter};
          color: ${theme.colors.primary.main};
          text-transform: uppercase;

          margin-left: ${theme.spacings.xsmall};
          padding: calc(${theme.spacings.xxsmall} / 2);
          border-radius: ${theme.border.radius};
        }
      }

      span {
        display: block;
        margin-top: calc(${theme.spacings.xxsmall} / 2);
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.gray[200]};
      }
    }

    .actions {
      display: flex;
      align-items: center;

      button {
        border: none;
        background: transparent;
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `}
`
