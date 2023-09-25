'use client'

import { useState, useEffect } from 'react'

import { OptionsProps, Select } from '@/components/form/select'
import { getAppointmentDate, getAppointmentHour } from '@/api/http'

export function AppointmentSelect() {
  const [dateId, setDateId] = useState('')
  const [appointmentDate, setAppointmentDate] = useState<string[]>([])
  const [appointmentHour, setAppointmentHour] = useState<string[]>([])

  useEffect(() => {
    async function load() {
      const { data } = await getAppointmentDate()
      setAppointmentDate(data)
    }

    load()
  }, [])

  const dateToAppointment: OptionsProps[] = appointmentDate.map((item, index) => ({
    id: `${index + 1}`, value: new Intl.DateTimeFormat('pt-BR').format(new Date(item))
  }))

  async function loadAppointmentHour(date: string) {
    const { data } = await getAppointmentHour(date)
    setAppointmentHour(data)
  }

  useEffect(() => {
    const selectedDate = dateToAppointment.find(item => item.id === dateId)

    if (!selectedDate) {
      return
    }

    loadAppointmentHour(selectedDate.id)
  }, [dateId])

  const hourToAppointment: OptionsProps[] = appointmentHour.map((item, index) => ({
    id: `${index + 1}`, value: item
  }))

  return (
    <>
      <Select
        id="date_to_appointment"
        text="Data para Atendimento"
        defaultText="Selecione uma data"
        options={dateToAppointment}
        onSelected={event => setDateId(event.currentTarget.value)}
      />
      <Select
        id="hour_of_appointment"
        text="Horário de Atendimento"
        defaultText="Selecione um horário"
        options={hourToAppointment}
      />
    </>
  )
}