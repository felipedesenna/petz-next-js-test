import { Metadata } from 'next'

import { HeaderTitle } from '@/components/header-title'
import { Form } from '@/components/form'

import styles from '@/schedule-appointment/styles.module.css'

export const metadata: Metadata = {
  title: 'Agendar Consulta - Petz nextJS (test)',
  description: 'Agende uma consulta e recupere seus pokémons em 5 segundos',
  keywords: 'Agende uma consulta, Recupere seus pokémons, Consulta rápida, Recuperação de pokémons, Consulta online, Pokémon Center, Pokémon recuperação, Centro Pokémon, Marcação de consulta, Experiência rápida, Pokémon recuperação instantânea, Agendamento eficiente, Consulta de pokémons em segundos',
}

export default function ScheduleAppointment() {
  return (
    <>
      <HeaderTitle
        title="Agendar Consulta"
        subtitle="Recupere seus pokémons em 5 segundos"
      />

      <div className={styles.content}>
        <h3 className={styles.title_form}>Preencha o formulário abaixo para agendar sua consulta</h3>
        <Form />
      </div>
    </>
  )
}