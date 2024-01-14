import * as S from './styles'

export type ModalTitleProps = {
  title: string
  danger?: boolean
}

const ModalTitle = ({ title, danger }: ModalTitleProps) => (
  <S.Wrapper>
    <S.Title $danger={danger}>{title}</S.Title>
  </S.Wrapper>
)

export default ModalTitle
