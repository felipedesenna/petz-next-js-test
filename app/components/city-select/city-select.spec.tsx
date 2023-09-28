import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'

import { CitySelect } from '.'
import { mapperSelect } from '@/utils/mapperSelect'

const payload = {
  id: 1,
  locations: [
    {
      name: 'celadon-city',
      url: 'https://pokeapi.co/api/v2/location/67/',
    },
    {
      name: 'cerulean-city',
      url: 'https://pokeapi.co/api/v2/location/68/',
    },
    {
      name: 'cinnabar-island',
      url: 'https://pokeapi.co/api/v2/location/71/',
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

describe('Must be contain City Select component', () => {
  test('Rendering city select component with option list', async () => {
    const change = jest.fn()
    const regionId = 'kanto'
    const city = mapperSelect(payload.locations)

    render(
      <CitySelect
        regionId={regionId}
        onCityValue={change}
      />
    )

    waitFor(() => {
      expect(screen.getByText('Selecione sua cidade')).toBeInTheDocument()

      city.forEach(option => {
        expect(screen.getByText(option.value)).toBeInTheDocument()
        expect(screen.getByTestId(`options-${option.id}`)).toHaveAttribute('value', option.value)
      })
    })
  })
})
