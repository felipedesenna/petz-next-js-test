import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import styles from '@/components/messages/image/styles.module.css'

type MessagesImageProps = {
  image: string | StaticImport
  description: string
}

export function MessagesImage({ image, description }: MessagesImageProps) {
  return (
    <div className={styles.content}>
      <Image src={image} alt={description} />
    </div>
  )
}
