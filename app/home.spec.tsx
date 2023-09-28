import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Home from './page'

describe('Must be contain Home pages', () => {
  test('Rendering home pages', () => {
    render(<Home />)

    expect(screen.getByText('Cuidamos bem do seu pokémon, para ele cuidar bem de você')).toBeInTheDocument()
  })
})
