import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import { Media } from '@/payload-types'

export default async function PortfolioPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const portfolio = await payload.find({
    collection: 'portfolios',
  })

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="flex flex-col gap-8 md:gap-10">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-secondary uppercase italic">
              Company Projects :-
            </h1>
            <div className="flex flex-col gap-6 md:gap-8">
              {portfolio.docs && portfolio.docs.length > 0 ? (
                portfolio.docs.map((item) => (
                  <p
                    key={item.id}
                    className="text-slate-600 leading-relaxed text-lg border-l-4 border-orange-500 pl-6"
                  >
                    {item.description}
                  </p>
                ))
              ) : (
                <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-orange-500 pl-6">
                  No Text Found.
                </p>
              )}
            </div>
          </div>

          <div className="relative h-[400px] md:h-full md:min-h-[600px] w-full">
            <div className="w-full h-full bg-secondary rounded-2xl flex items-center justify-center relative overflow-hidden ">
              {portfolio.docs && portfolio.docs.length > 0 ? (
                portfolio.docs.map((item) => (
                   <Image
                key={item.id}
                alt="About-US image"
                className="absolute inset-0 w-full h-full object-cover brightness-75 hover:scale-105 transition-transform duration-700"
                src={(item.image as Media)?.url || ''} 
                fill
              />
                ))
              ) : (
               null
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
