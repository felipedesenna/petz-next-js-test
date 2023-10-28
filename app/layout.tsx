import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

type RootLayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Petz nextJS',
  description: 'Centro Pokémon de atendimento ao seu animalzinho!',
  icons: { icon: '/favicon.ico' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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