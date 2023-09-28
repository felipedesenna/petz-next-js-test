import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'

import AgendarConsulta, { metadata } from './page'

describe.skip('Must be contain Agendar Consulta pages', () => {
  test('Rendering agendar consulta pages', async () => {
    render(<AgendarConsulta />)

    expect(screen.getByText('Recupere seus pokémons em 5 segundos')).toBeInTheDocument()
    expect(screen.getByText('Preencha o formulário abaixo para agendar sua consulta')).toBeInTheDocument()
    expect(screen.getByTestId('form')).toBeInTheDocument()

    waitFor(() => {
      expect(document.querySelector('title')?.textContent).toEqual(metadata.title)
      expect(document.querySelector("meta[name='description']")?.content).toEqual(metadata.description)
    })
  })
})
