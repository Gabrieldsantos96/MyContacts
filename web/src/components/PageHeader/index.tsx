import Arrow from '@assets/images/svg/icons/arrow.svg?react'
import * as S from './styles'
import { Link } from 'react-router-dom'

export default function PageHeader({ title }) {
  return (
    <S.Container>
      <Link to="/">
        <Arrow />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </S.Container>
  )
}
