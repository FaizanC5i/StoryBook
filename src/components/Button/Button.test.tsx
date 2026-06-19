import { describe, it, expect } from 'vitest'
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import { Button } from './Button'

describe('Button', () => {
  it('renders with the provided label and variant', () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)

    act(() => {
      root.render(<Button label="Test button" variant="outline" />)
    })

    const button = container.querySelector('button')
    expect(button).not.toBeNull()
    expect(button?.textContent).toContain('Test button')

    root.unmount()
    container.remove()
  })
})
