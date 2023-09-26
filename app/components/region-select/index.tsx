import { ChangeEvent, useEffect, useState } from 'react'

import { Select } from '@/components/form/select'
import { getPokemonRegion } from '@/api/http'
import { Result } from '@/interfaces/api'
import { mapperSelect } from '@/utils/mapperSelect'

type RegionSelectProps = {
  onRegionValue: (value: ChangeEvent<HTMLSelectElement>) => void
}

export function RegionSelect({ onRegionValue }: RegionSelectProps) {
  const [regionData, setRegionData] = useState<Result[]>([])

  async function loadAppointmentRegion() {
    const { results } = await getPokemonRegion()
    setRegionData(results)
  }

  useEffect(() => {
    loadAppointmentRegion()
  }, [])

  const regionToAppointment = mapperSelect(regionData)

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