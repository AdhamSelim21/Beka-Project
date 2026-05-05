import React from 'react'
import type { Viewport } from 'next'
import './styles.css'
import Image from 'next/image'
import Hero from 'images/Hero.png'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Geist, Oswald } from 'next/font/google'
import { Locale } from '@/types'
import { getDictionary } from '@/messages/Dictionary'

const geist = Geist({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-headline' })

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
  params: Promise<{ lang: Locale }> // Next.js 15+ uses Promises for params
}) {
  const { children, params } = props
  const { lang } = await props.params
  const dict = await getDictionary(lang) // <--- Clean one-liner

  return (
    <html
      lang={lang}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`${geist.className} ${oswald.variable}`}
    >
      <body>
        {/* Pass the specific nav dictionary to the Navbar */}
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
