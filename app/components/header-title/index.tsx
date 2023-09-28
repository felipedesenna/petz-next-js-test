import styles from '@/components/header-title/styles.module.css'

type HeaderTitleProps = {
  title: string
  subtitle: string
}

export function HeaderTitle({ title, subtitle }: HeaderTitleProps) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.breadcrumb}>
          <li>Home</li>
          <li className={styles.special}>{'>'}</li>
          <li data-testid="breadcrumb" className={styles.gray}>{title}</li>
        </ul>

        <h1 data-testid="title" className={styles.title}>{title}</h1>

        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </section>
  )
}
