'use client'
import { useState, useRef, useEffect } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { LANGUAGES } from '../constants'

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
   

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 text-white bg-blue-950 font-bold text-xs uppercase hover:bg-blue-800 transition-all cursor-pointer"
      >
        EN <HiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-[150]">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className="w-full text-left px-4 py-2 text-sm text-blue-950 hover:bg-blue-50 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}