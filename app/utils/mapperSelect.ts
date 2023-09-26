import { OptionsProps } from '@/components/form/select'
import { RegionResult } from '@/interfaces/api'
import { capitalizeLetter } from '@/utils/transform'

export function mapperSelect(data: RegionResult[]): OptionsProps[] {
  return data.map((item, index) => ({
    id: `${index + 1}`, value: capitalizeLetter(item.name)
  }))
}