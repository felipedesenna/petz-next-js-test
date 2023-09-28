import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'

import { AppointmentHourSelect } from '.'
import { mapperDateTimeSelect } from '@/utils/mapperSelect'

const payload = [
  '23:50:00',
  '21:21:00',
  '18:05:00',
]

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: payload,
      }),
    })
  ) as jest.Mock
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('Must be contain Appointment Hour Select component', () => {
  test('Rendering appointment hour select component with option list', async () => {
    const change = jest.fn()
    const dateId = '28/09/2023'
    const appointment = mapperDateTimeSelect({ data: payload })

    render(
      <AppointmentHourSelect
        dateId={dateId}
        onHourValue={change}
      />
    )

    waitFor(() => {
      expect(screen.getByText('Selecione um horário')).toBeInTheDocument()

      appointment.forEach(option => {
        expect(screen.getByText(option.value)).toBeInTheDocument()
        expect(screen.getByTestId(`options-${option.id}`)).toHaveAttribute('value', option.value)
      })
    })
  })
})
