import ReactPortal from '@components/Portal'
import * as S from './styles'

const ModalRoot = ({ children }: { children: React.ReactNode }) => (
  <ReactPortal containerId="modal__container">
    <S.Overlay>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Overlay>
  </ReactPortal>
)

export default ModalRoot
