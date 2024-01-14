export function createElementAndAppendToBody(
  containerId: string
): HTMLDivElement {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', containerId)
  wrapperElement.setAttribute('data-testid', containerId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}
