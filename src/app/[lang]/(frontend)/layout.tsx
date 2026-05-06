import React from 'react'
import type { Viewport } from 'next'
import './styles.css'
import Image from 'next/image'
import Hero from 'images/Hero.png'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Geist, Oswald, IBM_Plex_Sans_Arabic } from 'next/font/google'
import { Locale } from '@/types'
import { getDictionary } from '@/messages/Dictionary'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-headline',
})

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-arabic',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  description: 'Beka Sports Playgrounds - Premier sports facilities...',
  title: 'Beka Sports Playgrounds',
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { children } = props
  const params = await props.params
  const lang = params.lang as Locale

  const dict = await getDictionary(lang)

  const isRtl = lang === 'ar'
  const primaryFont = isRtl ? ibmPlexArabic.className : geist.className

  return (
    <html
      lang={lang}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${primaryFont} ${oswald.variable} ${ibmPlexArabic.variable} ${geist.variable} antialiased`}
    >
      <body>
        <Navbar lang={lang} dict={dict.nav} />

        <header className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden mt-20">
          <Image src={Hero} alt="Beka Sports Hero" fill priority />
        </header>

        <main>{children}</main>

        <Footer lang={lang} />
      </body>
    </html>
  )
}
