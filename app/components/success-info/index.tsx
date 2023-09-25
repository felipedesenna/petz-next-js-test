import { Messages } from '@/components/messages'
import { InformationProps } from '@/interfaces/information'

import CheckIcon from '@/public/check.svg'

export function SuccessInfo({ message, onNewAppointment }: InformationProps) {
  return (
    <Messages.Root>
      <Messages.Title title="Consulta Agendada" />
      <Messages.Image image={CheckIcon} description="Imagem sucesso" />
      <Messages.Content text={message} />
      <Messages.Button onClick={onNewAppointment}>
        Fazer Novo Agendamento
      </Messages.Button>
    </Messages.Root>
  )
}