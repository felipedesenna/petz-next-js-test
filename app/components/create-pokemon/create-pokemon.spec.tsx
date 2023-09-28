import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { CreatePokemon } from '.'

const payload = {
  count: 1292,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
  ]
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

describe('Must be contain Create Pokemon component', () => {
  test('Rendering create pokemon component with option list', async () => {
    const change = jest.fn()

    render(
      <CreatePokemon
        onPokemonValue={change}
      />
    )

    fireEvent.click(screen.getByText('Adicionar novo pokémon ao time...'))

    waitFor(() => {
      expect(screen.getByText('Pokémon 02')).toBeInTheDocument()
    })
  })
})
