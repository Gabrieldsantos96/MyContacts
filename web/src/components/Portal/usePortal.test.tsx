import { renderHook } from '@testing-library/react'
import { usePortal } from './usePortal'
import * as helpers from '@utils/helpers/createElementAndAppendToBody'

vitest.mock('@utils/helpers/createElementAndAppendToBody')

describe('usePortal', () => {
  it('should create and return a wrapper element when it does not exist', () => {
    const { result } = renderHook(() => usePortal())

    expect(helpers.createElementAndAppendToBody).toHaveBeenCalledWith(
      'react-portal-wrapper'
    )
    expect(result.current.wrapperElement).not.toBeNull()
  })

  it('should return an existing wrapper element when it already exists', () => {
    document.body.innerHTML = '<div id="react-portal-wrapper-existing"></div>'

    const { result } = renderHook(() =>
      usePortal('react-portal-wrapper-existing')
    )

    expect(result.current.wrapperElement).not.toBeNull()

    expect(result.current.wrapperElement?.id).toBe(
      'react-portal-wrapper-existing'
    )
  })
})
