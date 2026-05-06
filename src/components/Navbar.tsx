'use client'
import { useState } from 'react'
import Image from 'next/image'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import Link from 'next/link'
import Logo from 'images/Logo.png'
import LanguageDropdown from './LanguageDropdown'
import { Locale } from '@/types'

export default function Navbar({ lang, dict }: { lang: Locale; dict: any }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: dict?.services || 'Services', href: `/${lang}` },
    { name: dict?.aboutUs || 'About US', href: `/${lang}/About-US` },
    { name: dict?.portfolio || 'Company Projects', href: `/${lang}/Portfolio` },
    { name: dict?.products || 'Products', href: `/${lang}/Products` },
  ]

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 flex justify-between items-center px-6 md:px-12 h-20 shadow-sm">
      {/* 1. LOGO & LANGUAGE (Left Side) */}
      <div className="relative z-[110] flex items-center gap-4">
        <Image src={Logo} alt="Logo" width={60} height={60} className="md:w-[70px]" />
        {/* Desktop Dropdown */}
        <div className="hidden lg:block">
          <LanguageDropdown />
        </div>
      </div>

      {/* 2. CENTER TITLE */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">
        <h1 className="font-headline tracking-tighter text-xl font-black uppercase text-blue-950 text-center">
          {dict?.BrandName || 'BEKASPORT'}
        </h1>
      </div>

      {/* 3. DESKTOP NAVIGATION */}
      <div className="hidden lg:flex items-center gap-3 ">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="px-2 py-2 rounded-full bg-blue-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition-all"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Hamburger Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[110] lg:hidden p-2 text-blue-950 focus:outline-none"
      >
        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </button>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`absolute top-20 start-0 w-full bg-blue-950 shadow-xl transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-8 gap-6">
          {/* Mobile Dropdown Integration */}
          <div className="pb-4 border-b border-white/10 w-full flex justify-center">
            <LanguageDropdown />
          </div>

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-white text-xl font-bold uppercase tracking-widest transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
