import { renderHook, act } from '@testing-library/react'
import { ModalRefProps, useModal } from './useModal'
import React from 'react'

describe('useModal', () => {
  it('should toggle visibility', () => {
    const ref = React.createRef<ModalRefProps>()

    const { result } = renderHook(() => useModal(ref, vitest.fn()))

    expect(result.current.isVisible).toBe(false)

    act(() => ref.current?.toggleModal())

    expect(result.current.isVisible).toBe(true)
  })

  it('should call onConfirm when onSubmit is called', () => {
    const onConfirmMock = vitest.fn()
    const ref = React.createRef<ModalRefProps>()

    renderHook(() => useModal(ref, onConfirmMock))

    act(() => ref.current?.onSubmit())

    expect(onConfirmMock).toHaveBeenCalled()
  })
})
