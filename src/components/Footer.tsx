import { getPayload } from 'payload'
import config from '@/payload.config'
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import { unstable_cache } from 'next/cache'
import { Locale } from '@/types'

// Use unstable_cache to memoize the database query
const getCachedFooter = unstable_cache(
  async (lang: Locale) => {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    return await payload.find({
      collection: 'footer',
      limit: 0,
      locale: lang,
    })
  },
  ['footer-data-key'],
  { revalidate: 3600, tags: ['footer'] }, // Cache for 1 hour
)

export default async function Footer({ lang }: { lang: Locale }) {
  const footer = await getCachedFooter(lang)
  const messages = await import(`../../messages/${lang}.json`)
    .then((m) => m.default)
    .catch(() => import(`../../messages/en.json`).then((m) => m.default))

  return (
    <footer className="bg-blue-950 text-white py-12 md:py-16 px-6 md:px-8 border-t border-white/10 rounded-t-[2rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="font-headline font-black text-2xl tracking-tighter uppercase ">
            Beka <span className="text-blue-400">Sports</span>
          </h2>
          <p className="text-white/60 text-sm max-w-xs">
            State-of-the-art facilities and professional training for every athlete.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold uppercase tracking-widest text-blue-400 text-xs">{messages.footer.contact}</h3>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {footer.docs.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                {item.email.map((emailEntry: any, index: number) => (
                  <Link
                    key={index}
                    href={`mailto:${emailEntry.emailAddress}`}
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors"
                  >
                    <MdEmail size={18} className="text-blue-400" />
                    <span className="break-all">{emailEntry.emailAddress}</span>
                  </Link>
                ))}

                {item.whatsapp.map((whatsappEntry: any, index: number) => (
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

        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-bold uppercase tracking-widest text-blue-400 text-xs">{messages.footer.followUs}</h3>
          <div className="flex items-center gap-4">
            {footer.docs.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                {item.socialMedia.map((social: any, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <Link
                      href={social.instagram}
                      target="_blank"
                      className="p-3 bg-white/5 rounded-full hover:bg-red-500 transition-all"
                    >
                      <FaInstagram size={20} />
                    </Link>
                    <Link
                      href={social.facebook}
                      target="_blank"
                      className="p-3 bg-white/5 rounded-full hover:bg-blue-800 transition-all"
                    >
                      <FaFacebookF size={20} />
                    </Link>
                    <Link
                      href={social.tiktok}
                      target="_blank"
                      className="p-3 bg-white/5 rounded-full hover:bg-black transition-all"
                    >
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
          {messages.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
