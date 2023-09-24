import { HeaderTitle } from '@/components/header-title'
import { ErrorInfo } from '@/components/error-info'
import { SuccessInfo } from '@/components/success-info'

import styles from '@/agendar-consulta/styles.module.css'

export default function ScheduleAppointment() {
  return (
    <>
      <HeaderTitle
        title="Agendar Consulta"
        subtitle="Recupere seus pokémons em 5 segundos"
      />

      <div className={styles.content}>
        <SuccessInfo message="Seu agendamento para dia xx/xx/xxxx, às 00h00m, para 0x pokémons foi realizado com sucesso!" />
        <ErrorInfo message="{mensagem de erro}" />
      </div>
    </>
  )
}