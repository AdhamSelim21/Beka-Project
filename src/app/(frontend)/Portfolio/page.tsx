import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import AboutUS from 'images/AboutUS.png'

export default async function PortfolioPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return <div>
     <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div className="flex flex-col gap-8 md:gap-10">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-secondary uppercase italic">
                  Portfolio :-
                </h1>
                <div className="flex flex-col gap-6 md:gap-8">
                  <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-orange-500 pl-6">
                    Since 2014, we have been a leading sports construction company dedicated to building
                    high-performance environments. From concept to completion, we deliver turnkey
                    solutions that meet the highest international standards.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-orange-500 pl-6">
                    We specialize in a wide range of professional courts, including football,
                    basketball, handball, and volleyball. Our expertise also covers the latest trends in
                    racket sports, such as tennis, padel tennis, pickleball, and padbol.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-orange-500 pl-6">
                    In addition to outdoor courts, we provide complete gym flooring solutions tailored
                    for durability. Every project we undertake is built to last, ensuring a safe and
                    professional surface for athletes of all levels.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-orange-500 pl-6">
                    Using expert craftsmanship and proven materials, we transform empty spaces into
                    premier sports destinations. Our focus is on quality and precision, creating venues
                    that inspire performance and stand the test of time.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-orange-500 pl-6">
                    Using expert craftsmanship and proven materials, we transform empty spaces into
                    premier sports destinations. Our focus is on quality and precision, creating venues
                    that inspire performance and stand the test of time.
                  </p>
                </div>
              </div>
    
              <div className="relative h-[400px] md:h-full md:min-h-[600px] w-full">
                <div className="w-full h-full bg-secondary rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <Image
                    alt="About-US image"
                    className="absolute inset-0 w-full h-full object-cover brightness-75 hover:scale-105 transition-transform duration-700"
                    src={AboutUS}
                    fill
                  />
                </div>
              </div>
            </div>
          </section>
  </div>
}