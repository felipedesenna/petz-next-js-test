import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { SuccessInfo } from '.'

describe('Must be contain Success Info component', () => {
  test('Receiving message props in the component', () => {
    const message = 'Test success message'
    render(<SuccessInfo message={message} />)

    expect(screen.getByText(message)).toBeInTheDocument()
  })
})
