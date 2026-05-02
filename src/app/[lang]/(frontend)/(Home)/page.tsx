import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { Locale } from '@/types'

export default async function HomePage({ params }: { params: { lang: Locale } }) {
  const { lang } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const sportsPlayGround = await payload.find({
    collection: 'services',
    limit: 0,
    sort: 'createdAt',
    locale: lang, // Ensure we fetch the correct locale
  })

  return (
    <div>
      <section className="max-w-7xl mx-auto py-24 px-8">
        <div className="mb-16 text-center">
          <h2 className="font-headline font-black text-4xl md:text-5xl text-blue-950 uppercase tracking-tight">
            Sports Playgrounds
          </h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sportsPlayGround.docs.map((item) => (
            <Link
              href={`/${lang}/${item.id}`}
              className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              key={item.title}
            >
              <div className="aspect-[16/10] w-full overflow-hidden" key={item.title}>
                <Image
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={(item.image as Media)?.url || ''}
                  width={(item.image as Media)?.width || 1280}
                  height={(item.image as Media)?.height || 1280}
                />
              </div>
              <div className="p-8 bg-blue-950">
                <h3 className="font-headline font-black text-2xl text-white uppercase">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
