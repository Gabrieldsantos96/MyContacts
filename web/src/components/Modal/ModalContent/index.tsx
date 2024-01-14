import React from 'react'
import * as S from './styles'

export type ModalContentProps = {
  children: React.ReactNode
}

const ModalContent = ({ children }: ModalContentProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default ModalContent
