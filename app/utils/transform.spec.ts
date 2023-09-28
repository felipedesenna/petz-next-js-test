import { waitFor } from '@testing-library/dom'

import { capitalizeLetter, convertCurrency, formatHourAndMinutes } from './transform'

describe('Must transform the data', () => {
  test('Method capitalizeLetter', () => {
    const empty = ''
    const value = 'kanto-route-1'

    expect(capitalizeLetter(empty)).toBe('')
    expect(capitalizeLetter(value)).toBe('Kanto route 1')
  })

  test('Method convertCurrency', async () => {
    const zero = 0
    const value = 27

    waitFor(() => {
      expect(convertCurrency(zero)).toBe('R$ 0,00')
      expect(convertCurrency(value)).toBe('R$ 27,00')
    })
  })

  test('Method formatHourAndMinutes', () => {
    const empty = ''
    const value = '16:34:50'

    expect(formatHourAndMinutes(empty)).toBe('')
    expect(formatHourAndMinutes(value)).toBe('16h34m')
  })
})
