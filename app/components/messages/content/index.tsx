import styles from '@/components/messages/content/styles.module.css'

type MessagesContentProps = {
  text: string
}

export function MessagesContent({ text }: MessagesContentProps) {
  return <p className={styles.text}>{text}</p>
}
