import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/images/white-pokeball.svg'

import styles from '@/components/header/styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Centro Pokémon" />
          Centro Pokémon
        </div>

        <nav className={styles.menu}>
          <li><Link href="/quem-somos" title="Quem Somos">Quem Somos</Link></li>
          <li><Link className={styles.active} href="/agendar-consulta" title="Agendar Consulta">Agendar Consulta</Link></li>
        </nav>
      </div>
    </header>
  )
}
