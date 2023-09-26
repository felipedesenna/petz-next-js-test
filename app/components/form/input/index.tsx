import { InputHTMLAttributes, RefObject } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  text: string
  type?: string
  onChangeValue?: RefObject<HTMLInputElement>
}

export function Input({ id, text, type = 'text', onChangeValue, ...rest }: InputProps) {
  return (
    <div className="container_input_select">
      <label htmlFor={id}>{text}</label>
      <input id={id} name={id} type={type} ref={onChangeValue} {...rest} />
    </div>
  )
}