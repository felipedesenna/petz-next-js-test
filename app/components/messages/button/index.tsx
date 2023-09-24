import { ButtonHTMLAttributes } from 'react'

import styles from '@/components/messages/button/styles.module.css'

interface MessagesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function MessagesButton({ text, ...rest }: MessagesButtonProps) {
  return <button className={styles.button} {...rest}>{text}</button>
}
