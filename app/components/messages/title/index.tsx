import styles from '@/components/messages/title/styles.module.css'

type MessagesTitleProps = {
  title: string
}

export function MessagesTitle({ title }: MessagesTitleProps) {
  return <h3 className={styles.title}>{title}</h3>
}
