import { OptionsProps } from '@/components/form/select'
import { Result } from '@/interfaces/api'
import { capitalizeLetter } from '@/utils/transform'

type DateTimeMapper = {
  data: string[]
  type?: 'hour' | 'date'
}

export function mapperSelect(data: Result[]): OptionsProps[] {
  return data.map((item, index) => ({
    id: `${index + 1}`, value: capitalizeLetter(item.name)
  }))
}

export function mapperDateTimeSelect({ data, type = 'hour' }: DateTimeMapper): OptionsProps[] {
  return data.map((item, index) => ({
    id: `${index + 1}`,
    value: type === 'hour' ? item :
      new Intl.DateTimeFormat('pt-BR').format(new Date(item))
  }))
}