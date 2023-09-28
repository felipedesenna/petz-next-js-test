import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('Must be contain Footer component', () => {
  test('Render the footer component', () => {
    const text = 'Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.'
    render(<Footer />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
