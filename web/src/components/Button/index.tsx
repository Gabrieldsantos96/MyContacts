import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'
import Spinner from '../Spinner'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type WrapperProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  danger?: boolean
  isLoading?: boolean
  disabled?: boolean
}

export type ButtonProps = {
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes &
  WrapperProps

const Button: React.ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    danger = false,
    isLoading = false,
    minimal = false,
    disabled,
    ...props
  },
  ref
) => (
  <S.Wrapper
    $size={size}
    $fullWidth={fullWidth}
    $hasIcon={!!icon}
    $danger={danger}
    $minimal={minimal}
    disabled={disabled || isLoading}
    ref={ref}
    {...props}
  >
    {icon}
    {isLoading ? <Spinner size={16} /> : <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
