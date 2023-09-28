import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Summary } from '.'
import { convertCurrency } from '@/utils/transform'

describe('Must be contain Summary component', () => {
  test('Receiving props in the component', () => {
    const quantity = 5
    const unitaryValue = 46
    const fee = 2.6

    render(
      <Summary
        fee={fee}
        quantity={quantity}
        unitaryValue={unitaryValue}
      />
    )

    expect(screen.getByTestId('quantity')).toHaveTextContent(String(quantity))
    expect(screen.getByTestId('fee')).toContainHTML(convertCurrency(fee))
    expect(screen.getByTestId('unitary-value')).toContainHTML(convertCurrency(unitaryValue))
  })

  test('Receiving quantity equal 0 and another props in the component', () => {
    const quantity = 0
    const unitaryValue = 46
    const fee = 2.6

    render(
      <Summary
        fee={fee}
        quantity={quantity}
        unitaryValue={unitaryValue}
      />
    )

    expect(screen.getByTestId('quantity')).toHaveTextContent(String(quantity))
    expect(screen.getByTestId('fee')).toContainHTML(convertCurrency(fee))
    expect(screen.getByTestId('unitary-value')).toContainHTML(convertCurrency(unitaryValue))
  })
})
