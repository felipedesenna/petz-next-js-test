import { OptionsProps, Select } from '@/components/form/select'

const region: OptionsProps[] = [
  { id: '1', value: 'lisboa' },
  { id: '2', value: 'xira' },
  { id: '3', value: 'braga' },
  { id: '4', value: 'porto' },
]

const city: OptionsProps[] = [
  { id: '1', value: 'sacavem' },
  { id: '2', value: 'sintra' },
  { id: '3', value: 'povoa' },
  { id: '4', value: 'alverca' },
]

export async function RegionAndCitySelect() {
  return (
    <>
      <Select
        id="region"
        text="Região"
        defaultText="Selecione sua região"
        options={region}
      />
      <Select
        id="city"
        text="Cidade"
        defaultText="Selecione sua cidade"
        options={city}
      />
    </>
  )
}