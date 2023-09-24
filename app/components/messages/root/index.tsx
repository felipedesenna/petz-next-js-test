import { ReactNode } from 'react'

import styles from '@/components/messages/root/styles.module.css'

type MessagesRootProps = {
  children: ReactNode
}

export function MessagesRoot({ children }: MessagesRootProps) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}
