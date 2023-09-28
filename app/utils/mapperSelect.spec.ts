import { mapperDateTimeSelect, mapperSelect } from './mapperSelect'

describe('Must map and transform data', () => {
  test('Method mapperDateTimeSelect with type date', () => {
    const date = [
      '9/28/2023',
      '9/29/2023',
      '9/30/2023',
    ]

    expect(mapperDateTimeSelect({ data: date, type: 'date' })).toEqual([
      expect.objectContaining({ id: '1', value: '28/09/2023' }),
      expect.objectContaining({ id: '2', value: '29/09/2023' }),
      expect.objectContaining({ id: '3', value: '30/09/2023' })
    ])
  })

  test('Method mapperDateTimeSelect with default type', () => {
    const hour = [
      '10:00:00',
      '10:30:00',
      '11:00:00',
    ]

    expect(mapperDateTimeSelect({ data: hour })).toEqual([
      expect.objectContaining({ id: '1', value: '10:00:00' }),
      expect.objectContaining({ id: '2', value: '10:30:00' }),
      expect.objectContaining({ id: '3', value: '11:00:00' })
    ])
  })

  test('Method mapperSelect', () => {
    const data = [
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

    expect(mapperSelect(data)).toEqual([
      expect.objectContaining({ id: '1', value: 'Celadon city' }),
      expect.objectContaining({ id: '2', value: 'Cerulean city' }),
      expect.objectContaining({ id: '3', value: 'Cinnabar island' })
    ])
  })
})
