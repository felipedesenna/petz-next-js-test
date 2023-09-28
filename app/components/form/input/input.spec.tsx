import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Input } from '.'

describe('Must be contain Input component', () => {
  test('Rendering input component with props', () => {
    render(
      <Input
        id="test"
        text="test jest"
      />
    )

    expect(screen.getByText('test jest')).toBeInTheDocument()
  })

  test('Rendering input component with type props', () => {
    render(
      <Input
        id="test-number"
        text="type with number"
        type="number"
      />
    )

    expect(screen.getByText('type with number')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'number')
  })
})