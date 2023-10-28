import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/images/white-pokeball.svg'

import styles from '@/components/header/styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Centro Pokémon" data-testid="logo" />
          Centro Pokémon
        </div>

        <nav className={styles.menu}>
          <li><Link href="/who-we-are" title="Quem Somos">Quem Somos</Link></li>
          <li><Link className={styles.active} href="/schedule-appointment" title="Agendar Consulta">Agendar Consulta</Link></li>
        </nav>
      </div>
    </header>
  )
}
