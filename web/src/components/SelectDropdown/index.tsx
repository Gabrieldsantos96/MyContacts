/* eslint-disable no-unused-expressions */
import { SelectHTMLAttributes } from 'react'
import Spinner from '../Spinner'
import * as S from './styles'

type SelectType = SelectHTMLAttributes<HTMLSelectElement>

export type SelectDropDownProps = {
  error: string
  options: { id: string; name: string }[]
  isLoading: boolean
  defaultLabel?: string
} & SelectType

const SelectDropdown = ({
  error,
  isLoading,
  options,
  defaultLabel = '',
  ...props
}: SelectDropDownProps) => {
  return (
    <S.Wrapper $isError={!!error}>
      <S.Item>
        <S.Select {...props}>
          <option value="">{defaultLabel}</option>
          {options?.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </S.Select>
        {isLoading && <Spinner size={16} />}
      </S.Item>
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  )
}
export default SelectDropdown
