import styles from '@/components/summary/styles.module.css'

export function Summary() {
  return (
    <section className={styles.summary}>
      <div>
        <p>Número de pokémons a serem atendidos:</p>
        <span>01</span>
      </div>
      <div>
        <p>Atendimento unitário por pokémon:</p>
        <span>R$ 70,00</span>
      </div>
      <div>
        <p>Subtotal:</p>
        <span>R$ 70,00</span>
      </div>
      <div>
        <p>Taxa geracional*:</p>
        <span>R$ 2,10</span>
      </div>
      <code className={styles.comments}>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</code>
    </section>
  )
}