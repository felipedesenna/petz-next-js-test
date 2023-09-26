import { useState, useEffect, ChangeEvent } from 'react'

import { Select } from '@/components/form/select'
import { getAppointmentHour } from '@/api/http'
import { mapperDateTimeSelect } from '@/utils/mapperSelect'

type AppointmentHourSelectProps = {
  onHourValue: (value: ChangeEvent<HTMLSelectElement>) => void
  dateId: string
}

export function AppointmentHourSelect({ dateId, onHourValue }: AppointmentHourSelectProps) {
  const [appointmentHour, setAppointmentHour] = useState<string[]>([])

  async function loadAppointmentHour(date: string) {
    const { data } = await getAppointmentHour(date)
    setAppointmentHour(data)
  }

  useEffect(() => {
    loadAppointmentHour(dateId)
  }, [dateId])

  const hourToAppointment = mapperDateTimeSelect({
    data: appointmentHour,
  })

  return (
    <Select
      id="hour_of_appointment"
      text="Horário de Atendimento"
      defaultText="Selecione um horário"
      options={hourToAppointment}
      onSelected={onHourValue}
    />
  )
}