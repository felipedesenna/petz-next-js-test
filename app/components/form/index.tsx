import { Input } from '@/components/form/input'
import { Button } from '@/components/form/button'
import { CreatePokemon } from '@/components/create-pokemon'
import { AppointmentSelect } from '@/components/appointment-select'
import { RegionAndCitySelect } from '@/components/region-and-city-select'
import { Summary } from '@/components/summary'

import styles from '@/components/form/styles.module.css'

async function handleSubmit(formData: FormData) {
  'use server'

  const name = formData.get("name")
  console.log(name)
}

export function Form() {
  return (
    <form className={styles.container} action={handleSubmit}>
      <div className={styles.content}>
        <Input
          id="name"
          text="Nome"
          placeholder="Digite seu nome"
        />
        <Input
          id="last_name"
          text="Sobrenome"
          placeholder="Digite seu sobrenome"
        />
      </div>

      <div className={styles.content}>
        <RegionAndCitySelect />
      </div>

      <CreatePokemon />

      <div className={styles.content}>
        <AppointmentSelect />
      </div>

      <span className={styles.separator} />

      <Summary />

      <div className={styles.total}>
        <p className={styles.value}>Valor Total: R$ 72,10</p>
        <Button type="submit">Concluir Agendamento</Button>
      </div>
    </form>
  )
}
