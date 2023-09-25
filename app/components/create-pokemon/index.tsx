'use client'

import { useEffect, useState } from 'react'

import { Select } from 'app/components/form/select'
import { Button } from 'app/components/form/button'

import styles from '@/components/create-pokemon/styles.module.css'

type NewPokemon = {
  id: number
}

const pokemonList = [
  { id: '1', value: 'pokemon 1' },
  { id: '2', value: 'pokemon 2' },
  { id: '3', value: 'pokemon 3' },
  { id: '4', value: 'pokemon 4' },
]

export function CreatePokemon() {
  const [isLimitPokemon, setIsLimitPokemon] = useState(false)
  const [newPokemon, setNewPokemon] = useState<NewPokemon[]>([
    { id: 1 }
  ])

  function handleNewPokemon() {
    const lastPokemon = newPokemon[newPokemon.length - 1]
    setNewPokemon(state => [...state, { id: lastPokemon.id + 1 }])
  }

  useEffect(() => {
    if (newPokemon.length === 6) {
      setIsLimitPokemon(true)
    }
  }, [newPokemon])

  return (
    <div className={styles.container}>
      <p className={styles.title}>Cadastre seu time</p>
      <span className={styles.description}>Atendemos até 06 pokémons por vez</span>

      <div className="container_select">
        {newPokemon.map(item => (
          <Select
            key={item.id}
            id="create_pokemon"
            text={`Pokémon 0${item.id}`}
            defaultText="Selecione seu pokémon"
            options={pokemonList}
          />
        ))}
      </div>

      <div>
        <Button disabled={isLimitPokemon} onClick={handleNewPokemon} variant="secondary" icon={'+'}>
          Adicionar novo pokémon ao time...
        </Button>
      </div>
    </div>
  )
}
