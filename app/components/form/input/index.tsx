import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  text: string
  type?: string
}

export function Input({ id, text, type = 'text', ...rest }: InputProps) {
  return (
    <div className="container_input_select">
      <label htmlFor={id}>{text}</label>
      <input id={id} name={id} type={type} {...rest} />
    </div>
  )
}

