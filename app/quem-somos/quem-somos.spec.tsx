import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'

import QuemSomos, { metadata } from './page'

describe('Must be contain Quem Somos pages', () => {
  test('Rendering quem somos pages', () => {
    render(<QuemSomos />)

    expect(screen.getByText('A maior rede de tratamento pokémon.')).toBeInTheDocument()
    expect(screen.getByText('O Centro Pokémon')).toBeInTheDocument()
    expect(screen.getByText('Como funciona a cura de um pokémon?')).toBeInTheDocument()
  })

  test('Metadata in the document', async () => {
    render(<QuemSomos />)

    waitFor(() => {
      expect(document.querySelector('title')?.textContent).toEqual(metadata.title)
      expect(document.querySelector("meta[name='description']")?.content).toEqual(metadata.description)
    })
  })
})
