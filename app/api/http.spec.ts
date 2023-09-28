import {
  getAppointmentDate,
  getAppointmentHour,
  getPokemonRegion,
  getPokemonCity,
  getPokemon,
} from './http'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('Must be contain mock in the APIs', () => {
  test('Method GET api/date', async () => {
    const payload = [
      '9/28/2023',
      '9/29/2023',
      '9/30/2023',
    ]

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: payload,
        }),
      })
    ) as jest.Mock

    const result = await getAppointmentDate()
    expect(result.data).toEqual(payload)
  })

  test('Method POST api/time', async () => {
    const payload = [
      '23:50:00',
      '21:21:00',
      '18:05:00',
    ]

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: payload,
        }),
      })
    ) as jest.Mock

    const result = await getAppointmentHour('9/28/2023')
    expect(result.data).toEqual(payload)
  })

  test('Method GET https://pokeapi.co/api/v2/region', async () => {
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

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(payload),
      })
    ) as jest.Mock

    const result = await getPokemonRegion()
    expect(result.results).toEqual(payload.results)
    expect(result.count).toBe(10)
  })

  test('Method GET https://pokeapi.co/api/v2/region/kanto', async () => {
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

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(payload),
      })
    ) as jest.Mock

    const result = await getPokemonCity('kanto')
    expect(result.locations).toEqual(payload.locations)
    expect(result.id).toBe(1)
  })

  test('Method GET https://pokeapi.co/api/v2/pokemon', async () => {
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

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(payload),
      })
    ) as jest.Mock

    const result = await getPokemon()
    expect(result.results).toEqual(payload.results)
    expect(result.count).toBe(1292)
  })
})
