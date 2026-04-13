import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import first from 'images/first.png'
import second from 'images/second.png'
import cushion from 'images/cushion.png'
import hard from 'images/hard.png'
import soft from 'images/soft.png'
import { Media } from '@/payload-types'

export default async function PortfolioPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const acrylics = await payload.find({
    collection: 'acrylics',
  })

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950">
              ACRYLIC SOLUTIONS
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 group cursor-pointer">
              <div className="aspect-[16/9] bg-surface-variant overflow-hidden">
                <Image
                  className="w-full h-full object-cover transition-all duration-700 rounded-lg group-hover:scale-105"
                  src={first}
                  alt="close up detail of blue acrylic tennis court texture with crisp white boundary lines"
                />
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-blue-950">
                High-Performance Surface
              </p>
            </div>
            <div className="space-y-4 group cursor-pointer  p-4 rounded-lg ">
              <div className="aspect-[16/9] bg-surface-variant overflow-hidden">
                <Image
                  className="w-full h-full object-cover transition-all duration-700 rounded-lg group-hover:scale-105 "
                  src={second}
                  alt="wide angle shot of multi-sport indoor stadium with vibrant orange acrylic flooring"
                />
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-blue-950">
                High-Performance Surface
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950">
              SYSTEM
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="aspect-square w-full bg-surface-container overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={hard}
                  alt="cross-section detail showing multiple layers of colored acrylic sports surfacing material"
                />
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-blue-950">
                Acrylic Layering
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="aspect-square w-full bg-surface-container overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={cushion}
                  alt="technician applying fresh blue acrylic coating to a sports court surface using professional squeegees"
                />
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-blue-950">
                Acrylic Layering
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="aspect-square w-full bg-surface-container overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={soft}
                  alt="overhead view of a perfectly finished orange tennis court with symmetrical white lines"
                />
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-blue-950">
                Acrylic Layering
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950">
              PROJECTS
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          {acrylics.docs && acrylics.docs.length > 0 ? (
            acrylics.docs.map((acrylic) => (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4" key={acrylic.id}>
                <div className="relative aspect-[3/4] bg-surface-variant overflow-hidden">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={
                      (acrylic.image as Media)?.url ||
                      'https://via.placeholder.com/400x600?text=No+Image'
                    }
                    alt="vertical shot of a boutique blue tennis court at a luxury resort"
                    fill
                  />
                </div>
              </div>
            ))
          ) : (
            /* --- Empty State Placeholder --- */
            <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-950">No products found</h3>
              <p className="text-gray-500 mt-2">Check back later for new arrivals.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
