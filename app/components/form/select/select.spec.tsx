import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Select, OptionsProps } from '.'

describe('Must be contain Select component', () => {
  test('Rendering select component with option list', () => {
    const optionsValues: OptionsProps[] = [
      { id: '1', value: 'test 1' },
      { id: '2', value: 'test 2' },
      { id: '3', value: 'test 3' },
    ]

    render(
      <Select
        id="test"
        text="test jest"
        defaultText="jest doing something"
        options={optionsValues}
      />
    )

    expect(screen.getByText('jest doing something')).toBeInTheDocument()

    optionsValues.forEach(option => {
      expect(screen.getByText(option.value)).toBeInTheDocument()
      expect(screen.getByTestId(`options-${option.id}`)).toHaveAttribute('value', option.value)
    })
  })
})