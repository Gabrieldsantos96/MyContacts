/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { createPortal } from 'react-dom'
import { usePortal } from './usePortal'

type PortalProps = {
  children: any
  containerId?: string
}

const ReactPortal = ({
  children,
  containerId = 'react-portal-wrapper'
}: PortalProps) => {
  const { wrapperElement } = usePortal(containerId)

  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}

export default ReactPortal
