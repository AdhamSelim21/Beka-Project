'use client'

import { useEffect, useState } from 'react'
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

export default function FooterClient({ 
  initialData, 
  messages, 
  lang 
}: { 
  initialData: any, 
  messages: any, 
  lang: string 
}) {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const CACHE_KEY = `footer_data_${lang}`
    
    // 1. Try to load from localStorage on mount
    const savedData = localStorage.getItem(CACHE_KEY)
    if (savedData) {
      setData(JSON.parse(savedData))
    }

    // 2. Save the fresh data from the server into localStorage for next time
    if (initialData) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(initialData))
    }
  }, [initialData, lang])

  // If there is absolutely no data yet (first load), we use initialData
  const footerData = data || initialData

  return (
    <footer className="bg-blue-950 text-white py-12 md:py-16 px-6 md:px-8 border-t border-white/10 rounded-t-[2rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-start">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="font-headline font-black text-2xl tracking-tighter uppercase">
            {messages.brandName} <span className="text-blue-400">{messages.brandSuffix}</span>
          </h2>
          <p className="text-white/60 text-sm max-w-xs">{messages.description}</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold uppercase tracking-widest text-blue-400 text-xs">
            {messages.contact}
          </h3>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {footerData?.docs?.map((item: any) => (
              <div key={item.id} className="flex flex-col gap-2">
                {item.email?.map((emailEntry: any, index: number) => (
                  <Link
                    key={index}
                    href={`mailto:${emailEntry.emailAddress}`}
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors"
                  >
                    <MdEmail size={18} className="text-blue-400" />
                    <span className="break-all">{emailEntry.emailAddress}</span>
                  </Link>
                ))}

                {item.whatsapp?.map((whatsappEntry: any, index: number) => (
                  <Link
                    key={index}
                    href={`https://wa.me/${whatsappEntry.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-green-400 transition-colors"
                  >
                    <FaWhatsapp size={18} className="text-blue-400" />
                    <span className="break-all">{whatsappEntry.number}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-bold uppercase tracking-widest text-blue-400 text-xs">
            {messages.followUs}
          </h3>
          <div className="flex items-center gap-4">
            {footerData?.docs?.map((item: any) => (
              <div key={item.id} className="flex items-center gap-4">
                {item.socialMedia?.map((social: any, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <Link href={social.instagram} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-red-500 transition-all">
                      <FaInstagram size={20} />
                    </Link>
                    <Link href={social.facebook} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-blue-800 transition-all">
                      <FaFacebookF size={20} />
                    </Link>
                    <Link href={social.tiktok} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-black transition-all">
                      <FaTiktok size={20} />
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/30">
          {messages.copyright}
        </p>
      </div>
    </footer>
  )
}