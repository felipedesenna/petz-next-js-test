import { ChangeEvent } from 'react'

import { Select } from '@/components/form/select'
import { getPokemonRegion } from '@/api/http'
import { mapperSelect } from '@/utils/mapperSelect'

type RegionSelectProps = {
  onRegionValue: (value: ChangeEvent<HTMLSelectElement>) => void
}

export async function RegionSelect({ onRegionValue }: RegionSelectProps) {
  const { results } = await getPokemonRegion()
  const regionToAppointment = mapperSelect(results)

  return (
    <Select
      id="region"
      text="Região"
      defaultText="Selecione sua região"
      options={regionToAppointment}
      onSelected={onRegionValue}
    />
  )
}