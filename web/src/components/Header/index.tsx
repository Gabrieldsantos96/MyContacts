import Toggle from '@components/Toggle'
import * as S from './styles'
import Logo from '@assets/images/svg/logo.svg?react'
import { toggleTheme } from '@utils/helpers/themeEventManager'
export default function Header() {
  return (
    <S.Container>
      <Logo width="210" />
      <Toggle onCheck={toggleTheme} label="Mudar tema" />
    </S.Container>
  )
}
