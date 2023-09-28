'use client'

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'

import { ErrorInfo } from '@/components/error-info'
import { SuccessInfo } from '@/components/success-info'
import { Input } from '@/components/form/input'
import { Button } from '@/components/form/button'
import { CreatePokemon } from '@/components/create-pokemon'
import { AppointmentDateSelect } from '@/components/appointment-date-select'
import { AppointmentHourSelect } from '@/components/appointment-hour-select'
import { RegionSelect } from '@/components/region-select'
import { CitySelect } from '@/components/city-select'
import { Summary } from '@/components/summary'
import { convertCurrency, formatHourAndMinutes } from '@/utils/transform'

import styles from '@/components/form/styles.module.css'

type TeamPokemon = {
  id: string
  value: string
}

type StatusMessage = {
  status: 'success' | 'error' | 'wanting'
  message?: string
}

export function Form() {
  const unitaryValue = 70
  const fee = 2.1

  const [appointmentDate, setAppointmentDate] = useState<ChangeEvent<HTMLSelectElement>>()
  const [appointmentHour, setAppointmentHour] = useState<ChangeEvent<HTMLSelectElement>>()
  const [region, setRegion] = useState<ChangeEvent<HTMLSelectElement>>()
  const [city, setCity] = useState<ChangeEvent<HTMLSelectElement>>()
  const [newPokemon, setNewPokemon] = useState<ChangeEvent<HTMLSelectElement>>()
  const [teamPokemon, setTeamPokemon] = useState<TeamPokemon[]>([])
  const [statusMessage, setStatusMessage] = useState<StatusMessage>({ status: 'wanting' })

  const nameInputRef = useRef<HTMLInputElement>(null)
  const lastNameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!newPokemon?.target.id || !newPokemon?.target.value) {
      return
    }

    const id = newPokemon.target.id
    const value = newPokemon.target.value

    setTeamPokemon(state => [
      ...state,
      { id, value }
    ])
  }, [newPokemon?.target])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const payload = {
      name: nameInputRef.current?.value,
      lastName: lastNameInputRef.current?.value,
      region: region?.target.value,
      city: city?.target.value,
      team: teamPokemon.length,
      date: appointmentDate?.target.value,
      hour: formatHourAndMinutes(appointmentHour?.target.value),
    }

    if (teamPokemon.length === 0) {
      setStatusMessage({
        status: 'error',
        message: 'Todos os campos devem ser preenchidos e ter ao menos um pokémon adicionado ao time.',
      })
    } else {
      setStatusMessage({
        status: 'success',
        message: `Seu agendamento para dia ${payload.date}, às ${payload.hour}, para ${payload.team}x pokémons foi realizado com sucesso!`
      })
    }

    /* more info if necessary
    console.log(payload)
    console.log(`Treinador pokémon: ${nameInputRef.current?.value} ${lastNameInputRef.current?.value}`)
    console.log(`Pokémon da região ${region?.target.value} e cidade ${city?.target.value}`)
    teamPokemon.forEach((item, index) => (
      console.log(`Pokémons que vão se consultar: ${index + 1} - ${item.value}`)
    ))
    */
  }

  function newAppointment() {
    setStatusMessage({
      status: 'wanting',
    })
  }

  return (
    <>
      {statusMessage.status === 'success' && (
        <SuccessInfo
          message={statusMessage.message ?? ''}
          onNewAppointment={newAppointment}
        />
      )}

      {statusMessage.status === 'error' && (
        <ErrorInfo
          message={statusMessage.message ?? ''}
          onNewAppointment={newAppointment}
        />
      )}

      {statusMessage.status === 'wanting' && (
        <form data-testid="form" className={styles.container} onSubmit={handleSubmit}>
          <div className={styles.content}>
            <Input
              id="name"
              text="Nome"
              placeholder="Digite seu nome"
              onChangeValue={nameInputRef}
            />
            <Input
              id="last_name"
              text="Sobrenome"
              placeholder="Digite seu sobrenome"
              onChangeValue={lastNameInputRef}
            />
          </div>

          <div className={styles.content}>
            <RegionSelect onRegionValue={setRegion} />

            {region?.target.value && (
              <CitySelect
                onCityValue={setCity}
                regionId={region.target.value}
              />
            )}
          </div>

          <CreatePokemon onPokemonValue={setNewPokemon} />

          <div className={styles.content}>
            <AppointmentDateSelect onDateValue={setAppointmentDate} />

            {appointmentDate?.target.value && (
              <AppointmentHourSelect
                onHourValue={setAppointmentHour}
                dateId={appointmentDate.target.value}
              />
            )}
          </div>

          <span className={styles.separator} />

          <Summary
            quantity={teamPokemon.length}
            unitaryValue={unitaryValue}
            fee={fee}
          />

          <div className={styles.total}>
            <p className={styles.value}>
              Valor Total:{' '}
              {convertCurrency(teamPokemon.length * unitaryValue + fee)}
            </p>
            <Button type="submit">Concluir Agendamento</Button>
          </div>
        </form>
      )}
    </>
  )
}
