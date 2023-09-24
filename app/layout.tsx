import '@/styles/globals.css'
import { Metadata } from 'next'
import { Inter } from '@next/font/google'
import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

type RootLayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Petz nextJS (test)',
  description: 'Centro Pokémon de atendimento ao seu animalzinho!',
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}