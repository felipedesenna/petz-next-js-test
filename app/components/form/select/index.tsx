import { ChangeEvent, SelectHTMLAttributes } from 'react'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string
  text: string
  defaultText: string
  options: OptionsProps[]
  onSelected?: (value: ChangeEvent<HTMLSelectElement>) => void
}

export type OptionsProps = {
  id: string
  value: string
}

export function Select({
  id,
  text,
  defaultText,
  onSelected,
  options,
  ...rest
}: SelectProps) {
  return (
    <div className="container_input_select">
      <label htmlFor={id}>{text}</label>
      <select
        id={id}
        defaultValue="0"
        onChange={onSelected}
        {...rest}
      >
        <option value="0" disabled>{defaultText}</option>
        {options.map(item => (
          <option key={item.id} value={item.id}>{item.value}</option>
        ))}
      </select>
    </div>
  )
}

