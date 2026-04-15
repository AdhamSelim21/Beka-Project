import React from 'react'
import './styles.css'
import Image from 'next/image'
import Link from 'next/link'
import Hero from 'images/Hero.png'
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Navbar from './Navbar'

export const metadata = {
  description: 'Beka Sports Playgrounds - Premier sports facilities and training for athletes of all levels.',
  title: 'Beka Sports Playgrounds',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navbar />

        <header className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden mt-20 md:mt-20 lg:mt-20   ">
          <Image src={Hero} alt="Beka Sports Hero" fill />
        </header>

        <main>{children}</main>

        <footer className="bg-blue-950 text-white py-12 md:py-16 px-6 md:px-8 border-t border-white/10 rounded-t-[2rem]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h2 className="font-headline font-black text-2xl tracking-tighter uppercase">
                Beka <span className="text-blue-400">Sports</span>
              </h2>
              <p className="text-white/60 text-sm max-w-xs">
                State-of-the-art facilities and professional training for every athlete.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold uppercase tracking-widest text-blue-400 text-xs">
                Contact Us
              </h3>
              <div className="flex flex-col gap-3 text-sm text-white/80">
                <Link
                  href="mailto:www.bekasport2014@gmail.com"
                  className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors"
                >
                  <MdEmail size={18} className="text-blue-400" />
                  <span className="break-all">bekasport2014@gmail.com</span>
                </Link>
                <Link
                  href="mailto:www.bekasportegypt07.com"
                  className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors"
                >
                  <MdEmail size={18} className="text-blue-400" />
                  <span className="break-all">bekasportegypt07.com</span>
                </Link>
                <div className="flex items-center justify-center md:justify-start gap-3 hover:text-green-400 transition-colors cursor-pointer">
                  <FaWhatsapp size={18} className="text-blue-400" />
                  <span>+20 1555239841</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 hover:text-green-400 transition-colors cursor-pointer">
                  <FaWhatsapp size={18} className="text-blue-400" />
                  <span>+20 1555239851</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
              <h3 className="font-bold uppercase tracking-widest text-blue-400 text-xs">
                Follow Us
              </h3>
              <div className="flex items-center gap-4">
                {[FaInstagram, FaFacebookF, FaTiktok].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="p-3 bg-white/5 rounded-full hover:bg-blue-800 transition-all"
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/30">
              © 2026 Beka Sports Playgrounds. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
