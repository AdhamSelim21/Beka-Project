import React from 'react'
import type { Viewport } from 'next'
import './styles.css'
import Image from 'next/image'
import Hero from 'images/Hero.png'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Geist, Oswald } from 'next/font/google'
import { Locale } from '@/types'

const geist = Geist({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-headline' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  description:
    'Beka Sports Playgrounds - Premier sports facilities and training for athletes of all levels.',
  title: 'Beka Sports Playgrounds',
}

export default async function RootLayout(props: { children: React.ReactNode; params: { lang: Locale } }) {
  const { children , params } = props
  const { lang } = await params

  return (
    <html   lang="en" className={`${geist.className} ${oswald.variable}`}>
      <body>
        <Navbar lang={lang} />

        <header className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden mt-20 md:mt-20 lg:mt-20   ">
          <Image src={Hero} alt="Beka Sports Hero" fill />
        </header>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
