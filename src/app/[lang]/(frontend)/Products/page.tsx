import { getPayload } from 'payload'
import config from '@/payload.config'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { Locale } from '@/types'

export default async function ProductsPage({ params }: { params: { lang: Locale } }) {
  const { lang } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const products = await payload.find({
    collection: 'products',
    limit: 0,
    sort: 'createdAt',
    locale: lang,
  })

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {products.docs && products.docs.length > 0 ? (
          products.docs.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center gap-16 group rounded-lg p-8 border-solid border-3 border-white/10 bg-blue-950 shadow-2xl shadow-slate-950/40 transition-transform duration-500 hover:shadow-2xl hover:shadow-slate-950/60"
            >
              <div className="flex-1 space-y-6">
                <h2 className="font-headline font-extrabold text-4xl tracking-tighter text-on-surface text-white uppercase border-b-orange-500 border-b-6 inline-block pb-2">
                  {`/${lang}/${product.title}`}
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md border-l-4 border-orange-500 pl-6 text-white">
                  {`/${lang}/${product.description}`}
                </p>
              </div>
              <div className="flex-1 w-full aspect-[16/9] bg-surface-container rounded-lg overflow-hidden editorial-shadow transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  alt={product.title}
                  width={1600}
                  height={1200}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  src={
                    (product.image as Media)?.url ||
                    'https://via.placeholder.com/800x450?text=No+Image+Available'
                  }
                />
              </div>
            </div>
          ))
        ) : (
          /* --- Empty State Placeholder --- */
          <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-950">No products yet</h3>
            <p className="text-gray-500 mt-2">Check back later for new arrivals.</p>
          </div>
        )}
      </section>
    </div>
  )
}
