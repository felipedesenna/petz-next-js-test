import { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from '@/components/form/button/styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ children, icon, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}
