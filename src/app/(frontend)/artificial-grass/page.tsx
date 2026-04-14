import { getPayload } from 'payload'
import config from '@/payload.config'
import { Media } from '@/payload-types'
import Image from 'next/image'
import tartan4 from 'images/tartan4.png'
import tartan2 from 'images/tartan2.png'
import tartan5 from 'images/tartan5.png'
import tartan3 from 'images/tartan3.png'
import tartan1 from 'images/tartan1.png'

export default async function ProuductsPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const artificialGrass = await payload.find({
    collection: 'artificial-grass',
  })

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
              SYSTEM
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
            <div className="flex flex-col items-center text-center space-y-6 bg-blue-950 rounded-xl p-6 group cursor-pointer">
              <div className="aspect-square w-full bg-surface-container overflow-hidden ">
                <Image
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 "
                  src={tartan1}
                  alt="Tartan SW system"
                />
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-white">
                Tartan SW Layer
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-6 bg-blue-950 rounded-xl p-6 group cursor-pointer">
              <div className="aspect-square w-full bg-surface-container overflow-hidden">
                <Image
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105"
                  src={tartan2}
                  alt="Tartan M system"
                />
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-white">
                Tartan M Layer
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-6 bg-blue-950 rounded-xl p-6 group cursor-pointer">
              <div className="aspect-square w-full bg-surface-container overflow-hidden">
                <Image
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105"
                  src={tartan3}
                  alt="Tartan MW system"
                />
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-white">
                Tartan MW Layer
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col items-center text-center space-y-6 bg-blue-950 rounded-xl p-6 group cursor-pointer">
                <div className="aspect-square w-full bg-surface-container overflow-hidden">
                  <Image
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105"
                    src={tartan4}
                    alt="Tartan Sandwitch system"
                  />
                </div>
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-white">
                  Tartan Sandwitch Layer
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-6 bg-blue-950 rounded-xl p-6 group cursor-pointer">
                <div className="aspect-square w-full bg-surface-container overflow-hidden">
                  <Image
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105"
                    src={tartan5}
                    alt="Tartan MM system"
                  />
                </div>
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-white">
                  Tartan MM Layer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
              PROJECTS
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          {artificialGrass.docs && artificialGrass.docs.length > 0 ? (
            artificialGrass.docs.map((grass) => (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4" key={grass.id}>
                <div className="relative aspect-[3/4] bg-surface-variant overflow-hidden">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg group-hover:scale-105"
                    src={
                      (grass.image as Media)?.url ||
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
              <h3 className="text-2xl font-bold text-blue-950">No projects yet</h3>
              <p className="text-gray-500 mt-2">Check back later for new arrivals.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
