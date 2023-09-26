import { ChangeEvent, useEffect, useState } from 'react'

import { Select } from '@/components/form/select'
import { getPokemon } from '@/api/http'
import { Result } from '@/interfaces/api'
import { mapperSelect } from '@/utils/mapperSelect'
import { Button } from '@/components/form/button'

import styles from '@/components/create-pokemon/styles.module.css'

type NewPokemon = {
  id: number
}

type CreatePokemonProps = {
  onPokemonValue: (value: ChangeEvent<HTMLSelectElement>) => void
}

export function CreatePokemon({ onPokemonValue }: CreatePokemonProps) {
  const [isLimitPokemon, setIsLimitPokemon] = useState(false)
  const [pokemonData, setPokemonData] = useState<Result[]>([])
  const [newPokemon, setNewPokemon] = useState<NewPokemon[]>([
    { id: 1 }
  ])

  async function loadPokemon() {
    const { results } = await getPokemon()
    setPokemonData(results)
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  function handleNewPokemon() {
    const lastPokemon = newPokemon[newPokemon.length - 1]
    setNewPokemon(state => [...state, { id: lastPokemon.id + 1 }])
  }

  useEffect(() => {
    if (newPokemon.length === 6) {
      setIsLimitPokemon(true)
    }
  }, [newPokemon])

  const pokemonList = mapperSelect(pokemonData)

  return (
    <div className={styles.container}>
      <p className={styles.title}>Cadastre seu time</p>
      <span className={styles.description}>Atendemos até 06 pokémons por vez</span>

      <div className="container_select">
        {newPokemon.map(item => (
          <Select
            key={item.id}
            id={`create_pokemon_${item.id}`}
            text={`Pokémon 0${item.id}`}
            defaultText="Selecione seu pokémon"
            options={pokemonList}
            onSelected={onPokemonValue}
          />
        ))}
      </div>

      <div>
        <Button
          disabled={isLimitPokemon}
          onClick={handleNewPokemon}
          variant="secondary"
          type="button"
          icon={'+'}
        >
          Adicionar novo pokémon ao time...
        </Button>
      </div>
    </div>
  )
}
