import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import { Form } from '.'

const payload = {
  count: 10,
  next: null,
  previous: null,
  results: [
    {
      name: 'kanto',
      url: 'https://pokeapi.co/api/v2/region/1/',
    },
    {
      name: 'johto',
      url: 'https://pokeapi.co/api/v2/region/2/',
    },
    {
      name: 'hoenn',
      url: 'https://pokeapi.co/api/v2/region/3/',
    },
  ],
}

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(payload),
    })
  ) as jest.Mock
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('Must be contain Form component', () => {
  test('Rendering form component with there sub components', async () => {
    render(<Form />)

    const name = screen.getByText('Nome')
    const lastName = screen.getByText('Sobrenome')
    const submittedButton = screen.getByText('Concluir Agendamento')

    fireEvent.change(name, 'Testing')
    fireEvent.change(lastName, 'Jest')
    fireEvent.click(submittedButton)

    waitFor(() => {
      expect(screen.getByText('Testing')).toBeInTheDocument()
      expect(screen.getByText('Jest')).toBeInTheDocument()
    })

    expect(screen.getByText('Todos os campos devem ser preenchidos e ter ao menos um pokémon adicionado ao time.')).toBeInTheDocument()

    const newAppointment = screen.getByText('Fazer Novo Agendamento')
    fireEvent.click(newAppointment)

    expect(screen.getByTestId('form')).toBeInTheDocument()
  })
})
