import { convertCurrency } from '@/utils/transform'

import styles from '@/components/summary/styles.module.css'

type SummaryProps = {
  quantity: number
  unitaryValue: number
  fee: number
}

export function Summary({ quantity, unitaryValue, fee }: SummaryProps) {
  const subTotal = quantity * unitaryValue

  return (
    <section className={styles.summary}>
      <div>
        <p>Número de pokémons a serem atendidos:</p>
        <span>{quantity ? `0${quantity}` : 0}</span>
      </div>
      <div>
        <p>Atendimento unitário por pokémon:</p>
        <span>{convertCurrency(unitaryValue)}</span>
      </div>
      <div>
        <p>Subtotal:</p>
        <span>{convertCurrency(subTotal)}</span>
      </div>
      <div>
        <p>Taxa geracional*:</p>
        <span>{convertCurrency(fee)}</span>
      </div>
      <code className={styles.comments}>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</code>
    </section>
  )
}