import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import * as S from './RootLayoutStyles'

const RootLayout = () => (
  <S.Container>
    <Header />
    <Outlet />
  </S.Container>
)

export { RootLayout }
