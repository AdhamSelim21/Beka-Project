'use client'
import { useState, useRef, useEffect } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { LANGUAGES } from '../constants'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  // Assuming the URL structure is /[lang]/...
  // We extract the first segment as the language code
  const currentLangCode = pathname.split('/')[1] || LANGUAGES[0].code
  const currentLang = LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (code: string) => {
    setIsOpen(false)
    if (code === currentLangCode) return

    const segments = pathname.split('/')
    // Ensure the array has at least an empty string at [0] and a lang code at [1]
    if (segments.length > 1 && LANGUAGES.some(l => l.code === segments[1])) {
      segments[1] = code
    } else {
      // If there's no language in the path (e.g., pathname is "/"), we insert it
      segments.splice(1, 0, code)
    }

    const newPath = segments.join('/') || '/'
    router.push(newPath)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 text-white bg-blue-950 font-bold text-xs uppercase hover:bg-blue-800 transition-all cursor-pointer"
      >
        {currentLangCode.toUpperCase()} <HiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-[150]">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 font-medium ${
                lang.code === currentLangCode ? 'text-blue-600 font-bold' : 'text-blue-950'
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}