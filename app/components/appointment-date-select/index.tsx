import { useState, useEffect, ChangeEvent } from 'react'

import { getAppointmentDate } from '@/api/http'
import { mapperDateTimeSelect } from '@/utils/mapperSelect'
import { Select } from '@/components/form/select'

type AppointmentDateSelectProps = {
  onDateValue: (value: ChangeEvent<HTMLSelectElement>) => void
}

export function AppointmentDateSelect({ onDateValue }: AppointmentDateSelectProps) {
  const [appointmentDate, setAppointmentDate] = useState<string[]>([])

  async function loadAppointmentDate() {
    const { data } = await getAppointmentDate()
    setAppointmentDate(data)
  }

  useEffect(() => {
    loadAppointmentDate()
  }, [])

  const dateToAppointment = mapperDateTimeSelect({
    data: appointmentDate,
    type: 'date',
  })

  return (
    <Select
      id="date_to_appointment"
      text="Data para Atendimento"
      defaultText="Selecione uma data"
      options={dateToAppointment}
      onSelected={onDateValue}
    />
  )
}