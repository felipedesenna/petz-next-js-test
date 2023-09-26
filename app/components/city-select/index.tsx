import { ChangeEvent, useEffect, useState } from 'react'

import { Select } from '@/components/form/select'
import { getPokemonCity } from '@/api/http'
import { Result } from '@/interfaces/api'
import { mapperSelect } from '@/utils/mapperSelect'

type CitySelectProps = {
  onCityValue: (value: ChangeEvent<HTMLSelectElement>) => void
  regionId: string
}

export function CitySelect({ onCityValue, regionId }: CitySelectProps) {
  const [cityData, setCityData] = useState<Result[]>([])

  async function loadAppointmentCity(region: string) {
    const valueLowerCase = region.toLocaleLowerCase()
    const { locations } = await getPokemonCity(valueLowerCase)
    setCityData(locations)
  }

  useEffect(() => {
    loadAppointmentCity(regionId)
  }, [regionId])

  const cityToAppointment = mapperSelect(cityData)

  return (
    <Select
      id="city"
      text="Cidade"
      defaultText="Selecione sua cidade"
      options={cityToAppointment}
      onSelected={onCityValue}
    />
  )
}