import { Messages } from '@/components/messages'
import { InformationProps } from '@/interfaces/information'

import WarningIcon from '@/public/warning.svg'

export function ErrorInfo({ message, onNewAppointment }: InformationProps) {
  return (
    <Messages.Root>
      <Messages.Title title="Houve um problema no agendamento" />
      <Messages.Image image={WarningIcon} description="Imagem atenção" />
      <Messages.Content text={message} />
      <Messages.Button onClick={onNewAppointment}>
        Fazer Novo Agendamento
      </Messages.Button>
    </Messages.Root>
  )
}